
import { useRef, useState,useEffect, useContext } from "react";
import GameContext from "./gameContext";
import SocketContext from "../socket/socketContext";
import AuthContext from "../auth/authContext";
import { CALL, CHECK, FOLD, JOIN_TABLE, LEAVE_TABLE, RAISE, REBUY, SIT_DOWN,STAND_UP, TABLES_UPDATED, TABLE_JOINED, TABLE_LEFT } from "../../libs/actions";
import loadUserData from "../../hooks/userData";

const GameState = ({children}) => {
    const {socket} = useContext(SocketContext);
    const {userToken} = useContext(AuthContext);
    const [messages, setMessages] = useState([]);
    const [currentTable, setCurrentTable] = useState(null);
    const [isPlayerSeated, setIsPlayerSeated] = useState(false);
    const [turn, setTurn] = useState(false);
    const [seatId, setSeatId] = useState(null)
    const [turnTimeOutHandle, setHandle] = useState(null);
    const currentTableRef = useRef(currentTable);
      useEffect(() => {
        currentTableRef.current = currentTable;
        isPlayerSeated &&
          seatId &&
          currentTable.seats[seatId] &&
          turn !== currentTable.seats[seatId].turn &&
          setTurn(currentTable.seats[seatId].turn);
        // eslint-disable-next-line
      }, [currentTable]);

      useEffect(() => {
        if (turn && !turnTimeOutHandle) {
          const handle = setTimeout(fold, 15000);
          setHandle(handle);
        } else {
          turnTimeOutHandle && clearTimeout(turnTimeOutHandle);
          turnTimeOutHandle && setHandle(null);
        }
        // eslint-disable-next-line
      }, [turn]);
      useEffect(()=>{
        if(socket){
            ///if offline or disconnect or close, call LeavetableFnc again!!!
            socket.on(TABLES_UPDATED, ({table,message,from})=>{
                console.log(TABLES_UPDATED, table,message, from);
                setCurrentTable(table);
                message && addMessage(message);
            });
            socket.on(TABLE_JOINED, ({tables, tableId})=>{
                console.log(TABLE_JOINED, tables,tableId );
                setCurrentTable(tables[tableId]);
            });
            socket.on(TABLE_LEFT,({tables, tableId})=>{
                console.log(TABLE_LEFT, tables, tableId);
                setCurrentTable(null);
                loadUserData(userToken);
                setMessages([]);
            });
        }
        return () => leaveTable();
      },[socket])
      const joinTable = (tableId) => {
        console.log(JOIN_TABLE, tableId);
        socket.emit(JOIN_TABLE, tableId);
      };
      const leaveTable = () =>{
        isPlayerSeated && standUp();
        currentTableRef &&
        currentTableRef.current &&
        currentTableRef.current.id &&
        socket.emit(LEAVE_TABLE, currentTableRef.current.id);
       
      }
      const sitDown = (tableId, seatId, amount) =>{
        socket.emit(SIT_DOWN, {tableId, seatId, amount});
        setIsPlayerSeated(true);
        setSeatId(seatId)
      }
      const rebuy = (tableId, seatId, amount) =>{
        socket.emit(REBUY, {tableId, seatId, amount});
      };
      const standUp = () => {
        currentTableRef && 
        currentTableRef.current &&
        socket.emit(STAND_UP, currentTableRef.current.id);
        setIsPlayerSeated(false);
        setSeatId(null);
      }
      const addMessage = (m) =>{
        setMessages((prevMessage)=>[...prevMessage, m]);
        console.log(m);
      }
      const fold= ()=>{
        currentTableRef &&
        currentTableRef.current &&
        socket.emit(FOLD, currentTableRef.current.id);
      };
      const check = ()=>{
        currentTableRef &&
        currentTableRef.current &&
        socket.emit(CHECK, currentTableRef.current.id);
      }
      const call = ()=>{
        currentTableRef &&
        currentTableRef.current &&
        socket.emit(CALL, currentTableRef.current.id);
      }
      const raise = (amount)=>{
        currentTableRef &&
        currentTableRef.current &&
        socket.emit(RAISE, {tableId:currentTableRef.current.id, amount});
      };
    return (
      <GameContext.Provider
        value={{
          messages,
          currentTable,
          isPlayerSeated,
          seatId,
          joinTable,
          leaveTable,
          sitDown,
          standUp,
          addMessage,
          fold,
          check,
          call,
          raise,
          rebuy,
        }}
      >
        {children}
      </GameContext.Provider>
    );
}
export default GameState;
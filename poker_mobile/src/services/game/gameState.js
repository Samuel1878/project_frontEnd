
import { useRef, useState,useEffect, useContext } from "react";
import GameContext from "./gameContext";
import SocketContext from "../socket/socketContext";
import AuthContext from "../auth/authContext";

const GameState = ({history, children}) => {
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
        if(socket)
      },)
    return(
        <GameContext.Provider
            value={{
                messages,
                currentTable,
                isPlayerSeated,
                seatId
            }}>
            {children}
        </GameContext.Provider>
    )
}
export default GameState;
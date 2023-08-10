import { useContext, useEffect, useState } from "react"
import AuthContext from "../auth/authContext"
import SocketContext from "./socketContext";
import {io} from "socket.io-client";
import {
  DISCONNECT,
  FETCH_LOBBY_INFO,
  PLAYERS_UPDATED,
  RECEIVE_LOBBY_INFO,
  TABLES_UPDATED,
} from "../../libs/actions";
import globalContext from "../global/globalContext";
import config from "../../libs/helper/config";

const SocketProvider = ({children})=> {
    const {userToken} = useContext(AuthContext);
    const {setTables, setPlayers} = useContext(globalContext)
    const [socket, setSocket] = useState(null);
    const [socketId, setSocketId] = useState(null);
    useEffect(()=>{
        cleanUp()
    },[]);
    useEffect(()=>{
        if(userToken){
            const webSocket = socket || connect();
            webSocket && webSocket.emit(FETCH_LOBBY_INFO, userToken);
        }else{
            cleanUp();
        }
        return ()=> cleanUp();
    },[userToken]);
    function cleanUp() {
            socket && socket.emit(DISCONNECT);
            socket && socket.close();
            setSocket(null);
            setSocketId(null);
            setPlayers(null);
            setTables(null);
    };
    function connect () {
        const socket = io("http://localhost:4001", {
          reconnectionDelayMax: 10000,
        })
        registerCallbacks(socket);
        setSocket(socket);
        return socket;
    }
    function registerCallbacks(socket){
        socket.on(RECEIVE_LOBBY_INFO, ({tables,players, socketId})=>{
            console.log(RECEIVE_LOBBY_INFO, tables,players, socketId);
            setSocketId(socketId);
            setTables(tables);
            setPlayers(players);
        });
        socket.on(PLAYERS_UPDATED,(players)=>{
            console.log(PLAYERS_UPDATED, players);
            setPlayers(players);
        });
        socket.on(TABLES_UPDATED, (tables)=>{
            console.log(TABLES_UPDATED, tables);
            setTables(tables)
        })

    }

    return(
        <SocketContext.Provider value={{socket,socketId,cleanUp}}>
            {children}
        </SocketContext.Provider>
    )
}
export default SocketProvider
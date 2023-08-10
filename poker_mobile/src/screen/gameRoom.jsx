import {useEffect, useContext, useState} from "react";
import { Image, ImageBackground, Text, View,Pressable, TouchableOpacity, } from "react-native";

import styles, { _light, _lower, _main } from "../__Style";
import Seat from "../components/seat";

import { LinearGradient } from "react-native-svg";
import gameContext from "../services/game/gameContext";
import table from "../../assets/table.svg"

import SocketContext from "../services/socket/socketContext";
export default GameRoom = ({navigation}) => {
   const {
    messages,
    currentTable,
    isPlayerSeated,
    seatId,
    joinTable,
    leaveTable,
    sitDown,
    standUp,
    fold,
    check,
    call,
    raise,
  } = useContext(gameContext);
  const {socket} = useContext(SocketContext)
  const [bet, setBet ] = useState(0);
  function LeaveTable () {
    leaveTable();
    navigation.navigate("home");
  }
  useEffect(()=>{
    socket
    console.log(messages)
  },[socket])
  useEffect(()=>{
    console.log(currentTable);
    currentTable && 
      (currentTable.callAmount > currentTable.minBet
        ? setBet(currentTable.callAmount)
        :currentTable.pot>0
        ?setBet(currentTable.minRaise)
        :setBet(currentTable.minBet));
  },[currentTable])
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
           source={require("../../assets/pokerTable.jpg")}
          resizeMode="cover"
          style={styles.table}
        >
          <View style={styles.tablePart5}>

          </View>
          <View style={styles.tablePart4}></View>
          <View style={styles.tablePart3}>
            {
              currentTable && (
                <>
                <TouchableOpacity
                  onPress={LeaveTable}
                  style={styles.leaveTableBtn}>
                  <Text style={styles.leaveTableBtnTxt}>
                    Leave table
                  </Text>
                </TouchableOpacity>
                {
                  !isPlayerSeated && (
                    <View>
                      <Text>{currentTable.name}</Text>
                      <Text>{currentTable.limit}</Text>
                      <Text>{currentTable.minBet}</Text>
                    </View>
                  )
                }
                </>
              )
            }
          </View>
          <View style={styles.tablePart2}></View>
            <ImageBackground
              resizeMode="cover"
              source={require("../../assets/playBtn.jpg")}
              style={styles.tablePart1}
            ></ImageBackground>
        </ImageBackground>
      </View>
    );

}
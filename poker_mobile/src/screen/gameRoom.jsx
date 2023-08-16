import {useEffect, useContext, useState} from "react";
import { Image, ImageBackground, Text, View,Pressable, TouchableOpacity, TextInput, } from "react-native";

import styles, { _light, _lower, _main } from "../__Style";
import Seat from "../components/seat";

import { LinearGradient } from "react-native-svg";
import gameContext from "../services/game/gameContext";
import table from "../../assets/table.svg"

import SocketContext from "../services/socket/socketContext";
import globalContext from "../services/global/globalContext";
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
  const {socket} = useContext(SocketContext);
  const {chipsAmount} = useContext(globalContext);
  const [bet, setBet ] = useState(0);
  const maxBuyIn = currentTable?.limit;
  const minBuyIn = currentTable?.minBet * 2 * 10;
  const [amount, setAmount] = useState(minBuyIn);
  const validAmount = (m) => {
    if( m <= minBuyIn){
      return setAmount(minBuyIn)
    }else if(m <= chipsAmount){
      return setAmount(m)
    } else {
      setAmount(chipsAmount)
      return
    }
  }
  function LeaveTable () {
    leaveTable();
    navigation.navigate("home");
  }
  function sitDownFnc (id, seatNumber,amount) {
    sitDown(id,seatNumber,parseInt(amount))
  }
  useEffect(()=>{
    socket
    console.info(messages);
  },[socket])
  useEffect(()=>{
    console.debug(currentTable?.currentNumberPlayers);
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
    
          </View>
          <View style={styles.tablePart2}></View>
          <View style={styles.tablePart1}>
            {
              currentTable && (
                < View style={styles.bottom1Con}>
                 <TouchableOpacity
                  onPress={LeaveTable}
                  style={styles.leaveTableBtn}>
                  <Text style={styles.leaveTableBtnTxt}>
                    Leave table
                  </Text>
                </TouchableOpacity>
                {
                  !isPlayerSeated? (
                    <View style={styles.unsitSeat}>
                      <View style={styles.tablePreData}>
                        <Text style={styles.tableDataTxt}>{currentTable.name}</Text>
                        <Text style={styles.tableDataTxt}>{currentTable.limit}</Text>
                        <Text style={styles.tableDataTxt}>
                          {currentTable.smallBlind} / {currentTable.bigBlind}</Text>
                      </View>
                        <TextInput
                          style={styles.buyIn}
                          keyboardType="numeric"
                          onChangeText={(e)=>validAmount(e)}
                          defaultValue={minBuyIn}
                          value={amount}/>
                        <TouchableOpacity
                        onPress={()=>sitDownFnc(currentTable.id,currentTable.currentNumberPlayers,amount)}
                        style={styles.sitDownBtn}>
                          <Text style={styles.leaveTableBtnTxt}>
                            Sit Down
                          </Text>
                      </TouchableOpacity>
                          
                    
                    </View>
                  ):(
                    <GameUi/>
                  )

                }
              </View>)
            }
          </View>
        </ImageBackground>
      </View>
    );

}
import {useEffect, useContext, useState} from "react";
import { Image, ImageBackground, Text, View,Pressable, TouchableOpacity, TextInput, } from "react-native";

import styles, { _light, _lower, _main } from "../__Style";
import {Seat} from "../components/seat";
import { UserSeat } from "../components/UserSeat";

import { LinearGradient } from "react-native-svg";
import gameContext from "../services/game/gameContext";
import table from "../../assets/table.svg"

import SocketContext from "../services/socket/socketContext";
import globalContext from "../services/global/globalContext";
import { GameUI } from "../components/GameUI";
import { GameInfo } from "../components/gameInfo";
import { PokerCard } from "../components/pokerCard";
export default GameRoom = ({navigation}) => {
   const {
    messages,
    currentTable,
    currentTables,
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
  const {chipsAmount,setOppUser,oppUser} = useContext(globalContext);
  const [bet, setBet ] = useState(0);
  const [amount, setAmount] = useState(null);
 
  const maxBuyIn = currentTable?.limit;
  const minBuyIn = currentTable?.minBet * 2 * 10;
 
  function LeaveTable () {
    leaveTable();
    navigation.navigate("home");
    setOppUser([])
  }
  const checkEmptySeat = () => {
    
    return currentTable?.players?.length == 0? 1: currentTable?.players?.length
  }
  async function sitDownFnc () {
    let seatNo = await checkEmptySeat() 
    if(parseInt(amount)<= (maxBuyIn)){
       await sitDown(
            currentTable.id,
            seatNo,
            parseInt(amount)
          )
        return
    }
    console.info("invalid Amount")
    console.log(parseInt(amount))
  } 
  useEffect(()=>{
    if(currentTable && seatId){
      setOppUser(Object.keys(currentTable.seats).filter(v => v != seatId))
    }
  },[seatId,currentTable]);
  // useEffect(()=>{
  //   for (let index = 0; index < array.length; index++) {
  //     const element = array[index];
      
  //   }
  // },[oppUser])
  useEffect(()=>{
    socket
    console.info(messages);
  },[socket])
  useEffect(()=>{
    currentTable && 
      (currentTable.callAmount > currentTable.minBet
        ? setBet(currentTable.callAmount)
        :currentTable.pot>0
        ?setBet(currentTable.minRaise)
        :setBet(currentTable.minBet));
      setAmount(currentTable?.limit.toString())
  },[currentTable])
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
           source={require("../../assets/pokerTable.jpg")}
          resizeMode="cover"
          style={styles.table}
        >
          <View style={styles.tablePart5}>
            {
              currentTable && (
                <Text style={styles.tableId}>
                  Table id:{currentTable.id}
            </Text>
              )
            }
            <View style={styles.seat7}>
              <Seat
                  seatNumber={oppUser[5]}
                  currentTable={currentTable}
                  isPlayerSeated={isPlayerSeated}
          
              />
            </View>
           <View style={styles.seat6}>
              <Seat
                  seatNumber={oppUser[4]}
                  currentTable={currentTable}
                  isPlayerSeated={isPlayerSeated}
              />
            </View>

          </View>
          <View style={styles.tablePart4}>
            <View style={styles.seat5}>
              <Seat
                  seatNumber={oppUser[3]}
                  currentTable={currentTable}
                  isPlayerSeated={isPlayerSeated}
              />
            </View>
            <View style={styles.pot}>

            </View>
            <View style={styles.seat4}>
              <Seat
                  seatNumber={oppUser[2]}
                  currentTable={currentTable}
                  isPlayerSeated={isPlayerSeated}
              />
            </View>
          </View>
          <View style={styles.tablePart3}>
            {
              currentTable?.board && currentTable?.board.length > 0 && 
              <View style={styles.board}>
                {
                  currentTable?.board?.map((card, index)=>(
                    <PokerCard key={index} card={card}/>
                  )) 
                }
              </View>
            }
          </View>
          <View style={styles.tablePart2}>
            <View style={styles.seat3}>
              <Seat
                  seatNumber={oppUser[1]}
                  currentTable={currentTable}
                  isPlayerSeated={isPlayerSeated}
              />
            </View>
            <View style={styles.messagesBox}>
        
                {
                  messages && messages.length>0 && (
                    <>
                      <Text>{messages[messages.length-1]}</Text>
                      {
                        !isPlayerSeated && (
                          <Text>Sit down to join the game</Text>
                        )
                      }
                      {
                        currentTable?.winMessages.length>0 && (
                          <Text>
                            {
                              currentTable?.winMessages[currentTable?.winMessages?.length -1]
                            }
                          </Text>
                        )
                      }
                    </>
                  )
                }
                
                {
                  currentTable?.winMessages?.length === 0 && (
                    <GameInfo currentTable={currentTable}/>
                  )
                }
            </View>
            <View style={styles.seat2}>
              <Seat
                  seatNumber={oppUser[0]}
                  currentTable={currentTable}
                  isPlayerSeated={isPlayerSeated}
              />
            </View>
          </View>
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
                        <Text style={styles.tableDataTxt}>        
                         {currentTables.name.slice(0,17).toUpperCase()}
                        </Text>
                        <Text style={styles.tableDataTxt}>  
                         | Limit: {currentTables.limit}   
                        </Text>
                        <Text style={styles.tableDataTxt}>
                          | Blinds: {currentTables.smallBlind} / {currentTables.bigBlind}</Text>
                      </View>
                        <Text style={styles.tableDataTxt}> Buy in:</Text>
                        <TextInput
                          style={styles.buyIn}
                          //keyboardType="numeric"
                          //maxLength={maxBuyIn.length}
                          onChangeText={(e)=>setAmount(e)}
                          defaultValue={amount}/>
                        <TouchableOpacity
                        onPress={sitDownFnc}
                        style={styles.sitDownBtn}>
                          <Text style={styles.leaveTableBtnTxt}>
                            Sit Down
                          </Text>
                      </TouchableOpacity>
                          
                    
                    </View>
                  ):(
                    <>
                      <TouchableOpacity
                        style={styles.standUpBtn}
                        onPress={()=>standUp()}>
                        <Text style={styles.tableDataTxt}>Stand Up</Text>
                      </TouchableOpacity>
                      <GameUI 
                        currentTable={currentTable}
                        seatId={seatId}
                        bet={bet}
                        setBet={setBet}
                        raise={raise}
                        standUp={standUp}
                        fold={fold}
                        check={check}
                        call={call}/>
                      <View style={styles.seat1}>
                        <UserSeat
                          seatNumber={seatId}
                          currentTable={currentTable}
                        />
                      </View>
                    </>
                    )

                }
              </View>)
            }
          </View>
        </ImageBackground>
      </View>
    );

}
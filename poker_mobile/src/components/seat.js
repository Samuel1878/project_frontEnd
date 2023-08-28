import React, { useEffect, useState,useContext } from "react";
import {Text,View,Image} from "react-native";
import SeatTimer from "./seatTimer";
import styles from "../__Style";
import gameContext from "../services/game/gameContext";
import { PokerCard } from "./pokerCard";

export const Seat = ({
  currentTable,
  seatNumber,
  isPlayerSeated,
}) => {
const seat = currentTable?.seats[seatNumber];




  return (
    <View style={{ width: 100, height: 100 }}>
      <SeatTimer
        isTurn={seat?.turn}>
        {!seat ?(
          <Text style={styles.foldTxt}> 
            Empty Seat:{seatNumber}
          </Text>
        ):(
          <Text style={styles.foldTxt}>
            {seat.player.name}
          </Text>
        )
         }
       
      </SeatTimer>
      <View style={styles.hands}>
        {
          seat?.hand && seat?.hand.map((card,index)=>(
            console.log(card)
          ))
        }

      </View>
    </View>
  );
};
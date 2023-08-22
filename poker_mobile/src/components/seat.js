import React, { useEffect, useState,useContext } from "react";
import {Text,View,Image} from "react-native";
import SeatTimer from "./seatTimer";
import styles from "../__Style";

export const Seat = ({
  currentTable,
  seatNumber,
  isPlayerSeated,
}) => {
const [isTurn, setIsTurn] = useState(false);
useEffect(()=>{
console.debug(currentTable?.seats);
},[currentTable])



useEffect(()=>{
    
},[])


  return (
    <View style={{ width: 100, height: 100 }}>
        
      <SeatTimer
        isTurn={isTurn}>
       
      </SeatTimer>
    </View>
  );
};
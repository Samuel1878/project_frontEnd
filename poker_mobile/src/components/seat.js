import React, { useEffect, useState } from "react";
import {Text,View} from "react-native";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
export const Seat = ({
  currentTable,
  seatNumber,
  isPlayerSeated,
  sitDown,
}) => {
  const [isTurn, setIsTurn] = useState(false);
const rs = [1,2,3,4,5,6,7,8,9,];
useEffect(()=>{
console.debug(currentTable?.seats);
},[currentTable])






  return (
    <View>
      <CountdownCircleTimer
        isPlaying={isTurn}
        duration={100}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[100, 50, 25, 10]}
        onComplete={() => ({ shouldRepeat: false, delay: 1 })}
        updateInterval={1}
      ></CountdownCircleTimer>
    </View>
  );
};
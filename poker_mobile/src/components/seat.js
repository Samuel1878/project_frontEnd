import React, { useEffect, useState } from "react";
import {Text,View} from "react-native";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
export const Seat = ({
  currentTable,
  seatNumber,
  isPlayerSeated,
}) => {
  const [isTurn, setIsTurn] = useState(false);
const rs = [1,2,3,4,5,6,7,8,9,];
useEffect(()=>{
console.debug(currentTable?.seats);
},[currentTable])






  return (
    <View style={{ width: 100, height: 100 }}>
      <CountdownCircleTimer
        isPlaying={isTurn}
        size={110}
        duration={20}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[20, 7]}
        onComplete={() => ({ shouldRepeat: false, delay: 0.5 })}
        updateInterval={0.1}
      ></CountdownCircleTimer>
    </View>
  );
};
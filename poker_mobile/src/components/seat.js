import React, { useState } from "react";
import {Text,View} from "react-native";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
export default Seat = () => {
    const [isTurn, setIsTurn]= useState(false);
    return ( 
        <View>
            <CountdownCircleTimer
                isPlaying={isTurn}
                duration={100}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[100, 50, 25, 10]}
                onComplete={() => ({ shouldRepeat: false, delay: 1 })}
                updateInterval={1}>
             </CountdownCircleTimer>
        </View>
    )
}
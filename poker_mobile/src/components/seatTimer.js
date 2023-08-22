import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
const SeatTimer = ({ isTurn, children }) => {
  return (
    <CountdownCircleTimer
      isPlaying={isTurn}
      size={110}
      duration={20}
      padding={10}
      colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
      colorsTime={[20, 7]}
      onComplete={() => ({ shouldRepeat: false, delay: 0.5 })}
      updateInterval={0.1}
    >
      {
        (remainingTime,color)=>children
      }
    </CountdownCircleTimer>
  );
};
export default SeatTimer;
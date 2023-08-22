import React, { useEffect, useState, useContext } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import SeatTimer from "./seatTimer";
import globalContext from "../services/global/globalContext";
import styles from "../__Style";

export const UserSeat = ({ currentTable, seatNumber, isPlayerSeated }) => {
  const [isTurn, setIsTurn] = useState(false);
  const { userSrc, userName } = useContext(globalContext);
  function showProfile () {
    console.log(userName)
  }
  useEffect(() => {
    console.debug(currentTable?.seats);
  }, [currentTable]);

//   useEffect(() => {}, []);

  return (
    <View style={styles.userSeatCon}>
      <SeatTimer isTurn={isTurn}>
        <TouchableOpacity
            style={styles.showProfileBtn}
            onPress={showProfile}>
          <Image style={styles.seatUserImg} source={userSrc} />
        </TouchableOpacity>
      </SeatTimer>
    </View>
  );
};

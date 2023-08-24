import React, { useEffect, useState, useContext } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import SeatTimer from "./seatTimer";
import globalContext from "../services/global/globalContext";
import styles from "../__Style";
import gameContext from "../services/game/gameContext";

export const UserSeat = ({ currentTable, seatNumber, isPlayerSeated }) => {
const {seatId} = useContext(gameContext);
  const seat = currentTable?.seats[seatId]
  const { userSrc, userName } = useContext(globalContext);
  function showProfile () {
    console.log(userName)
  }
  // useEffect(() => {
  //   console.debug(currentTable?.seats);
  // }, [currentTable]);

//   useEffect(() => {}, []);

  return (
    <View style={styles.userSeatCon}>
      <SeatTimer isTurn={seat?.turn}>
        <TouchableOpacity
            style={styles.showProfileBtn}
            onPress={showProfile}>
          <Image style={styles.seatUserImg} source={userSrc} />
        </TouchableOpacity>
      </SeatTimer>
    </View>
  );
};

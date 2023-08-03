import {useEffect} from "react";
import { Image, ImageBackground, Text, View,Pressable, } from "react-native";

import styles, { _light, _lower, _main } from "../__Style";
import Seat from "../components/seat";

import { LinearGradient } from "react-native-svg";


export default GameRoom = () => {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../assets/pokerTable.jpg")}
          resizeMode="cover"
          style={styles.table}
        >
          <LinearGradient 
            colors={[_main,_light,_lower]}
            style={styles.userTable}>
            <ImageBackground
              resizeMode="cover"
              source={require("../../assets/playBtn.jpg")}
              style={styles.userTableBg}
            ></ImageBackground>
          </LinearGradient>
        </ImageBackground>
      </View>
    );

}
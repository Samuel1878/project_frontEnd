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
          <View style={{flex:1, backgroundColor:"red"}}>

          </View>
          <View style={{flex:3}}>

          </View>
            <ImageBackground
              resizeMode="cover"
              source={require("../../assets/playBtn.jpg")}
              style={styles.userTableBg}
            ></ImageBackground>
        </ImageBackground>
      </View>
    );

}
import { ImageBackground, TouchableOpacity } from "react-native";
import { BlurView } from 'expo-blur';
import { Video, ResizeMode } from "expo-av";
import { LinearGradient } from 'expo-linear-gradient';
import { View,Text,Button,Image } from "react-native";
import  { app_one,app_three,app_four, app_six, app_two, luxe_six} from "../__Style";
import styles from "../__Style";
import { useEffect, useRef } from "react";

export default AccountScreen = ({navigation}) => {
  
    return (
      <ImageBackground
         style={styles.accountBg}
         resizeMode="cover"
         source={require("../../assets/accBg.jpg")}>
        <BlurView intensity={5} style={styles.accountContainer} tint="dark">
              <View style={styles.accountInnerBox}>
               <TouchableOpacity 
                style={styles.accBtn}
                onPress={()=>navigation.navigate("register")}>
                <Text style={styles.accBtnTxt}>Register</Text>
               </TouchableOpacity>

               <TouchableOpacity
                style={styles.accBtn}
                onPress={()=>navigation.navigate("login")}>
                <Text  style={styles.accBtnTxt}>Login</Text>
               </TouchableOpacity>
              </View>
        </BlurView>
    </ImageBackground>
    );
}
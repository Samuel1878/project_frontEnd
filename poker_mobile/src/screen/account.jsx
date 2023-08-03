import { ImageBackground, TouchableOpacity } from "react-native";
import { BlurView } from 'expo-blur';
import { Video, ResizeMode } from "expo-av";
import { LinearGradient } from 'expo-linear-gradient';
import { View,Text,Button,Image } from "react-native";
import  { app_one,app_three,app_four, app_six, app_two, luxe_six} from "../__Style";
import styles from "../__Style";
import { useEffect, useRef } from "react";

export default AccountScreen = ({navigation}) => {
    const video = useRef(null);
    useEffect(()=>{
        video.current.playAsync();
    },[])
    return (
      <View style={{flex:1}}>
        <Video
            ref={video}
            source={require("../../assets/accountBg.mp4")}
            resizeMode={ResizeMode.COVER}
            isLooping
            useNativeControls={false}
            style={styles.accountBg}
        />
        <BlurView intensity={50} style={styles.accountContainer}>
          <View style={styles.accountBox}>
              <View style={styles.accountInnerBox}>
                {/* <View>
                   <TouchableOpacity
                    onPress={()=>()}>
                    <Image style={styles.exitIcon} source={require("../../assets/exit.png")}/>
                  </TouchableOpacity> 
                </View> */}
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
          </View>
        </BlurView>
    </View>
    );
}
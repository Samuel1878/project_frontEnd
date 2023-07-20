import { ImageBackground } from "react-native";
import { BlurView } from 'expo-blur';
import { Video, ResizeMode } from "expo-av";
import { LinearGradient } from 'expo-linear-gradient';
import { View,Text,Button } from "react-native";
import  { app_one,app_three,app_four, app_six} from "../__Style";
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
        <BlurView intensity={5} style={styles.accountContainer}>
          <View style={styles.accountBox}>
            <LinearGradient
              colors={[app_one, app_three]}
              style={styles.accountBg}
              end={{ x: 0.2, y: 0.3 }}
            >
              <View style={styles.accountInnerBox}>
                <Button
                  title="Register"
                  style={styles.accBtn}
                  color={app_three}
                  onPress={() => navigation.navigate("register")}
                />
                <Button
                  title="Login"
                  color={app_six}
                  style={styles.accBtn}
                  onPress={() => navigation.navigate("login")}
                ></Button>
              </View>
            </LinearGradient>
          </View>
        </BlurView>
    </View>
    );
}
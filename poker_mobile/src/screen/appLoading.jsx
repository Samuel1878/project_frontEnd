import { Video,ResizeMode } from "expo-av"
import {Text} from "react-native"
import styles from "../__Style"
import { useEffect, useRef } from "react"
export default function AppLoading ({navigation}){
    const vRef = useRef(null);

useEffect(()=>{
    vRef.current.playAsync();
    setTimeout(()=>{
    navigation?.navigate("account" || "welcome")
},4000)
},[])
    return (
      <Video
        resizeMode={ResizeMode.COVER}
        useNativeControls={false}
        ref={vRef}
        style={styles.appLoading}
        isMuted={true}
        source={require("../../assets/welcomeBg.mp4")}
      />
    );
}
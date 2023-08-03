import { Video } from "expo-av"
import {Text} from "react-native"
import styles from "../__Style"
import { useEffect, useRef } from "react"
export default AppLoading = ({navigation}) =>{
    const vRef = useRef(null);
setTimeout(()=>{
    navigation?.navigate("account")
},2500)
useEffect(()=>{
    vRef.current.playAsync()
},[])
    return (
      <Video
        useNativeControls={false}
        ref={vRef}
        style={styles.appLoading}
        isMuted={true}
        source={require("../../assets/welcomeBg.mp4")}
      />
    );
}
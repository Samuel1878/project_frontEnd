import { Image, Text,ImageBackground, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import styles, { _lower, _main, _second } from "../__Style";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useContext, useEffect } from "react";
import {AuthContext} from "../services/AuthUser"
import axios from "axios";
//const { token } =  useContext(AuthContext);


const UserProfile = ({navigation}) => {
    const token = 0
    
    

    useEffect(()=>{
        axios
          .get("http://localhost:4001/api/userData/chip", {params:{token:token}}, {
            headers: { "Content-Type": "application/json" },
          })
          .then((res) => {
            console.log(res.data.chips);
          })
          .catch((err) => console.warn(err.message));
    },[])
    return (
      <TouchableWithoutFeedback style={styles.profileContainer}>
        <ImageBackground
          style={styles.profileBg}
          resizeMode="cover"
          source={require("../../assets/profileBg.png")}
        >
     
          <TouchableOpacity
            style={styles.profileExitBtn}
            onPress={() => navigation.navigate("home")}
          >
            <LinearGradient
              style={styles.proBtnBg}
              start={{ x: 0.2, y: 0.1 }}
              colors={[_main, _second, _lower]}
            >
              <View style={styles.proBtnInner}>
                <Image
                  style={styles.exitIcon}
                  source={require("../../assets/goldenArrow.png")}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.proTop}></View>
          <BlurView style={styles.proMid} intensity={10} tint="dark">
            <View style={styles.proLeft}>
              <ImageBackground
                resizeMode="cover"
                style={styles.avatar}
                source={require("../../assets/avatar.png")}
              ></ImageBackground>
            </View>
            <View style={styles.promid}>
              <Text style={styles.proData}>UserType: platinum user</Text>
              <Text style={styles.proData}>Name: lalalalalalalala</Text>
              <Text style={styles.proData}>Phone: 234234234234</Text>
              <Text style={styles.proData}>Chip: 10000</Text>
            </View>
            <View style={styles.proRight}>
              <Image
                style={styles.vipLogo}
                source={require("../../assets/vipLogo.png")}
              />
            </View>
          </BlurView>
          <View style={styles.proBot}></View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
}
export default UserProfile
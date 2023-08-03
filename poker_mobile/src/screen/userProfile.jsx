import { Image, Text,ImageBackground, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import styles, { _lower, _main, _second } from "../__Style";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useContext, useEffect,useState } from "react";
import {AuthContext} from "../services/AuthUser"
import axios from "axios";
import { requestPermissionsAsync } from "expo-av/build/Audio";


const UserProfile = ({navigation}) => {
    const [name,setName] = useState("..........");
    const [phone, setPhone ]= useState("09 1234 ...");
    const [userSrc, setUserSrc] = useState(null);
    const [chip, setChip] = useState("1000")
    const { userToken,signOut } = useContext(AuthContext);
    useEffect(()=>{
        axios
          .get("http://localhost:4001/api/userData/chip", {
            params:{token:userToken,reqData:"allData"},
            headers: { "Content-Type": "application/json" },
          })
          .then((res) => {
            console.log(res.data);
            setName(res.data.data.name);
            setPhone(res.data.data.phone);
            setUserSrc(res.data.data.proSrc);
            setChip(res.data.data.chips)
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
              >
                {userSrc == null ? (
                  <Image
                    resizeMode="cover"
                    style={styles.defaultUserProfile}
                    source={require("../../assets/user.png")}
                  />
                ) : (
                  <Image
                    resizeMode="cover"
                    style={styles.defaultUserProfile}
                    source={{uri:userSrc}}
                  />
                )}
              </ImageBackground>
            </View>
            <View style={styles.promid}>
              <Text style={styles.proData}>UserType: VIP</Text>
              <Text style={styles.proData}>Name: {name}</Text>
              <Text style={styles.proData}>Phone: {phone}</Text>
              <Text style={styles.proData}>Chip: {chip}</Text>
            </View>
            <View style={styles.proRight}>
              <Image
                style={styles.vipLogo}
                source={require("../../assets/vipLogo.png")}
              />
            </View>
          </BlurView>
          <View style={styles.proBot}>
            <View style={styles.proBotLeft}></View>
            <TouchableOpacity
              onPress={() => signOut()}
              style={styles.signOutBtn}
            >
              <ImageBackground
                style={styles.signOutBtnFrame}
                resizeMode="cover"
                source={require("../../assets/logout.png")}
              >
                <Text style={styles.signOutTxt}>Sign Out</Text>
              </ImageBackground>
            </TouchableOpacity>
            <View style={{ flex: 1 }}></View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
}
export default UserProfile
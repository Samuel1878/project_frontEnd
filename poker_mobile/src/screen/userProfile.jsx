import { Image, Text,ImageBackground, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import styles, { _lower, _main, _second } from "../__Style";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useContext, useEffect,useState } from "react";
import AuthContext from "../services/auth/authContext"
import globalContext from "../services/global/globalContext";


const UserProfile = ({navigation}) => {
    const { 
        userName,
        setUserName,
        chipsAmount,
        setChipsAmount,
        userPh,
        setUserPh,
        userSrc, 
        setUserSrc,} = useContext(globalContext);
        const {signOut} = useContext(AuthContext);
        
    
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
              <View
                style={styles.avatar}
               >
                {userSrc == null ? (
                  <Image
                    resizeMode="cover"
                    style={styles.defaultUserProfile}
                    source={require("../../assets/game/king-rounded-img.png")}
                  />
                ) : (
                  <Image
                    resizeMode="cover"
                    style={styles.defaultUserProfile}
                    source={userSrc}
                  />
                )}
              </View>
            </View>
            <View style={styles.promid}>
              <Text style={styles.proData}>UserType: VIP</Text>
              <Text style={styles.proData}>Name: {userName}</Text>
              <Text style={styles.proData}>Phone: {userPh}</Text>
              <Text style={styles.proData}>Chip: {chipsAmount}</Text>
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
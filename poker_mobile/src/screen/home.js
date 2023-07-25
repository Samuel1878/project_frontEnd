import { Component,useEffect,useRef,useState } from "react";
import styles, { _light, _main, _second } from "../__Style"
import { Text, View ,ImageBackground, Image, TouchableOpacity,FlatList,SafeAreaView} from "react-native";
import { BlurView } from 'expo-blur';
import { Video, ResizeMode } from "expo-av";
import {LinearGradient} from "expo-linear-gradient"
// const createBg = require("../../assets/createBg.jpg");
// const joinBg = require("../../assets/joinBg.jpg");
const FlatData = [
    {
        id:1,
        name:"create_poker_room",
        src:"#"
       
    },
    {
        id:2,
        name:"join_poker_room",
        src:"#"
    },
    {
        id:3,
        name:"chess",
        src:"#",
    }
]

const Home = ({navigation}) => {
    const video = useRef(null)
    const [userPhoto, setUserPhoto] = useState("undefined");
    const Item = ({item}) => (
        <TouchableOpacity 
            style={styles.item}
            onPress={()=>navigation.navigate(item.name)}>
        
         {/* <ImageBackground
            source={item.src}
            resizeMode="cover"
            style={styles.gameFlatBg}> */}
                {(item.name==="create_poker_room")?(<Text style={styles.h2Text}>Create a poker room and invite your friends</Text>):<Text style={styles.h2Text}>Your friends are waiting for you, join the room now</Text>}
         {/* </ImageBackground> */}
        </TouchableOpacity>
      );
    useEffect(()=>{
        video.current.playAsync()
    },[])
    return (
      <View style={styles.container}>
        <Video
          ref={video}
          resizeMode={ResizeMode.COVER}
          isLooping
          useNativeControls={false}
          source={require("../../assets/homeFlame.mp4")}
          style={styles.videoHome}
        />
        <View style={styles.left}>
          <ImageBackground
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
            source={require("../../assets/lineArt.png")}
          ></ImageBackground>
        </View>
        <View style={styles.right}>
          <Image
            source={require("../../assets/homeFrame1.png")}
            style={styles.frameImg1}
          />
          <Image
            source={require("../../assets/homeFrame3.png")}
            style={styles.frameImg2}
          />
          <Image
            source={require("../../assets/homeFrame2.png")}
            style={styles.frameImg3}
          />
          <View style={styles.navBar}>
            <BlurView intensity={80} style={styles.navDataCon}>
              <ImageBackground
                style={styles.navData}
                source={require("../../assets/playBtn.jpg")}
              >
                <Text style={styles.navChipTotal}>Chip: 1000</Text>
                <Image
                  style={styles.navChip}
                  source={require("../../assets/chip.png")}
                />
              </ImageBackground>
            </BlurView>
            <Image
              source={require("../../assets/setting.png")}
              style={styles.settingImage}
            ></Image>
            <TouchableOpacity onPress={() => navigation.navigate("#")}>
              <LinearGradient
                colors={[_main, _light, _second]}
                style={styles.navUserBtn}
              >
                <Image
                  source={require("../../assets/user.gif")}
                  style={styles.userProfile}
                ></Image>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.main}>
            <SafeAreaView>
              <FlatList
                initialNumToRender={1}
                data={FlatData}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={(item) => item.id}
                horizontal={false}
                showsVerticalScrollIndicator={false}
              />
            </SafeAreaView>
          </View>
          <View style={styles.footerPlayBtn}>
            <TouchableOpacity style={styles.playBtn}>
              <ImageBackground
                resizeMode="cover"
                source={require("../../assets/playBtn.jpg")}
                style={styles.playBtnBg}
              >
                <Text style={styles.playBtnTxt}>Play Now</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}
export default Home;
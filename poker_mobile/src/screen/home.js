import { Component,useEffect,useRef,useState } from "react";
import styles, { _light, _main, _second, bg_heavy, bg_hover, bg_normal } from "../__Style"
import { Text, View ,ImageBackground, Image, TouchableOpacity,FlatList,SafeAreaView} from "react-native";
import { BlurView } from 'expo-blur';
import { Video, ResizeMode } from "expo-av";
import {LinearGradient} from "expo-linear-gradient"
// const createBg = require("../../assets/createBg.jpg");
// const joinBg = require("../../assets/joinBg.jpg");
const FlatData = [
    {
      id:1,
      name:"comming_soon",
      title:"Comming Soon",
      src:"#"
    },

    {
        id:2,
        title:"Create poker room",
        para:"Private poker table for VIP/s",
        name:"create_poker_room",
        src:"#"
       
    },
    {
        id:3,
        title:"Join the room",
        para:"Play with your mates by invited room Id",
        name:"join_poker_room",
        src:"#"
    },
   
]

const Home = ({navigation}) => {
    const video = useRef(null)
    const [userPhoto, setUserPhoto] = useState("undefined");
    const [userChip, setUserChip] = useState("1000");
    const Item = ({ item }) => (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate(item.name)}
      >
          <Text style={styles.h2Text}>
            {item.title + "__" + item.para}
          </Text>
          <Text>
            {item.para}
          </Text>
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
            style={styles.leftCon}
            source={require("../../assets/lineArt.png")}
          >
            <View style={styles.logoCon}>
              <Image
                style={styles.logoImg}
                source={require("../../assets/logoPoker.png")}
              />
              <Image 
                style={styles.logoFrame}
                source={require("../../assets/dragon.png")}
              />
            </View>

            <View style={styles.leftBtnCon}>
              <LinearGradient
                start={{ x: 0.1, y: 0.2 }}
                colors={[bg_heavy, bg_hover, bg_normal]}
                style={styles.friendListCon}
              >
                <View style={styles.friendListBox}>

                </View>
              </LinearGradient>
              <TouchableOpacity
                onPress={() => navigation.navigate("#")}
                style={styles.getChipBtn}
              >
                <ImageBackground
                  resizeMode="cover"
                  style={styles.leftBtnBg}
                  source={require("../../assets/playBtn.jpg")}
                >
                  <Text style={styles.getChipBtnTxt}>Get Chip</Text>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("#")}
                style={styles.getChipBtn}
              >
                <ImageBackground
                  resizeMode="cover"
                  style={styles.leftBtnBg}
                  source={require("../../assets/playBtn.jpg")}
                >
                  <Text style={styles.getChipBtnTxt}>Withdraw</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </ImageBackground>
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
                <Text style={styles.navChipTotal}>{`${userChip}  Chip`}</Text>
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
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.main}>
            <SafeAreaView>
              <FlatList
                initialNumToRender={2}
                initialScrollIndex={1}
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
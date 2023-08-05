import { Component,useEffect,useRef,useState } from "react";
import styles, { _light, _main,_lower, _second, bg_heavy, bg_hover, bg_normal } from "../__Style"
import { Text, View ,ImageBackground, Image, TouchableOpacity,FlatList,SafeAreaView, TouchableWithoutFeedback,Animated} from "react-native";
import { BlurView } from 'expo-blur';
import { Video, ResizeMode } from "expo-av";
import {LinearGradient} from "expo-linear-gradient"
import Item from "../components/rooms";

const FlatData = [
    {
      id:1,
      name:"comming_soon",
      title:"Comming Soon",
      src:()=>null,
      png:()=>require("../../assets/commingSoon.png")
    },

    {
        id:2,
        title:"Create poker room",
        para:"Private poker table for VIP/s",
        name:"create_poker_room",
        src:()=>require("../../assets/create.jpg"),
        png:()=>require("../../assets/createItem.png")
       
    },
    {
        id:3,
        title:"Join the room",
        para:"Play with your mates by invited room Id",
        name:"join_poker_room",
        src:()=>require("../../assets/pokerRooms.jpg"),
        png:()=>require("../../assets/join.png")
    },
   
]

const Home = ({navigation}) => {
  const twinkle = useRef(new Animated.Value(1)).current;
    const video = useRef(null)
    const [userPhoto, setUserPhoto] = useState("undefined");
    const [userChip, setUserChip] = useState("1000");
    const [selectedId, setSelectedId] = useState(null);
    const [clicked, setClicked] = useState(false)
    const playHandler = ()=>{
      switch (selectedId) {
        case null:
          navigation.navigate("create_poker_room");
          break;
        case 2:
          navigation.navigate("create_poker_room");
          break;
        case 3:
          navigation.navigate("join_poker_room");
          break;
        default:
          break;
      }
    }
   
    const renderItem = ({ item }) => {
           const intensity = item.id===selectedId?25:0;
           const borderCol =
             item.id === selectedId
               ? [_lower, _second, _lower]
               : [_main, _light, _second];
          const clicked = (item.id===selectedId)?true:false
     return(
      <Item
        item={item}
        navigation={navigation}
        borderCol={borderCol}
        intensity={intensity}
        clicked = {clicked}
        itemSelection={()=>setSelectedId(item.id)}/>
      )
    };
    useEffect(()=>{
      if(selectedId!==null){
        Animated.loop(Animated.timing(twinkle, {
          toValue:1.2,
          duration:1000,
          delay:500,
          useNativeDriver:true
        })).start();
        return
      }else{
        Animated.loop(
          Animated.timing(twinkle, {
            toValue: 1.2,
            duration: 500,
            useNativeDriver: true,
          })
        ).stop();
        return
      }
    },[selectedId])
    useEffect(()=>{
        video.current.playAsync()
    },[])
    return (
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => setSelectedId(null)}
      >
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
                  <View style={styles.friendListBox}></View>
                </LinearGradient>
                <TouchableOpacity
                  onPress={() => navigation.navigate("deposit")}
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
                  onPress={() => navigation.navigate("withdraw")}
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
                    source={require("../../assets/chips.png")}
                  />
                </ImageBackground>
              </BlurView>
              <Image
                source={require("../../assets/setting.png")}
                style={styles.settingImage}
              ></Image>
              <TouchableOpacity onPress={() => navigation.navigate("userProfile")}>
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
                  //initialNumToRender={2}
                  getItemLayout={(data, index) => ({
                    length: 250,
                    offset: 200 * index,
                    index,
                  })}
                  initialScrollIndex={1}
                  data={FlatData}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  horizontal={false}
                  showsVerticalScrollIndicator={false}
                />
              </SafeAreaView>
            </View>
            <View style={styles.footerPlayBtn}>
              <TouchableOpacity
                style={[
                  styles.playBtn,
                  { transform: [{ scale: twinkle }] },
                ]}
                onPress={playHandler}
              >
                <ImageBackground
                  resizeMode="cover"
                  source={require("../../assets/playBtn.jpg")}
                  style={styles.playBtnBg}
                >
                  <Text style={[styles.playBtnTxt]}>Play Now</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
}
export default Home;
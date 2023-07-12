import { Component,useState } from "react";
import styles from "../__Style"
import { Text, View ,ImageBackground, Image, TouchableOpacity,FlatList,SafeAreaView} from "react-native";
import { BlurView } from 'expo-blur';
const createBg = require("../../assets/createBg.jpg");
const joinBg = require("../../assets/joinBg.jpg");
const FlatData = [
    {
        id:1,
        name:"create_poker_room",
        src:createBg
    },
    {
        id:2,
        name:"join_poker_room",
        src:joinBg
    },
    {
        id:3,
        name:"chess",
        src:"#",
    }
]

const Home = ({navigation}) => {
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

    return (
        <View style={styles.container}>
            <BlurView intensity={0} style={styles.left}> 
                
               
            </BlurView>
            <View style={styles.right}>
            {/* <ImageBackground 
                    source={require("../../assets/bgImage.jpg")} 
                    resizeMode="cover" 
                    style={styles.bgImage}> */}
                        <View style={styles.navBar}>
                            <View style={styles.navData}>
                                <Text>Chip:20000</Text>
                            </View>
                            <Image
                                source={require("../../assets/setting.png")}
                                style={styles.settingImage}>

                            </Image>
                            <Image
                                source={require("../../assets/defaultUser.png")}
                                style={styles.userProfile}></Image>
                        </View>
                        <View style={styles.main}>
                            <SafeAreaView>
                                <FlatList
                                        data={FlatData}
                                        renderItem={({item}) => <Item item={item} />}
                                        keyExtractor={item => item.id}
                                        horizontal={false}
                                        showsVerticalScrollIndicator={false}
                                        />
                            </SafeAreaView>
                                
                        </View>
                        <View style={styles.footerLeft}>
                            
                        </View>
                        <View style={styles.footerCenter}>
                            
                            <TouchableOpacity style={styles.buttonLeft}>
                                <Text>Get reward</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.buttonRight}>
                                <Text>Get Chip</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.footerRight}>
                           
                        </View>

                {/* </ImageBackground> */}
            </View>

        </View>
    )
}
export default Home;
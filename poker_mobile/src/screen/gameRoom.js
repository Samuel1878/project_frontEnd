import {useEffect} from "react";
import { Image, ImageBackground, Text, View,Pressable, } from "react-native";
import {NativeBaseProvider,Box,Menu,HamburgerIcon} from "native-base"
import styles from "../__Style";
import Seat from "../components/seat";


export default GameRoom = () => {
    return(
        <View style={{flex:1,flexDirection:"row"}}>
            <View style={styles.tableArea}>
            <NativeBaseProvider>
                <Box w="90%" alignItems="center">
                    <Menu 
                        w="150" 
                        trigger={triggerProps =>{
                            return <Pressable accessibilityLabel="More" {...triggerProps}>
                                        <HamburgerIcon />
                                    </Pressable>;
                        }
                        }>
                        <Menu.Item onPress={()=>console.log("pressed")}>Exit & delete Room</Menu.Item>
                        <Menu.Item>Game Setting</Menu.Item>
                        <Menu.Item>Get Chip</Menu.Item>
                        <Menu.Item>Hand Rank</Menu.Item>
                    </Menu>
                </Box>
            </NativeBaseProvider>
            </View>
            <ImageBackground
                source={require("../../assets/pokerTable.jpg")}
                resizeMode="cover"
                style={styles.table}>
                    <View style={styles.seatContainer}>
                        <Seat/>
                        <View style={styles.playerBoard}>

                        </View>             
                    </View>
                    <View style={styles.seatContainer1}>
                        <View style={styles.playerBoard}>

                        </View>             

                    </View>
                    <View style={styles.seatContainer2}>
                        <View style={styles.playerBoard}>

                        </View>             

                    </View>
                    <View style={styles.seatContainer3}>
                        <View style={styles.playerBoard}>

                        </View>             

                    </View>
                    <View style={styles.seatContainer4}>
                        <View style={styles.playerBoard}>

                        </View>             

                    </View>
                    <View style={styles.seatContainer5}>
                        <View style={styles.playerBoard}>

                        </View>             

                    </View>
                    <View style={styles.seatContainer6}>
                        <View style={styles.playerBoard}>

                        </View>             

                    </View>
                    
    

            </ImageBackground>

        </View>
           
    )

}
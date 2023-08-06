import { View, Button, TextInput, TouchableOpacity,Text} from "react-native";
import * as Clipboard from "expo-clipboard"
import styles from "../__Style"
import { useEffect, useRef, useState } from "react";
import ExitBtn from "../components/exitBtn";
import { ImageBackground } from "react-native";
import { ResizeMode, Video } from "expo-av";
const randId = () => {
    return Math.random().toString(36).substr(2);
  };

const CreatePoker = ({navigation}) => {
    const video = useRef(null)
    const [copied, setCopied] = useState(false)
    const [service, setService] = useState("");
    const [tableId, setTableId] = useState("");
    useEffect(()=>{
        const Id = randId();
        setTableId(Id);
    }, [])
    
    const createTable = () => {
        if(tableId){
            navigation.navigate("GameRoom");
            
        }
    }
    const copyId = () => {
        Clipboard.setStringAsync(tableId);
        console.info(tableId);
        setCopied(true);
        setTimeout(()=>{
            setCopied(false)
        },1500)
    }
    useEffect(()=>{
        video.current.playAsync()
    },[])
    
    return (
       <View style={styles.createRoom}>
            <Video
                style={styles.videoHome}
                resizeMode={ResizeMode.COVER}
                source={require("../../assets/create.mp4")}
                isLooping
                isMuted
                useNativeControls={false}
                ref={video}/>
                <View style={{flexDirection:"row", justifyContent:"space-between",marginBottom:10}}>
                    <Text style={styles.createBtnTxt}>Table ID: </Text>
                    <TextInput
                        style={styles.joinRoomId}
                        value={tableId}
                        editable={false}
                        onPressIn={copyId}/>
                </View>
                <TouchableOpacity
                    style={styles.createBtn}
                    onPress={copyId}>
                        <ImageBackground
                            source={require("../../assets/btn.png")}
                            style={styles.createTableBtn}>
                            <Text style={styles.createBtnTxt}>
                                {copied?"Copied":"Copy"}
                            </Text>
                        </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.createBtn}
                    onPress={()=>console.log("shared")}>
                        <ImageBackground
                            source={require("../../assets/btn.png")}
                            style={styles.createTableBtn}>
                            <Text style={styles.createBtnTxt}>
                                Share with Friends
                            </Text>
                        </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.createBtn}
                    onPress={createTable}>
                        <ImageBackground
                            source={require("../../assets/btn.png")}
                            style={styles.createTableBtn}>
                            <Text style={styles.createBtnTxt}>
                                Create Table
                            </Text>
                        </ImageBackground>
                </TouchableOpacity>
            <ExitBtn value={navigation}/>
       </View>
    )
}
export default CreatePoker;
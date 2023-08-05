import { View, Button, TextInput, TouchableOpacity,Text} from "react-native";
import * as Clipboard from "expo-clipboard"
import styles from "../__Style"
import { useEffect, useState } from "react";
import ExitBtn from "../components/exitBtn";
import { ImageBackground } from "react-native";
const randId = () => {
    return Math.random().toString(36).substr(2);
  };

const CreatePoker = ({navigation}) => {
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
    
    return (
       <ImageBackground 
        resizeMode="cover"
        source={require("../../assets/createRoomBg.jpg")}
        style={styles.createRoom}>
            <View>
                <View style={{flexDirection:"row"}}>
                    <TextInput
                        style={styles.joinRoomId}
                        value={tableId}
                        editable={false}
                        onPressIn={copyId}/>
                    <Button
                        title={copied?"Copied":"Copy"}
                        onPress={copyId}
                        />

                </View>
                <TouchableOpacity
                    style={styles.createBtn}
                    onPress={()=>console.log("shared")}>
                        <ImageBackground
                            source={require("../../assets/createTableBtn.png")}
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
                            source={require("../../assets/createTableBtn.png")}
                            style={styles.createTableBtn}>
                            <Text style={styles.createBtnTxt}>
                                Create Table
                            </Text>
                        </ImageBackground>
                </TouchableOpacity>
                
                
            </View>
            <ExitBtn value={navigation}/>
       </ImageBackground>
    )
}
export default CreatePoker;
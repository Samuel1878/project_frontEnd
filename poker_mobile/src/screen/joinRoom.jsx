import { useContext, useEffect, useRef, useState } from "react";
import { TextInput,SafeAreaView,KeyboardAvoidingView, ImageBackground } from "react-native";
import styles, { _lower } from "../__Style";
import ExitBtn from "../components/exitBtn";
import { ResizeMode, Video } from "expo-av";
import { TouchableOpacity,Text } from "react-native";
import gameContext from "../services/game/gameContext";

export default JoinPokerRoom = ({navigation}) => {
    const video = useRef(null);
    const [focused, setFocused] = useState(false)
    const [tableId , setTableId] = useState(null);
    const {joinTable} = useContext(gameContext)
    const onSubmit = () => {
        joinTable(tableId);
        navigation.navigate("GameRoom");
        //video.current.pauseAsync();

    }
  
    useEffect(()=>{
       // video.current.playAsync();
    },[])
    return(
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.joinRoomContainer}>
            <Video
                ref={video}
                resizeMode={ResizeMode.COVER}
                isLooping
                useNativeControls={false}
                source={require("../../assets/join.mp4")}
                style={styles.videoHome}/>
            <TextInput
                style={styles.joinRoomInput}
                        onChangeText={(e)=>setTableId(e)}
                        value={tableId}
                        placeholderTextColor={_lower}
                        placeholder="Table ID"
                        onSubmitEditing={onSubmit}
                        blurOnSubmit={true}
                        onFocus={()=>setFocused(true)}
                        onBlur={()=>setFocused(false)}
                        dataDetectorTypes="all"/>
           {
            focused?( <TouchableOpacity
                style={styles.submitBtn}
                onPress={onSubmit}>
                <ImageBackground
                    resizeMode="cover"
                    source={require("../../assets/createTableBtn.png")}
                    styles={styles.submitBtnBg}>
                    <Text style={styles.JsubmitBtnTxt}>
                        Join Table
                    </Text>
                </ImageBackground>
            </TouchableOpacity>):null
           }
            <ExitBtn value={navigation}/>
        </KeyboardAvoidingView>
    )
}
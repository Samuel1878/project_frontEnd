import { useState } from "react";
import { TextInput,SafeAreaView,KeyboardAvoidingView, ImageBackground } from "react-native";
import styles, { _lower } from "../__Style";
import ExitBtn from "../components/exitBtn";

export default JoinPokerRoom = ({navigation}) => {
    const [roomId , setRoomId] = useState("");
    const onSubmit = () => {
        console.log(roomId);
    }
    return(
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.joinRoomContainer}>
            <ImageBackground
                resizeMode="cover"
                source={require("../../assets/joinRoomBg.jpg")}
                style={styles.joinRoomBg}>
                <TextInput
                style={styles.joinRoomInput}
                onChangeText={(e)=>setRoomId(e)}
                value={roomId}
                placeholderTextColor={_lower}
                placeholder="Table ID"
                onSubmitEditing={onSubmit}
                blurOnSubmit={true}
                dataDetectorTypes="all"/>
            <ExitBtn value={navigation}/>

            </ImageBackground>
        </KeyboardAvoidingView>
    )
}
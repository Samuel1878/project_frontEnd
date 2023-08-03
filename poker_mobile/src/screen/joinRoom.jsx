import { useState } from "react";
import { TextInput,SafeAreaView,KeyboardAvoidingView } from "react-native";
import styles from "../__Style";
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
            <TextInput
                style={styles.joinRoomInput}
                onChangeText={(e)=>setRoomId(e)}
                value={roomId}
                placeholder="Table ID"
                onSubmitEditing={onSubmit}
                blurOnSubmit={true}
                dataDetectorTypes="all"/>
            <ExitBtn value={navigation}/>
        </KeyboardAvoidingView>
    )
}
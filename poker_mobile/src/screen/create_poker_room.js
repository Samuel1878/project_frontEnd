import { View, Button, TextInput} from "react-native";
import * as Clipboard from "expo-clipboard"
import styles from "../__Style"
import { useEffect, useState } from "react";
import ExitBtn from "../components/exitBtn";
import { Select,Box,CheckIcon,NativeBaseProvider,HStack,Checkbox } from "native-base";
const randId = () => {
    return Math.random().toString(36).substr(2);
  };

const CreatePoker = ({navigation}) => {
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
        console.info(tableId)
    }
    
    return (
       <View style={styles.createRoom}>
            <View>
                <View style={{flexDirection:"row"}}>
                    <TextInput
                        value={tableId}
                        editable={false}
                        onPressIn={copyId}/>
                    <Button
                        title="Copy"
                        onPress={copyId}
                        />

                </View>
                <Button
                    title="Invite Friends"/>

                <Button
                    onPress={createTable}
                    title="Create Table"
                    color="#841584"
                    accessibilityLabel="create table"
                    />
                
            </View>
            <ExitBtn value={navigation}/>
       </View>
    )
}
export default CreatePoker;
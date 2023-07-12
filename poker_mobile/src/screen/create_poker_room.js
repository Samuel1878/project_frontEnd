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
                <NativeBaseProvider>
                    <Box maxW="200">
                        <Select 
                            selectedValue={service} 
                            minWidth="100"
                            accessibilityLabel="Choose Table Class" 
                            placeholder="Choose Mini/Max Price" 
                            _selectedItem={{bg:"teal.600",endIcon: <CheckIcon size="2" />}}
                            mt={1} 
                            onValueChange={itemValue => setService(itemValue)}>
                                <Select.Item label="20/2000" value="mini" />
                                <Select.Item label="200/20000" value="lowerClass" />
                                <Select.Item label="500/50000" value="middleClass" />
                                <Select.Item label="1000/10000" value="superClass" />
                                <Select.Item label="2000/400000" value="ultraClass" />
                        </Select>
                    </Box>
                    <HStack space={6}>
                        <Checkbox 
                            shadow={2} 
                            value="test"
                            defaultIsChecked
                            colorScheme="info">
                             I accept the terms & conditions
                        </Checkbox>
                    </HStack>

                </NativeBaseProvider>
                
            </View>
            <ExitBtn value={navigation}/>
       </View>
    )
}
export default CreatePoker;
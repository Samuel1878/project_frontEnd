import { View,Text, TouchableOpacity } from "react-native";
import styles from "../__Style";
import { GameBtn } from "./gameBtn";

export const GameUI = ({
    currentTable,
    seatId,
    bet,
    setBet,
    raise,
    standUp,
    fold,
    check,
    call
})=>{
    return(
        <View style={styles.gameUICon}>
           <GameBtn action={fold}>
                <Text style={styles.foldTxt}>
                    Fold
                </Text>
           </GameBtn>
           <GameBtn action={check}>
                <Text style={styles.foldTxt}>
                    Check
                </Text>
           </GameBtn>
           
        </View>
    )
}
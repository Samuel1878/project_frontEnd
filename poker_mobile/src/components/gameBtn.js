import { TouchableOpacity } from "react-native";
import styles from "../__Style";


export const GameBtn = ({action, children}) => {
    return(<TouchableOpacity
        onPress={()=>action()}
        style={styles.gameBtn}>
        {children}
    </TouchableOpacity>)
}
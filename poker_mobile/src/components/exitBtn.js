import { Button, TouchableOpacity, View ,Text} from "react-native";
import styles from "../__Style";
export default exitBtn = ({value}) => {
    return(
            <TouchableOpacity
                onPress={()=>value.navigate("home")}
                style={styles.exitBtn}>
                <Text>
                    Exit
                </Text>
            </TouchableOpacity>
    )
}
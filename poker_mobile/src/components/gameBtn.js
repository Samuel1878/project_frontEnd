import { TouchableOpacity } from "react-native"

export const GameBtn = ({action, children}) => {
    <TouchableOpacity
        onPress={action}
        style={styles.gameBtn}>
        {children}
    </TouchableOpacity>
}
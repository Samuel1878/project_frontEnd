import { Text,View } from "react-native"
import styles from "../__Style";

export const GameInfo = ({currentTable}) => {
    return (
      <View style={styles.tableInfo}>
        {currentTable?.players.length <= 1 || currentTable?.handOver ? (
          <Text>Waiting</Text>
        ) : (
          <Text>
            {currentTable?.board?.length === 0 && "Pre-Flop"}
            {currentTable?.board?.length === 3 && "Flop"}
            {currentTable?.board?.length === 4 && "Turn"}
            {currentTable?.board?.length === 5 && "River"}
            {currentTable?.wentToShowdown && "Showdown"}
          </Text>
        )}
      </View>
    );
}
import { View,Text, TouchableOpacity } from "react-native";
import styles from "../__Style";
import { GameBtn } from "./gameBtn";
import { BetSlider } from "./betSlider";

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
    return (
      <View style={styles.gameUICon}>
        <GameBtn action={fold}>
          <Text style={styles.foldTxt}>Fold</Text>
        </GameBtn>
        {currentTable?.callAmount !== currentTable?.seats[seatId]?.bet ||
        (currentTable?.callAmount < currentTable?.seats[seatId]?.bet &&
          currentTable?.callAmount > 0) ? (
          <GameBtn action={call}>
            <Text style={styles.foldTxt}>Call</Text>
          </GameBtn>
        ) : (
          (currentTable?.callAmount === 0 ||
            currentTable.seats[seatId]?.bet >= currentTable?.callAmount) && (
            <GameBtn action={check}>
              <Text style={styles.foldTxt}>Check</Text>
            </GameBtn>
          )
        )}

        <TouchableOpacity
          onPress={() => raise(bet + currentTable?.seats[seatId]?.bet)}
          style={styles.betBtn}
        >
          <Text style={styles.foldTxt}>Bet</Text>
        </TouchableOpacity>
        <BetSlider
          currentTable={currentTable}
          seatId={seatId}
          bet={bet}
          setBet={setBet}
        />
        <TouchableOpacity
          onPress={() =>
            raise(
              currentTable?.seats[seatId]?.stack + currentTable?.seats[seatId]?.bet
            )
          }
          style={styles.allInBtn}
        >
          <Text style={styles.foldTxt}>All-in</Text>
        </TouchableOpacity>
      </View>
    );
}
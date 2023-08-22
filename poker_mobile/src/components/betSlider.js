import { Slider } from "@react-native-assets/slider";
import { useState } from "react";
import { _error, _main } from "../__Style";

export const BetSlider = ({currentTable,seatId,bet,setBet}) => {
    return (
      <Slider
        minimumTrackTintColor={_main}
        maximumTrackTintColor={_error}
        value={bet} 
        minimumValue={
            currentTable.minBet >= currentTable.callAmount
            ? currentTable.minBet
            :currentTable.callAmount
        } 
        maximumValue={
            currentTable &&
            currentTable.seats &&
            currentTable.seats[seatId]?.stack &&
            (
                currentTable.seats[seatId]?.stack < currentTable.limit
                ? currentTable.seats[seatId]?.stack
                : currentTable.limit
            )
        } 
        vertical={true}
        onValueChange={(e) => setBet(e)}
      />
    );
}


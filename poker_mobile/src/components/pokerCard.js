import cards from "./cards"
import { Image } from "react-native";
const PokerCard = ({card:{suit,rank}, width, minWidth, maxWidth})=>{
    const concat = suit + rank;
    return (
        <Image
            source={cards[concat]}/>
    )
}
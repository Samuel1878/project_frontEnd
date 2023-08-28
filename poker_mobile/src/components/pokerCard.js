import cards from "./cards"
import { Image } from "react-native";
export const PokerCard = ({card:{suit,rank}, width, height})=>{
    const concat = suit + rank;
    console.info(concat)
    return (
        <Image
            resizeMode="cover"
            style={styles.userCard}
            source={cards[concat]}/>
    )
}
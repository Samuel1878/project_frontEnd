import cards from "./cards"
const PokerCard = ({card:{suit,rank}, width, minWidth, maxWidth})=>{
    const concat = suit + rank;
    return (
        <Image
            source={cards[concat]}/>
    )
}
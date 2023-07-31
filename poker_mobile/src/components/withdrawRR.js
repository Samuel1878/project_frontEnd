import { Text } from "react-native"

const WithdrawRR = () => {
    
    return(
        <Text>
            WIthDraw RR
        </Text>
    )
}
const WithdrawWavePay = () => {
   
  return <Text>WIthDraw WavePay</Text>;
};
const WithdrawCBpay = () => {
  return <Text>WIthDraw CB Pay</Text>;
};
const WithdrawKpay = () => {
  return <Text>WIthDraw Kpay</Text>;
};
const WithdrawAYAPay = () => {
  return <Text>WIthDraw AYA Pay</Text>;
};

const WithDrawRight = ({ opened }) => {
    switch (opened) {
      case "kPay":
        return<WithdrawKpay/>
        break;
      case "wavePay":
        return<WithdrawWavePay/>
        break;
      case "cbPay":
        return<WithdrawCBpay/>
        break;
      case "ayaPay":
       return <WithdrawAYAPay/>
        break;
      default:
        return <WithdrawRR/>
        break;
    }
};
export default WithDrawRight
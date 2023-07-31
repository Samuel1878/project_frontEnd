import { View, Text } from "react-native"

const DepositRR = () => {
    return (
        <View>
            <Text>
                Rules and Regulation
            </Text>
        </View>
    )
}
const DepositKpay = () => {
  return (
    <View>
      <Text>Kpay</Text>
    </View>
  );
};
const DepositCBpay = () => {
  return (
    <View>
      <Text>CB Pay</Text>
    </View>
  );
};
const DepositAYAPay = () => {
  return (
    <View>
      <Text>AYA Pay</Text>
    </View>
  );
};
const DepositWavePay = () => {
  return (
    <View>
      <Text>Wave Pay</Text>
    </View>
  );
};
const DepositRight = ({ opened }) => {
  switch (opened) {
    case "kPay":
      return <DepositKpay />;
      break;
    case "wavePay":
      return <DepositWavePay />;
      break;
    case "cbPay":
      return <DepositCBpay />;
      break;
    case "ayaPay":
      return <DepositAYAPay />;
      break;
    default:
      return <DepositRR />;
      break;
  }
};
export default DepositRight;

import styles from "../__Style";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { btnList } from "../libs/btnList";
import { useEffect, useState } from "react";
import DepositRight from "../components/depositRR";

const Deposit = ({ navigation }) => {
  const [opened, setOpened] = useState("RR");
  useEffect(() => {}, [opened]);

  return (
    <View style={styles.Container}>
      <View style={styles.leftContainer}>
        {btnList.map((item, i) => (
          <TouchableOpacity
            style={styles.withdrawBtns}
            key={i}
            onPress={() => setOpened(item[0])}
          >
            <ImageBackground
              style={styles.withdrawBtnBg}
              resizeMode="cover"
              source={require("../../assets/coinBtn.jpg")}
            >
              <Text style={styles.withdrawBtnTxt}>{item[1]}</Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.withdrawExitBtn}
          onPress={() => navigation.navigate("home")}
        >
          <Text style={styles.withdrawExitBtnTxt}>Exit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightContainer}>
        <DepositRight opened={opened} />
      </View>
    </View>
  );
};
export default Deposit;

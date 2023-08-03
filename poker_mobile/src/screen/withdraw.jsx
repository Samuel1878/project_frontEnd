import WithDrawRight from "../components/withdrawRR.js";
import styles from "../__Style.js";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { btnList } from "../libs/btnList.js";
import { useEffect, useState } from "react";


const Withdraw = ({ navigation }) => {
    const [opened, setOpened] = useState("RR");
    useEffect(()=>{
        
    },[opened])

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
                source={require("../../assets/coinBtn.jpg")}>
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
        <WithDrawRight opened={opened} />
      </View>
    </View>
  );
};
export default Withdraw;

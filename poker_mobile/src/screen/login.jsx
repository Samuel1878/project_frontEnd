import { Text, TextInput, TouchableOpacity, View ,Image,Button,TouchableWithoutFeedback,Keyboard} from "react-native"
import styles, { _error, app_four } from "../__Style";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import AuthContext from "../services/auth/authContext";
const LoginScreen = ({ navigation }) => {
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [validNo, setValidNo] = useState(null);
  const [validPwd, setValidPwd] = useState(null);
  const REGEX_NO = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5}$/;
  const REGEX_PWD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const {signIn} = useContext(AuthContext)

  const submitHandler = () => {
    if(validNo && validPwd){
      axios
        .post("http://13.213.119.120:4001/api/account/login", {
        phoneNo:phoneNo,password:password
      },{
        headers:{"Content-Type":"application/json"}
      }).then((res)=>{
        switch (res.data.code) {
          case 401:
            setValidNo(false);
            setValidPwd(false);
            break;
          case 201:
            signIn(res.data.token);
            break;
          default:
            console.log("failed login")
            break;
        }
      
      }).catch((err)=>console.log(err))
    }
  };
  useEffect(()=>{
    setValidNo(REGEX_NO.test(phoneNo));
    setValidPwd(REGEX_PWD.test(password));
  },[phoneNo,password])
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      <View style={styles.loginContainer}>
        <View style={styles.loginWrapCon}>
          <View style={styles.loginBox}>
            <Text style={styles.loginHeader}>Login</Text>
            <Text style={styles.inputLabel}>
              Phone number:
              {phoneNo === "" ? (
                <Text></Text>
              ) : validNo ? (
                <Image
                  style={styles.loginTrueIcon}
                  source={require("../../assets/loginTrueIcon.png")}
                />
              ) : (
                <Text style={{ color: _error }}>* Invalid</Text>
              )}
            </Text>
            <TextInput
              inputMode="tel"
              keyboardType="numeric"
              placeholder="eg: 09123..."
              style={styles.loginInput}
              value={phoneNo}
              onChangeText={(e) => setPhoneNo(e)}
            />
            <Text style={styles.inputLabel}>
              Enter your password:
              {password === "" ? (
                <Text></Text>
              ) : validPwd ? (
                <Image
                  style={styles.loginTrueIcon}
                  source={require("../../assets/loginTrueIcon.png")}
                />
              ) : (
                <Text style={{ color: _error }}>* Invalid</Text>
              )}
            </Text>
            <TextInput
              textContentType="password"
              placeholder="password"
              style={styles.loginInput}
              value={password}
              onChangeText={(e) => setPassword(e)}
            />
            <View style={styles.loginBtnCon}>
              <TouchableOpacity
                style={styles.regBtn}
                onPress={() => navigation.navigate("register")}
              >
                <Text>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.loginBtn} onPress={submitHandler}>
                <Text style={styles.loginBtnTxt}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.resetBtnCon}>
              <Text style={styles.resetTxt}>forget password?</Text>
              <Button
                style={styles.resetBtn}
                color={app_four}
                title="Reset password"
                onPress={() => navigation.navigate("account")}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default LoginScreen;
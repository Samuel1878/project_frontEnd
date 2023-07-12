import { Button, TextInput, View,Pressable,Text, TouchableOpacity, Keyboard } from "react-native"
import styles, { _error, _info, luxe_one, luxe_six } from "../__Style";
import { useEffect, useState } from "react";

import axios from "axios";

export default Register = ({navigation}) => {
    const [show,setShow] = useState(false);
    const [password, setPassword] = useState("");
    const [OTP, setOTP] = useState("");
    const [sentOTP, setSentOTP] = useState("")
    const [phoneNo, setPhoneNo] = useState("");
    const [validNo, setValidNo] = useState(false);
    const [count, setCount] = useState(90);
    const [validPwd, setValidPwd] = useState(false);
    const [OTPsent, setOTPsent ] = useState(false);
    const [validOTP, setValidOTP] = useState(false);
    const REGEX_NO = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5}$/
    const REGEX_PWD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    const phoneNoHandler = (e) => {
        setValidNo(REGEX_NO.test(e));
        setPhoneNo(e)
    };
    const passwordHandler = (e) => {
        setValidPwd(REGEX_PWD.test(e));
        setPassword(e);
    }
    const req2FAServer = async() => {
         axios
           .post(
             "http://localhost:4001/api/register/2faValidation",
             { phoneNo: phoneNo },
             {
               headers: { "Content-Type": "application/json" },
             }
           )
           .then((res) => {
             setSentOTP(res.data.code);
             console.log(res.data.code)
           })
           .catch((err) => {
             console.log(err);
           });
    }
    const send2FA = () => {
        req2FAServer();
        setOTPsent(true);
        Keyboard.dismiss;
        const counterInterval = setInterval(()=>{
            setCount((prev)=>prev-1)
        },1000);
        setTimeout(()=>{
            clearInterval(counterInterval);
            setCount(90);
            setOTPsent(false)
        },91000);
    };
    const OTPBtn = () => {
        if (validNo && !OTPsent) {
            send2FA();
            return
        } 
    }
    const OTPInputHandler = (e) => {
        setOTP(e);
    }
    const submitBtnHandler = () => {
        if (validNo && validPwd && validOTP){
            console.log("created")
            return
        }
        console.log("Not successed")
    }
    useEffect(()=>{
        if (OTP === sentOTP && OTP !== "") {
            setValidOTP(true);
            return
        }
    },[OTP, sentOTP])


    return (
      <View style={styles.regContainer}>
        <View style={styles.regBoxContainer}>
          <View style={styles.regBox}>
            <Text style={styles.inputLabel}>
              Please enter phone number:
              {!validNo ? (
                <Text style={{ color: _error }}>* invalid</Text>
              ) : (
                <Text style={{ color: _info }}> good to go</Text>
              )}
            </Text>
            <TextInput
                textContentType="telephoneNumber"
                editable={!OTPsent}
                inputMode="tel"
                placeholder="09 123..."
                style={styles.phNoRegInput}
                value={phoneNo}
                onChangeText={phoneNoHandler}
                onBlur={() => Keyboard.dismiss}
            ></TextInput>
            <Text style={styles.inputLabel}>
                {
                    OTPsent?`OTP code has been, check your messagebox`:`Get OTP code & fill it`
                }
            </Text>
            <View style={styles.box2fa}>
                <TextInput
                    placeholder="OTP"
                    style={styles.OTPinput}
                    textContentType="oneTimeCode"
                    value={OTP}
                    onChangeText={OTPInputHandler}
                ></TextInput>
                <TouchableOpacity style={styles.OTPBtn} onPress={OTPBtn}>
                    {OTPsent ? (
                    <Text style={styles.OTPBtnTxt}>Sent: {count}</Text>
                    ) : (
                    <Text style={styles.OTPBtnTxt}>Get Code</Text>
                    )}
                </TouchableOpacity>

                {/* <Button
                    title="Get Code"
                    color={luxe_one}
                    onPress={() => console.log("sent")}
                    style={styles.OTPBtn}
                ></Button> */}
            </View>

            <Text style={styles.inputLabel}>Create password: {
                validPwd?<Text style={{color:_info}}>Strong</Text>:<Text style={{color:_error}}>* Invalid!</Text>
            }</Text>
            <TextInput
              textContentType="password"
              value={password}
              placeholder="eg - Aa123@"
              style={styles.phNoRegInput}
              onChangeText={passwordHandler}
            ></TextInput>
            <View style={styles.regSubmitBtnCon}>
                <TouchableOpacity 
                    style={styles.backBtn} 
                    onPress={()=>navigation.navigate("account")}>
                    <Text style={styles.submitBtnTxt}>
                        Back
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.regSubmitBtn}
                    onPress={submitBtnHandler}>
                    <Text style={styles.submitBtnTxt}>
                        Create
                    </Text>
                </TouchableOpacity>

            </View>
    
          </View>
        </View>
      </View>
    );
} 
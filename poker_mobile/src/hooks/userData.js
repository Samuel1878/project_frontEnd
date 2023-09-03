import axios from "axios";
import { useContext, useEffect } from "react";
import globalContext from "../services/global/globalContext";
const loadUserData = (userToken) => {
  const {
        userName,
        userPh,
        userSrc,
        chipsAmount,
        setUserName, 
        setUserPh, 
        setUserSrc, 
        setChipsAmount} = useContext(globalContext);

  //userData
  useEffect(()=>{
     axios
       .get("http://13.213.119.120:4001/api/userData/chip", {
         params: { token: userToken, reqData: "allData" },
         headers: { "Content-Type": "application/json" },
       })
       .then((res) => {
         setUserName(res.data.data.name);
         setUserPh(res.data.data.phone);
         setUserSrc(res.data.data.proSrc);
         setChipsAmount(res.data.data.chips);
       })
       .catch((err) => console.warn(err.message));
  },[]);
  useEffect(()=>{
    if(userSrc === null){
      setUserSrc(
        require("../../assets/game/king-rounded-img.png")
      );
    }
  },[userSrc])
  return {userName,userPh, userSrc, chipsAmount}
}
export default loadUserData
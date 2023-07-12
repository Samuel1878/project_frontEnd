import {StyleSheet, Platform, Dimensions} from "react-native";

//Color theme logic
const bg_normal = "rgb(38,38,38)";
const bg_light = "rgb(204,204,204)";
const bg_hover = "rgb(40,44,51)";
const bg_heavy = "rgb(12,24,10)";

const app_one = "#29353C";
const app_two = "#44576D";
const app_three = "#768A96";
const app_four = "#AAC7D8";
const app_five = "#DFEBF6";
const app_six = "#E6E6E6";

const luxe_one = "#322D29";
const luxe_two = "#72383D";
const luxe_three = "#AC9C8D";
const luxe_four = "#D1C7BD" ;
const luxe_five = "#D9D9D9" ;
const luxe_six = "#EFE9E1" ;


const textColor = "rgb(9,12,10)";
const textLower = "#322D29";
const textLower1 = "rgb(128,128,128)";
const textHover = "rgb(145,145,146)";

const _error= "rgb(235,80,58)";
const _info = "rgb(121,225,101)";
const _warn = "yellow";

const {width, height} = Dimensions.get('window');
const isSmallDevice = (height <= 568);


const styles = StyleSheet.create({
  //common
  container: {
    backgroundColor: "none",
    flex: 1,
    flexDirection: "row",
  },
  left: {
    flex: 1,
    backgroundColor: app_one,
  },
  right: {
    flex: 4.7,
    flexDirection: "column",
    backgroundColor: app_three,
  },
  /////Top Bar
  navBar: {
    height: 30,
    width: "60%",
    backgroundColor: "transparent",
    zIndex: 1,
    position: "absolute",
    top: 15,
    right: 15,
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  userProfile: {
    borderRadius: 50,
    backgroundColor: app_four,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  settingImage: {
    width: 40,
    height: 40,
    backgroundColor: app_four,
    borderRadius: 25,
  },
  navData: {
    flex: 1,
    backgroundColor: "transparent",
    borderRadius: 25,
    borderColor: app_one,
    borderWidth: 2,
    shadowColor: app_one,
    shadowOpacity: 0.7,
  },
  ////Body part
  main: {
    position: "relative",
    margin: "auto",
    alignItems: "center",
    backgroundColor: "transparent",
    marginHorizontal: 10,
    height: "100%",
  },
  h2Text: {
    fontSize: 25,
    color: luxe_three,
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
  },
  footerLeft: {
    height: 100,
    width: 220,
    position: "absolute",
    backgroundColor: app_one,
    zIndex: 1,
    bottom: -70,
    left: 0,
    borderTopRightRadius: "50%",
  },
  footerCenter: {
    position: "absolute",
    backgroundColor: "transparent",
    bottom: 10,
    left: "30%",
    right: "30%",
    flexDirection: "row",
    height: 50,
    gap: 0,
    borderRadius: "25%",
  },
  footerRight: {
    height: 100,
    width: 220,
    position: "absolute",
    backgroundColor: app_one,
    zIndex: 1,
    bottom: -70,
    right: 0,
    borderTopLeftRadius: "50%",
  },
  buttonLeft: {
    borderColor: luxe_one,
    borderWidth: 4,
    marginVertical: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: "25%",
    borderBottomLeftRadius: "25%",
    overflow: "hidden",
  },
  buttonRight: {
    borderColor: luxe_two,
    borderWidth: 4,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: "25%",
    borderBottomRightRadius: "25%",
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
    zIndex: 0,
  },
  ///Body game entrance
  item: {
    width: 680,
    flex: 1,
    height: 200,
    marginVertical: 10,
    backgroundColor: app_two,
    borderBottomRightRadius: 200,
    borderTopLeftRadius: "25%",
    overflow: "hidden",
  },
  gameFlatBg: {
    height: "100%",
    borderWidth: 2,
    borderColor: app_two,
  },
  ///JoinRoom
  joinRoomContainer: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  joinRoomInput: {
    paddingHorizontal: 10,
    borderRadius: 30,
    width: 400,
    backgroundColor: "transparent",
    paddingVertical: 5,
    borderColor: app_two,
    borderWidth: 3,
    shadowColor: app_two,
    shadowOpacity: 0.5,
    color: textColor,
  },
  //Create Room or Table
  createRoom: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  //exit Button
  exitBtn: {
    position: "absolute",
    bottom: 50,
    right: 50,
    width: 50,
    height: 50,
    padding: 10,
    margin: 10,
    borderRadius: "25%",
    borderColor: app_two,
    borderWidth: 4,
    zIndex: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  ////game table
  table: {
    flex: 8,
    zIndex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  tableArea: {
    flex: 1,
    backgroundColor: bg_hover,
    zIndex: 1,
  },
  seatContainer: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: "50%",
    position: "absolute",
    bottom: 10,
    left: "35%",
    zIndex: 1,
  },
  playerBoard: {
    width: 100,
    height: 60,
    borderRadius: 10,
    position: "relative",
    backgroundColor: "white",
    right: "-80%",
    top: 20,
    zIndex: 0,
  },
  seatContainer1: {
    width: 100,
    height: 100,
    backgroundColor: app_five,
    borderRadius: "50%",
    position: "absolute",
    bottom: "10%",
    right: 140,
    zIndex: 1,
  },
  seatContainer2: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: "50%",
    position: "absolute",
    top: "30%",
    right: 90,
    zIndex: 1,
  },
  seatContainer3: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: "50%",
    position: "absolute",
    top: 20,
    right: 250,
    zIndex: 1,
  },
  seatContainer4: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: "50%",
    position: "absolute",
    top: 20,
    left: 200,
    zIndex: 1,
  },
  seatContainer5: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: "50%",
    position: "absolute",
    top: "30%",
    left: 20,
    zIndex: 1,
  },
  seatContainer6: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: "50%",
    position: "absolute",
    bottom: "15%",
    left: 50,
    zIndex: 1,
  },
  ///account
  accountContainer: {
    top: "10%",
    height: "80%",
    alignItems: "center",
    marginVertical: "auto",
    justifyContent: "center",
  },
  accountBg: {
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 15,
  },
  accountBox: {
    backgroundColor: app_six,
    flex: 0.8,
    width: 400,
    height: 300,
    borderRadius: 10,
    position: "relative",
  },
  accountInnerBox: {
    backgroundColor: app_four,
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flex: 1,
    borderRadius: 15,
  },
  accBtn: {
    width: 100,
    height: 100,
  },
  ///register
  regContainer: {
    flex: 1,
    backgroundColor: luxe_four,
  },
  regBoxContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: luxe_two,
    marginVertical: "5%",
  },
  regBox: {
    flex: 1,
    marginVertical: 20,
    //flexDirection:"row",
    backgroundColor: luxe_three,
    width: "50%",
    shadowColor: luxe_one,
    shadowOpacity: 1,
    borderRadius: 10,
    shadowOffset: { width: 5, height: 5 },
  },
  phNoRegInput: {
    backgroundColor: luxe_six,
    width: "80%",
    paddingVertical: 10,
    marginHorizontal: "10%",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  inputLabel: {
    color: luxe_one,
    fontSize: 17,
    fontWeight: 700,
    marginHorizontal: "10%",
    paddingVertical: 10,
  },
  box2fa: {
    //flex:1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: "10%",
  },
  OTPinput: {
    backgroundColor: luxe_six,
    width: 200,
    padding: 20,
    height: 20,
    borderRadius: 10,
  },
  OTPBtn: {
    backgroundColor: luxe_one,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    width: 130,
  },
  OTPBtnTxt: {
    fontSize: 15,
    color: luxe_six,
  },
  regSubmitBtnCon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  backBtn: {
    backgroundColor: luxe_two,
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 40,
  },
  regSubmitBtn: {
    backgroundColor: luxe_two,
    padding: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  submitBtnTxt: {
    fontSize: 18,
    color: luxe_six,
  },
});
export default styles;
export{app_one,app_two,app_three,app_four,app_five,app_six, luxe_one, luxe_two, luxe_three,luxe_four,luxe_five,luxe_six,_error,_warn,_info}


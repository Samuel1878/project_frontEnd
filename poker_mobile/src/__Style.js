import {StyleSheet, Platform, Dimensions} from "react-native";

//Color theme logic
const bg_normal = "rgb(45,41,38)";
const bg_light = "rgb(248,247,242)";
const bg_hover = "#888789";
const bg_heavy = "rgb(20,21,23)";
const bg_lover = "rgb(195,197,196)"
const btn_normal = "rgb(53,75,113)";
const btn_light = "";
const btn_hover = "";
const btn_lower = "";
const btn_heavy = "";

const _main = "rgb(230,187,74)";
const _second = "rgb(192,162,55)";
const _light = "rgb(243,230,52)"
const grey_1 = "#dad9d8";
const grey_2 = "#b9b8b6";
const grey_3 = "#898681";
const grey_4 = "#58534E";
const grey_5 = "#282623";


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
  //common home
  container: {
    flex: 1,
    flexDirection: "row",
  },
  videoHome: {
    position: "absolute",
    zIndex: -1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  left: {
    flex: 1,
    backgroundColor: btn_normal,
    borderRightColor: _main,
    borderRightWidth: 2,
    shadowColor: grey_2,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    zIndex: 9999,
  },
  right: {
    flex: 4.7,
    flexDirection: "column",
    backgroundColor: "none",
    position: "relative",
  },
  /////Top Bar
  navBar: {
    height: 45,
    width: "50%",
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
    padding: 5,
    borderRadius: "25%",
  },
  navDataCon: {
    borderRadius: "25%",
    flex: 1,
    borderWidth: 2,
    borderColor: _second,
    shadowColor: _light,
    shadowOpacity: 0.9,
    overflow:"hidden"
  },
  navData: {
    borderRadius: "25%",
    flexDirection: "row",
    justifyContent: "center",
    position:"relative"
  },
  navChipTotal: {
    color: _main,
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 5,
    textAlign: "right",
  },
  navChip: {
    position: "absolute",
    right: -2,
    top: -5,
    width: 40,
    height: 40,
    resizeMode: "center",
  },
  navUserBtn: {
    width: 75,
    height: 75,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  userProfile: {
    borderRadius: 50,
    backgroundColor: bg_normal,
    width: 65,
    height: 65,
    borderRadius: 45,
    shadowColor: bg_hover,
    shadowOpacity: 1,
    shadowOffset: { width: 5, height: 0 },
  },
  settingImage: {
    width: 60,
    height: 60,
  },

  ////Body part
  main: {
    position: "relative",
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
  footerPlayBtn: {
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

  playBtn: {
    borderColor: _second,
    borderWidth: 4,
    marginVertical: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "25%",
    overflow: "hidden",
  },
  playBtnBg: {
    width: "100%",
    height: "100%",
    borderRadius: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  playBtnTxt: {
    textAlign: "center",
    color: _main,
    fontSize: 22,
    fontWeight: "600",
    fontFamily: "italino",
  },
  frameImg1: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 150,
    height: 150,
    zIndex: 99,
  },
  frameImg2: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 160,
    height: 150,
    transform: [{ rotate: "-90deg" }],
    zIndex: 99,
  },
  frameImg3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 150,
    height: 150,
    transform: [{ rotate: "90deg" }],
    zIndex: 99,
  },
  ///Body game entrance
  item: {
    width: 600,
    flex: 1,
    height: 300,
    marginVertical: 15,
    backgroundColor: bg_light,
    borderBottomRightRadius: 200,
    borderTopLeftRadius: "25%",
    overflow: "hidden",
    zIndex: 0,
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
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  accountBox: {
    backgroundColor: bg_light,
    flex: 0.8,
    width: 400,
    height: 300,
    borderRadius: 20,
    position: "relative",
    opacity: 0.7,
    shadowColor: bg_light,
    shadowOpacity: 0.6,
    shadowRadius: 20,
    shadowOffset: { width: 5, height: 5 },
  },
  accountInnerBox: {
    backgroundColor: bg_normal,
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flex: 1,
    borderRadius: 15,
  },
  accBtn: {
    width: 200,
    backgroundColor: bg_light,
    padding: 15,
    margin: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "25%",
    shadowColor: bg_light,
    shadowOpacity: 0.5,
  },
  accBtnTxt: {
    fontSize: 19,
    color: bg_heavy,
    fontWeight: "bold",
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
  //Login
  loginContainer: {
    flex: 1,
    backgroundColor: app_four,
  },
  loginWrapCon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "5%",
    backgroundColor: app_two,
  },
  loginBox: {
    flex: 1,
    marginVertical: 20,
    backgroundColor: app_three,
    width: "50%",
    borderRadius: 20,
    shadowColor: app_one,
    shadowOpacity: 1,
    borderRadius: 10,
    shadowOffset: { width: 5, height: 5 },
  },
  loginHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: app_one,
    textAlign: "center",
    padding: 5,
  },
  loginInput: {
    backgroundColor: app_six,
    width: "80%",
    paddingVertical: 10,
    marginHorizontal: "10%",
    borderRadius: 10,
    paddingHorizontal: 10,
    color: app_one,
    //hover
    shadowColor: app_one,
    shadowOpacity: 1,
    shadowOffset: { width: 5, height: 5 },
    position: "relative",
  },
  loginBtnCon: {
    flex: 1,
    paddingHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  loginBtn: {
    padding: 10,
    paddingHorizontal: 60,
    borderRadius: 10,
    backgroundColor: app_one,
  },
  regBtn: {
    backgroundColor: app_four,
    padding: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  loginBtnTxt: {
    color: app_six,
  },
  loginTrueIcon: {
    position: "absolute",
    paddingVertical: 10,
    marginVertical: 30,
  },
  resetBtnCon: {
    marginBottom: 5,
    paddingHorizontal: "10%",
    color: app_one,
    flexDirection: "row",
    position: "relative",
  },
  resetBtn: {},
  resetTxt: {
    fontSize: 15,
    color: app_one,
    marginVertical: 10,
  },
});
export default styles;
export{app_one,app_two,app_three,app_four,app_five,app_six, luxe_one, luxe_two, luxe_three,luxe_four,luxe_five,luxe_six,_error,_warn,_info,_main,_second,_light}


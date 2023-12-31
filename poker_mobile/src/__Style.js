import zIndex from "@mui/material/styles/zIndex";
import {StyleSheet, Platform, Dimensions} from "react-native";

//Color theme logic
const bg_normal = "rgb(45,41,38)";
const bg_light = "rgb(248,247,242)";
const bg_hover = "#888789";
const bg_heavy = "rgb(20,21,23)";
const bg_lover = "rgb(195,197,196)"
const btn_normal = "rgb(48,68,102)";
const btn_light = "rgb(53,74,114)";
const btn_hover = "";
const btn_lower = "";
const btn_heavy = "rgb(38,55,73)";

const _main = "rgb(230,187,74)";
const _second = "rgb(192,162,55)";
const _light = "rgb(243,230,52)";
const _lower = "rgb(182,138,60)";
const goldOld_1 = "rgb(75,45,28)";
const goldOld_2 = "rgb(163,137,90)";
const goldOld_3 = "rgb(192,163,112)"
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
  //app loading
  appLoading: {
    width: "100%",
    height: "100%",
  },
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
  //Left
  left: {
    flex: 1.3,
    backgroundColor: btn_normal,
    borderRightColor: _main,
    borderRightWidth: 2,
    shadowColor: _light,
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.4,
    zIndex: 0,
  },
  leftCon: {
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: btn_heavy,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: { width: 10, height: 5 },
  },
  logoCon: {
    position: "relative",
  },
  logoImg: {
    height: 120,
    width: 120,
    margin: "auto",
    shadowColor: bg_heavy,
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: { width: 5, height: 5 },
  },
  logoFrame: {
    position: "absolute",
    height: 185,
    width: 180,
    top: -40,
    left: -30,
    shadowColor: bg_normal,
    shadowOpacity: 0.8,
    shadowOffset: { width: 5, height: 5 },
  },
  leftBtnCon: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  friendListCon: {
    padding: 10,
    marginBottom: 10,
    height: 100,
    width: 180,
    borderRadius: "20%",
    shadowColor: _main,
    shadowOpacity: 1,
    shadowOffset: { width: 5, height: 5 },
  },
  friendListBox: {
    width: "100%",
    height: "100%",
    backgroundColor: _main,
    borderRadius: "10%",
    shadowColor: bg_normal,
    shadowOpacity: 0.9,
    shadowOffset: { width: 5, height: 5 },
  },
  //common
  leftBtnBg: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  getChipBtn: {
    margin: 5,
    width: 170,
    height: 40,
    borderRadius: "50%",
    borderColor: _second,
    borderWidth: 5,
    overflow: "hidden",
    shadowColor: bg_normal,
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { width: 5, height: 5 },
  },
  getChipBtnTxt: {
    fontSize: 18,
    fontWeight: "500",
    color: _main,
    fontFamily: "italino",
    textAlign: "center",
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
    overflow: "hidden",
    shadowOffset: { width: 3, height: 3 },
  },
  navData: {
    borderRadius: "25%",
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
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
    right: 0,
    top: -15,
    width: 55,
    height: 60,
    resizeMode: "center",
  },
  navUserBtn: {
    width: 75,
    height: 75,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: _second,
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: { width: 5, height: 5 },
  },
  userProfile: {
    borderRadius: 50,
    backgroundColor: bg_heavy,
    width: 65,
    height: 65,
    shadowColor: _second,
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: { width: 5, height: 5 },
  },
  settingImage: {
    width: 60,
    height: 60,
    shadowColor: bg_normal,
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: { width: 3, height: 3 },
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
    shadowColor: _light,
    shadowOpacity: 0.3,
    shadowOffset: { width: 3, height: -3 },
  },
  frameImg2: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 160,
    height: 150,
    transform: [{ rotate: "-90deg" }],
    zIndex: 99,
    shadowColor: _light,
    shadowOpacity: 0.3,
    shadowOffset: { width: 3, height: -3 },
  },
  frameImg3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 150,
    height: 150,
    transform: [{ rotateX: "180deg" }],
    zIndex: 99,
    shadowColor: _light,
    shadowOpacity: 0.3,
    shadowOffset: { width: 3, height: -3 },
  },
  ///Body game entrance
  item: {
    width: 600,
    flex: 1,
    height: 250,
    marginVertical: 15,
    borderBottomRightRadius: 500,
    borderTopLeftRadius: 100,
    overflow: "hidden",
    zIndex: 0,
    position: "relative",
  },
  itemBorder: {
    zIndex: 0,
    height: "100%",
    padding: 10,
    position: "relative",
  },
  itemBorder1: {
    position: "relative",
    height: "100%",
    padding: 5,
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 550,
  },
  itemBg: {
    height: "100%",
    position: "relative",
    zIndex: 0,
  },
  createItemImg: {
    width: 270,
    height: 200,
    position: "absolute",
    bottom: "-15%",
    right: 0,
  },
  ////BLurView
  ClickedView: {
    height: "100%",
    zIndex: 99,
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
  },
  gameFlatBg: {
    height: "100%",
    borderWidth: 2,
    borderColor: app_two,
  },
  //exit Button
  exitBtn: {
    position: "absolute",
    bottom: 50,
    right: 50,
    width: 70,
    height: 70,
    padding: 10,
    margin: 10,
    borderRadius: "45%",
    borderColor: _main,
    borderWidth: 4,
    zIndex: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  exitBtnTxt: {
    fontFamily: "Philosopher",
    fontSize: 20,
    color: _second,
  },
  ////
  ///JoinRoom
  joinRoomContainer: {
    backgroundColor: "transparent",
    flex: 1,
  },
  joinRoom: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },

  joinRoomBg: {
    width: "100%",
    height: "100%",
  },
  joinRoomInput: {
    paddingHorizontal: 10,
    borderRadius: 30,
    width: 400,
    backgroundColor: "transparent",
    paddingVertical: 5,
    borderColor: _main,
    borderWidth: 3,
    shadowColor: _second,
    shadowOpacity: 0.5,
    color: _main,
    shadowRadius: 2,
    backfaceVisibility: "visible",
    shadowOffset: { width: 2, height: 2 },
  },
  submitBtn: {
    marginTop: 20,
    width: 250,
    height: 50,
  },
  submitBtnBg: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  JsubmitBtnTxt: {
    textAlign: "center",
    color: _main,
    fontSize: 18,
    fontFamily: "Philosopher",
  },
  //Create Room or Table
  createRoom: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },

  joinRoomId: {
    color: _main,
    fontSize: 18,
    letterSpacing: 2,
  },
  createBtn: {
    width: 200,
    height: 50,
    left: 0,
  },
  createTableBtn: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  createBtnTxt: {
    color: _main,
    fontSize: 18,
    fontFamily: "Philosopher",
  },
  ////game ROOM
  table: {
    flex: 1,
    zIndex: -1,
    position: "relative",
    paddingRight: 20,
    paddingLeft: 10,
  },
  ////bottom
  tablePart1: {
    flex: 1,
    borderRadius: "25%",
    position: "relative",
  },
  bottom1Con: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leaveTableBtn: {
    margin: 10,
    padding: 10,
    borderRadius: "20%",
    borderColor: _second,
    borderWidth: 5,
  },
  leaveTableBtnTxt: {
    fontSize: 18,
    color: _main,
    fontFamily: "Philosopher",
  },
  unsitSeat: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tablePreData: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "50%",
    borderColor: _second,
    borderWidth: 5,
  },
  tableDataTxt: {
    fontSize: 18,
    color: _main,
    fontFamily:"Philosopher"
  },
  buyIn: {
    color: _main,
    fontSize: 18,
    width: 100,
    padding: 5,
    margin: 5,
    borderRadius: 10,
    borderColor: _second,
    borderLeftWidth:5,
    borderRightWidth:2,
    borderBottomWidth:5,
    borderTopWidth:1
  },
  sitDownBtn: {
    margin: 10,
    padding: 10,
    borderRadius: "20%",
    borderColor: _second,
    borderWidth: 5,
  },
  //standUp
  standUpBtn: {
    left: 200,
    bottom: 0,
    padding: 10,
    borderRadius: "100%",
    borderColor: _second,
    borderWidth: 5,
    position: "absolute",
  },
  //Seat 1, tablePart1:User
  seat1: {
    position: "absolute",
    bottom: 0,
    left: "45%",
  },
  userSeatCon: {
    width: 110,
    height: 110,
    position: "relative",
  },
  userHand:{
    position:"absolute",
    top:"-50%",
    backgroundColor:"white",
    
    
  } ,

  hands:{
    position:"absolute",
    bottom:"-30%",
    width:40,
    height:80,
    backgroundColor:"red"

  },
  ///Poker Cards
  userCard :{
    width:80,
    height:80,
    borderColor:_main,
    borderWidth:3
  },

  showProfileBtn: {
    position: "absolute",
    top: 5,
    left: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  seatUserImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    zIndex: 99,
  },
  ///Game UI
  gameUICon: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  gameBtn: {
    margin: 10,
    padding: 10,
    borderRadius: "20%",
    borderColor: _main,
    borderWidth: 5,
  },
  foldTxt: {
    color: _second,
    fontSize: 18,
    fontFamily: "Philosopher",
  },
  betBtn: {
    margin: 10,
    padding: 10,
    borderRadius: "20%",
    borderColor: _main,
    borderWidth: 5,
  },
  allInBtn: {
    margin: 10,
    padding: 10,
    borderRadius: "20%",
    borderColor: _main,
    borderWidth: 5,
  },
  ///Low
  tablePart2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  seat2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  messagesBox: {
    backgroundColor:bg_light,
    flex:1,
    alignItems: "center",
    justifyContent: "center",

  },
  tableInfo:{
    width:200,
    paddingHorizontal:10,
    backgroundColor:bg_light
  },
  seat3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ///mid
  tablePart3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  board:{
    backgroundColor:"white",

  },
  ///High
  tablePart4: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  seat4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pot: {
    flex: 1,
  },
  seat5: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ///Top
  tablePart5: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 100,
  },
  tableId: {
    position: "absolute",
    top: 5,
    left: 5,
    color: _main,
    backgroundColor: bg_heavy,
    padding: 5,
    fontSize: 20,
    fontFamily: "Philosopher",
    borderRadius: 10,
  },
  seat6: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: "30%",
    //alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  seat7: {
    position: "absolute",
    top: 0,
    right: "30%",
    flex: 1,
    //alignItems: "flex-end",
    justifyContent: "flex-start",
  },

  ///

  ///account
  accountBg: {
    width: "100%",
    height: "100%",
  },
  accountContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "5%",
    height: 100,
    alignItems: "center",
    marginVertical: "auto",
    justifyContent: "center",
  },
  // accountBox: {
  //   backgroundColor: bg_light,
  //   flex: 0.8,
  //   width: 400,
  //   height: 300,
  //   borderRadius: 20,
  //   position: "relative",
  //   opacity: 0.7,
  //   shadowColor: bg_light,
  //   shadowOpacity: 0.6,
  //   shadowRadius: 20,
  //   shadowOffset: { width: 5, height: 5 },
  // },
  accountInnerBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  accBtn: {
    width: 200,
    backgroundColor: bg_heavy,
    padding: 15,
    marginTop: 25,
    marginHorizontal: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    shadowColor: _light,
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowOffset: { width: 3, height: 5 },
    borderColor: _main,
    borderWidth: 3,
  },
  accBtnTxt: {
    fontFamily: "Philosopher",
    fontSize: 19,
    color: _second,
    fontWeight: "700",
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

  ///Profile///
  profileContainer: {
    flex: 1,
    backgroundColor: "transparent",
  },
  profileBg: {
    flex: 1,
    position: "relative",
  },

  //Exit Button
  profileExitBtn: {
    height: 70,
    width: 120,
    position: "absolute",
    top: 10,
    left: 10,
    borderTopLeftRadius: "40%",
    borderBottomRightRadius: "40%",
    overflow: "hidden",
  },
  proBtnBg: {
    padding: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  proBtnInner: {
    width: "100%",
    height: "100%",
    backgroundColor: grey_5,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: "25%",
    borderBottomRightRadius: "25%",
  },
  exitIcon: {
    width: 60,
    height: 30,
    shadowColor: bg_heavy,
    shadowOpacity: 0.7,
    shadowRadius: 2,
    shadowOffset: { width: 10, height: 5 },
  },
  proTop: {
    flex: 1,
    marginLeft: 150,
  },
  proMid: {
    flex: 2,
    flexDirection: "row",
  },
  proLeft: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    margin: "auto",
    width: "60%",
    height: "60%",
    backgroundColor: _main,
    backfaceVisibility: "visible",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "25%",
  },
  defaultUserProfile: {
    width: "100%",
    height: "100%",
  },
  promid: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 10,
  },
  proData: {
    fontFamily: "Philosopher",
    fontSize: 18,
    fontWeight: "900",
    marginVertical: 5,
    color: _main,
  },
  proRight: {
    flex: 1.4,
    alignItems: "center",
    justifyContent: "center",
  },
  vipLogo: {
    width: 330,
    height: 250,
    margin: 5,
  },
  proBot: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  proBotLeft: {
    flex: 1,
  },
  signOutBtn: {
    width: 210,
    height: 75,
  },
  signOutBtnFrame: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signOutTxt: {
    fontSize: 21,
    fontWeight: "bold",
    fontFamily: "Philosopher",
    color: _main,
    textShadowColor: _second,
    textShadowRadius: 2,
    textShadowOffset: { width: 2, height: 2 },
  },
  //WithDraw///
  Container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: bg_normal,
  },
  leftContainer: {
    flex: 1,
    backgroundColor: grey_5,
    padding: 5,
    borderRightWidth: 2,
    borderColor: _second,
    shadowColor: _main,
    shadowOpacity: 1,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 2,
  },
  withdrawBtns: {
    margin: 5,
    backgroundColor: "transparent",
    borderTopLeftRadius: "25%",
    borderBottomRightRadius: "25%",
    overflow: "hidden",
    borderColor: _main,
    borderWidth: 2,
  },
  withdrawBtnBg: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  withdrawBtnTxt: {
    fontSize: 19,
    color: _main,
  },
  withdrawExitBtn: {
    backgroundColor: _main,
    padding: 10,
  },
  withdrawExitBtnTxt: {
    color: bg_normal,
  },
  rightContainer: {
    flex: 3,
    backgroundColor: grey_2,
    alignItems: "center",
  },
});
export default styles;
export{app_one,app_two,app_three,app_four,app_five,app_six, luxe_one, luxe_two, luxe_three,luxe_four,luxe_five,luxe_six,_error,_warn,_info,_main,_lower,_second,_light,bg_normal,bg_heavy,bg_light,bg_hover,goldOld_1,goldOld_2,goldOld_3}


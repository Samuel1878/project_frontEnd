import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import AppLoading from "./src/screen/appLoading.js";
import CreatePoker from "./src/screen/create_poker_room.js";
import JoinPokerRoom from "./src/screen/joinRoom.js";
import AccountScreen from "./src/screen/account.js";
import Register from "./src/screen/register.js";
const Stack = createStackNavigator();
import Home from "./src/screen/home.js";
import GameRoom from "./src/screen/gameRoom.js";
import Welcome from "./src/screen/welcome.js";
import LoginScreen from "./src/screen/login.js";
import * as SplashScreen from "expo-splash-screen";
import UserProfile from "./src/screen/userProfile.js";
import Deposit from "./src/screen/deposit.js";
import Withdraw from "./src/screen/withdraw.js";
import  { AuthContext } from "./src/services/AuthUser.js";
SplashScreen.preventAutoHideAsync();
const Navigations = () => {
  const { userToken, isLoading } = useContext(AuthContext);
  console.log(userToken)
  let [fontsLoaded] = useFonts({
    Philosopher: require("./assets/fonts/Philosopher-Regular.ttf"),
    italino: require("./assets/fonts/Italianno-Regular.ttf"),
  });
  ///Apploading or loaded management
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  if(!isLoading){
    SplashScreen.hideAsync()
  }
  return (
      <NavigationContainer>
        <Stack.Navigator presentation="modal">
          {userToken == null ? (
            <>
              <Stack.Screen
                name="loading"
                component={AppLoading}
                options={{ headerShwon: false }}
              />
              <Stack.Screen
                name="account"
                component={AccountScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="register"
                component={Register}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="welcome"
                component={Welcome}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="home"
                component={Home}
                options={{ headerShown: false }}
              />
              {/*userProfile */}
              <Stack.Screen
                name="userProfile"
                component={UserProfile}
                options={{ headerShown: false }}
              />
              {/* /* Deposit and WithDraw screen */}
              <Stack.Screen
                name="deposit"
                component={Deposit}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="withdraw"
                component={Withdraw}
                options={{ headerShown: false }}
              />
              {/* Game Screen */}
              <Stack.Screen
                name="create_poker_room"
                component={CreatePoker}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="join_poker_room"
                component={JoinPokerRoom}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GameRoom"
                component={GameRoom}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default Navigations
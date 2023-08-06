import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import AppLoading from "./src/screen/appLoading.jsx";
import CreatePoker from "./src/screen/create_poker_room.jsx";
import JoinPokerRoom from "./src/screen/joinRoom.jsx";
import AccountScreen from "./src/screen/account.jsx";
import Register from "./src/screen/register.jsx";
import Home from "./src/screen/home.jsx";
import GameRoom from "./src/screen/gameRoom.jsx";
import Welcome from "./src/screen/welcome.jsx";
import LoginScreen from "./src/screen/login.jsx";
import * as SplashScreen from "expo-splash-screen";
import UserProfile from "./src/screen/userProfile.jsx";
import Deposit from "./src/screen/deposit.jsx";
import Withdraw from "./src/screen/withdraw.jsx";
import  AuthContext  from "./src/services/auth/authContext.js";
SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();
const Navigations = () => {
  const { userToken, isLoading } = useContext(AuthContext);
  console.log(userToken);
  let [fontsLoaded] = useFonts({
    Philosopher: require("./assets/fonts/Philosopher-Regular.ttf"),
    italino: require("./assets/fonts/Italianno-Regular.ttf"),
  });
  ///Apploading or loaded management
  if(!isLoading || !fontsLoaded){
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
                options={{ headerShown: false }}
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
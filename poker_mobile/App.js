import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {useFonts} from "expo-font";
import AppLoading from "./src/screen/appLoading.js";
import CreatePoker from "./src/screen/create_poker_room.js";
import JoinPokerRoom from "./src/screen/joinRoom.js";
import AccountScreen from "./src/screen/account.js";
import Register from "./src/screen/register.js";
const Stack = createStackNavigator();
import Home from "./src/screen/home.js"
import GameRoom from "./src/screen/gameRoom.js";
import Welcome from "./src/screen/welcome.js";
import LoginScreen from "./src/screen/login.js";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Philosopher" : require("./assets/fonts/Philosopher-Regular.ttf")
  });


///Apploading or loaded management
  if(!fontsLoaded){
    return<AppLoading/>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome" presentation="modal">
      <Stack.Screen 
          name="welcome" 
          component={Welcome}
          options={{headerShown:false}}/>
        <Stack.Screen 
          name="home" 
          component={Home}
          options={{headerShown:false}}/>
        <Stack.Screen 
          name="account" 
          component={AccountScreen}
          options={{headerShown:false}}/>
        <Stack.Screen
            name="create_poker_room"
            component={CreatePoker}
            options={{headerShown:false}}/>
        <Stack.Screen
            name="join_poker_room"
            component={JoinPokerRoom}
            options={{headerShown:false}}/>
        <Stack.Screen
            name="GameRoom"
            component={GameRoom}
            options={{headerShown:false}}/>
        <Stack.Screen
          name="register"
          component={Register}
          options={{headerShown:false}}/>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown:false}}/>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}


import React,{createContext,useMemo,useReducer,useEffect} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import * as SecureStore from "expo-secure-store";
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
export const AuthContext = createContext();
import * as SplashScreen from "expo-splash-screen";
import UserProfile from "./src/screen/userProfile.js";
import Deposit from "./src/screen/deposit.js";
import Withdraw from "./src/screen/withdraw.js";
SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Philosopher": require("./assets/fonts/Philosopher-Regular.ttf"),
    "italino": require("./assets/fonts/Italianno-Regular.ttf"),
  });
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );
  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(() => ({
    signIn: async (data) => {
      dispatch({ type: "SIGN_IN", token: data.token });
      await SecureStore.setItemAsync("userToken", data.token)
    },
    signOut: () => dispatch({ type: "SIGN_OUT" }),
  }));


///Apploading or loaded management
  if(!fontsLoaded){
    return<AppLoading/>;
  }
  if(!state.isLoading){
    SplashScreen.hideAsync()
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator presentation="modal">
          {state.userToken == null ? (
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
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}


import { createContext ,useReducer,useEffect,useMemo} from "react"
import * as SecureStore from "expo-secure-store";
export const AuthContext = createContext(null);
const initialValue = {
         isLoading: true,
         isSignout: false,
         userToken: null,
        }

export default function AuthProvider ({children}) {
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
       initialValue
     );
     useEffect(() => {
       const bootstrapAsync = async () => {
         let userToken;

         try {
           userToken = await SecureStore.getItemAsync("userToken");
         } catch (e) {
           // Restoring token failed
           console.error("Restoring token failed:" + e.message)
         }

         // After restoring token, we may need to validate it in production apps

         // This will switch to the App screen or Auth screen and this loading
         // screen will be unmounted and thrown away.
         dispatch({ type: "RESTORE_TOKEN", token: userToken });
       };

       bootstrapAsync();
     }, []);

     const authContext = useMemo(() => ({
       signIn: async (userToken) => {
         dispatch({ type: "SIGN_IN", token: userToken });
         await SecureStore.setItemAsync("userToken", userToken);
       },
       signOut: () => dispatch({ type: "SIGN_OUT" }),
       isLoading: state.isLoading,
       userToken: state.userToken,
     }));

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    )
}


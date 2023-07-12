import { ImageBackground } from "react-native";
import { BlurView } from 'expo-blur';
import styles from "../__Style";
import { LinearGradient } from 'expo-linear-gradient';
import { View,Text,Button } from "react-native";
import { app_one,app_three,app_four, app_six} from "../__Style";

export default AccountScreen = ({navigation}) => {
    return(
        <ImageBackground
            resizeMode="cover"
            style={{flex:1}}
            source={require("../../assets/account.jpg")}>
                <BlurView intensity={25} style={styles.accountContainer}>
                    <View style={styles.accountBox}>
                        <LinearGradient 
                            colors={[app_one, app_three]} 
                            style={styles.accountBg}
                            end={{x:0.2, y:0.3}}>
                               <View style={styles.accountInnerBox}>
                                    <Button   
                                        title="Register" 
                                        style={styles.accBtn} 
                                        color={app_three}
                                        onPress={()=>navigation.navigate("register")}/>
                                    <Button 
                                        title="Login" 
                                        color={app_six}
                                        style={styles.accBtn}
                                        onPress={()=>navigation.navigate("login")}>
                                    </Button>
                               </View>
                        </LinearGradient>
                    </View>
                </BlurView>
        </ImageBackground>
    )
}
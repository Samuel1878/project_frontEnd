import React from 'react';
import { View ,Text, ImageBackground} from 'react-native';
import { app_six } from '../__Style';

export default Welcome = ({navigation}) =>{
    setTimeout(()=>{
        navigation.navigate("account");
    },3000)
    return(
       <ImageBackground
            resizeMode='cover'
            source={require("../../assets/background.jpg")}
            style={{flex:1}}>
            <Text style={{fontSize:40, color:app_six}}>
                Welcome
            </Text>
       </ImageBackground>
    )
}

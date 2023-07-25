import React, { useState } from 'react';
import { View ,Text, ImageBackground} from 'react-native';
import { app_six } from '../__Style';

export default Welcome = ({navigation}) =>{
    setTimeout(()=>{

            navigation.navigate("home");
            return

        
    },3000)
    return(
       <ImageBackground
            resizeMode='cover'
            source={require("../../assets/background.jpg")}
            style={{flex:1}}>
            <Text style={{fontSize:40, color:app_six, textAlign:"center", marginVertical:"20%"}}>
                Welcome
            </Text>
       </ImageBackground>
    )
}

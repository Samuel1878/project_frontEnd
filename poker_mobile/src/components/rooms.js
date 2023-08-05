import {ImageBackground, Text, TouchableOpacity,Image} from "react-native"
import styles, { _light, _lower, _main, _second, bg_heavy, bg_hover, bg_normal } from "../__Style"
import { LinearGradient } from "expo-linear-gradient"
import { useCallback, useEffect, useMemo, useState } from "react"
import { BlurView } from "expo-blur"
const Item = ({item,itemSelection,navigation,intensity,borderCol,clicked}) => {
    const [xEx, setXEx] = useState(0);
    const onPressHandler = () =>{
        itemSelection();
        if(clicked) {
            navigation.navigate(item.name)
            return
        }
    }
      
    return (
      <TouchableOpacity style={styles.item} onPress={onPressHandler}>
        <LinearGradient
          style={styles.itemBorder}
          start={{ x: xEx, y: 0.1 }}
          colors={borderCol}
        >
          <LinearGradient
            style={styles.itemBorder1}
            start={{ x: xEx, y: 0.4 }}
            colors={[bg_normal, bg_hover, bg_heavy]}
          >
            <ImageBackground
              resizeMode="cover"
              style={styles.itemBg}
              source={item.src()}
            >
              <BlurView
                intensity={intensity}
                tint="dark"
                style={styles.ClickedView}
              >
                <Image
                  source={item.png()}
                  style={[styles.createItemImg,item.name==="join_poker_room"?{width:200,height:200,left:100}:null]}
                />
              </BlurView>
            </ImageBackground>
          </LinearGradient>
        </LinearGradient>
      </TouchableOpacity>
    );
}
export default Item
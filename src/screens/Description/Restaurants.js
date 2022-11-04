import React from 'react'
import {View,Text,StatusBar,StyleSheet, Pressable,Image} from 'react-native';
import { useFonts } from "expo-font";
import colors from "../../constants/colors";
import CustomCaleder from '../../components/Calender/CustomCaleder';


const Restaurants = () => {
    const [loaded] = useFonts({
        ReadexBold: require("../../../assets/fonts/ttf/ReadexPro-bold.ttf"),
        ReadexMedium: require("../../../assets/fonts/ttf/ReadexPro-Medium.ttf"),
        ReadexLight: require("../../../assets/fonts/ttf/ReadexPro-Light.ttf"),
      });
  return (
    <View
    style={{
      backgroundColor: colors.BACKGROUND,
      height: "100%",
    }}
  >
    <CustomCaleder />
    
    </View>
  )
}

export default Restaurants
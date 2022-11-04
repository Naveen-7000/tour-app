import React from 'react';
import {View,Text,StatusBar,StyleSheet, Pressable,Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';
import { useFonts } from "expo-font";


const BookCards = () => {
    const [loaded] = useFonts({
        ReadexBold: require("../../assets/fonts/ttf/ReadexPro-bold.ttf"),
        ReadexMedium: require("../../assets/fonts/ttf/ReadexPro-Medium.ttf"),
        ReadexLight: require("../../assets/fonts/ttf/ReadexPro-Light.ttf"),
      });
  return (
    <View style={{
        width:200,
        height:220,
        backgroundColor:"#1d1d1d",
        alignItems:'center',
        marginRight:20,
    }}>
      <Image 
         style={{
          width:"100%",
          height:"100%",
         }}
        resizeMode='cover'
        source={require("../../assets/Agra.jpg")}
        
      />
      <Text style={{
        position:"absolute",
        color:colors.WHITE,
        fontFamily:"ReadexBold",
        fontSize:22,
        bottom:5,
        left:10,
      }}>
        Agra
      </Text>
    </View>
  )
}

export default BookCards
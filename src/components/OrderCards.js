import React from 'react';
import {View,Text,StatusBar,StyleSheet, Pressable,Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';
import { useFonts } from "expo-font";


const CityCard = () => {
    const [loaded] = useFonts({
        ReadexBold: require("../../assets/fonts/ttf/ReadexPro-bold.ttf"),
        ReadexMedium: require("../../assets/fonts/ttf/ReadexPro-Medium.ttf"),
        ReadexLight: require("../../assets/fonts/ttf/ReadexPro-Light.ttf"),
      });
  return (
    <View style={{
        width:200,
        height:290,
        backgroundColor:"#1d1d1d",
        // alignItems:'center',
        marginRight:15,
    }}>
        <Image 
         style={{
          width:"100%",
          height:"60%",
         }}
        resizeMode='cover'
        source={require("../../assets/tajmahal.jpeg")}
      />
      <View>
      <Text style={{
        color:colors.WHITE,
        fontFamily:"ReadexMedium",
        fontSize:14,
       
      }}>
        Taj mahal
      </Text>
      <Text style={{
        color:colors.WHITE,
        fontFamily:"ReadexMedium",
        fontSize:13,
        letterSpacing:0.8,
       
      }}>
        Ratings...
      </Text>
      <Text style={{
        color:colors.WHITE,
        fontFamily:"ReadexMedium",
        fontSize:13,
        letterSpacing:0.8,
       
      }}>
        Historic Sites - Points of interest...
      </Text>
      <Text style={{
        color:colors.WHITE,
        fontFamily:"ReadexMedium",
        fontSize:13,
        letterSpacing:0.8,
       
      }}>
        Agra,India
      </Text>
      </View>
    </View>
  )
}

export default CityCard
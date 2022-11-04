import React from 'react';
import {View,Text,StatusBar,StyleSheet, Pressable,} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useFonts } from "expo-font";

const Button = ({title}) => {
    const [loaded] = useFonts({
        ReadexBold: require("../../assets/fonts/ttf/ReadexPro-bold.ttf"),
        ReadexMedium: require("../../assets/fonts/ttf/ReadexPro-Medium.ttf"),
        ReadexLight: require("../../assets/fonts/ttf/ReadexPro-Light.ttf"),
      });
  return (
    <Pressable style={{
        width:140,
        height:40,
        borderRadius:20,
        backgroundColor:colors.WHITE,
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row',
    }}>
        {
            title !== "Hotels" ? 
            <MaterialIcons name= "hotel" color={colors.BLACK} size={22}  />
            :
            <MaterialCommunityIcons name={"food"} color={colors.BLACK} size={22} />
        }

        <Text style={{
            textAlign:'center',
            fontSize:16,
            fontFamily:'ReadexMedium',
            color:colors.BLACK,
        }}>{title}</Text>

    </Pressable>
  )
}

export default Button
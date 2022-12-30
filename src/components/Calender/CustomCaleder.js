import React,{useState} from 'react';
import { Pressable, Text,View } from 'react-native';
import colors from '../../constants/colors';
import Feicon  from "react-native-vector-icons/Feather";
import { useFonts } from "expo-font";
import WixCalendar from './WixCalendar';

const CustomCaleder = () => {
  const [loaded] = useFonts({
    ReadexBold: require("../../../assets/fonts/ttf/ReadexPro-bold.ttf"),
    ReadexMedium: require("../../../assets/fonts/ttf/ReadexPro-Medium.ttf"),
    ReadexLight: require("../../../assets/fonts/ttf/ReadexPro-Light.ttf"),
  });

  
  return (
    <Pressable style={{
      width:"100%",
      height:50,
      borderRadius:24,
      borderColor:colors.GREY,
      borderWidth:1,
    }}>

      <View style={{
        width:"100%",
        height:"100%",
        justifyContent:"space-around",
        alignContent:"center",
        alignItems:"center",
        flexDirection:"row"
      }}>
        <View style={{
          width:"45%",
          flexDirection:"row",
          justifyContent:"space-evenly",
          alignItems:"center",
        }}>
       <Feicon name='calendar' size={18} color={colors.WHITE}/>
       <Text style={{
                fontSize: 14,
                fontFamily: "ReadexMedium",
                color: colors.WHITE,
                lineHeight:28,
              }}>5 nov - 6 nov</Text>
      </View>
       <View style={{
        width:1,
        height:"100%",
        backgroundColor:colors.GREY,

      }}></View>
      <View style={{
          width:"40%",
          flexDirection:"row",
          justifyContent:"center",
          alignItems:"center",
        }}>
       <Feicon name='user' size={18} color={colors.WHITE}/>
       <Text style={{
                fontSize: 14,
                fontFamily: "ReadexMedium",
                color: colors.WHITE,
                lineHeight:28,
                paddingLeft:10,
              }}>2</Text>
        </View>
       </View>
    </Pressable>
  )
}

export default CustomCaleder
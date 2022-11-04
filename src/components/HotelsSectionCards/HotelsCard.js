import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import Feicons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import colors from "../../constants/colors";
import { useFonts } from "expo-font";
import { useState } from "react";
import { lazy } from "react";
const HotelsCard = ({navigation}) => {
    const [loaded] = useFonts({
        ReadexBold: require("../../../assets/fonts/ttf/ReadexPro-bold.ttf"),
        ReadexMedium: require("../../../assets/fonts/ttf/ReadexPro-Medium.ttf"),
        ReadexLight: require("../../../assets/fonts/ttf/ReadexPro-Light.ttf"),
      });
  return (
    <View style={{
        width:"100%",
        paddingVertical: 15,
        marginBottom:20,
        borderBottomColor:colors.OFFWHITE,
        borderBottomWidth:0.3,
    }}>
    <View>
    <Image source={{uri:"https://source.unsplash.com/1024x768/?taj-hotel"}} style={{
        width:"100%",
        height:200,
        resizeMode:"cover",
    }}    
    />
    <View style={{
        paddingHorizontal:15,
        paddingVertical:5,
    }}>

    <Text   style={{
        fontSize: 16,
        fontFamily: "ReadexMedium",
        color: colors.WHITE,
        letterSpacing:1,
        lineHeight:28,
    }}>
        1.Taj Hotel
    </Text>
    <Text   style={{
        fontSize: 16,
        fontFamily: "ReadexMedium",
        color: colors.WHITE,
              letterSpacing:1,
              lineHeight:18,
            }}>
        Rating 4/5
    </Text>
    <View style={{
        justifyContent:"space-between",
        alignItems:'center',
        flexDirection:"row",
    }}>
    <Text   style={{
        fontSize: 14,
              fontFamily: "ReadexMedium",
              color: colors.WHITE,
              letterSpacing:1,
              lineHeight:14,
            }}>
         $30
    </Text>
    <Pressable style={{
        width:85,
        height:35,
        backgroundColor:"#086f23",
        justifyContent:'center',
        alignItems:"center",
        borderRadius:22,
        borderColor:colors.OFFWHITE,
        borderWidth:0.5,
    }} onPress={()=>navigation.navigate("HotelDetails")}>
         <Text style={{
              fontSize: 13,
              fontFamily: "ReadexMedium",
              color: colors.WHITE,
              lineHeight:18,
              textAlign:'center',
            }} >View Deal</Text>
    </Pressable>
    </View>
    {/* Button */}
    </View>
    </View>
    </View>
  )
}

export default HotelsCard
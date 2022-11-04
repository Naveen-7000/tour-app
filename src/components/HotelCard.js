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
import colors from "../constants/colors";
import { useFonts } from "expo-font";
import { useState } from "react";

const HotelCard = ({ navigation }) => {
  const [loaded] = useFonts({
    ReadexBold: require("../../assets/fonts/ttf/ReadexPro-bold.ttf"),
    ReadexMedium: require("../../assets/fonts/ttf/ReadexPro-Medium.ttf"),
    ReadexLight: require("../../assets/fonts/ttf/ReadexPro-Light.ttf"),
  });
  const [active,setActive]=useState(false);
  const favouriteHandler=(e)=>{
    e.preventDefault();
    
    if(active){
        setActive(false);
    }else{
        setActive(true);
    }
  }
  
  
  return (
    <View
      style={{
        width:220,
        height:250,
        backgroundColor: "#1d1d1d",
        marginRight: 15,
      }}
    >
        <View style={{
            width:"100%",
            height:"90%",
        }}>
        <Image
         source={require("../../assets/hotels.jpg")}
         style={{
            width:"100%",
            height:"100%",
         }}
         />
         {
            active  ? 
            <Feicons name="heart-outline" size={24} color={colors.BACKGROUND} onPress={(e)=>favouriteHandler(e)} style={{
                position:"absolute",
                backgroundColor:colors.WHITE,
                padding:10,
                borderRadius:50,
                alignSelf:"flex-end",
                top:5,
                right:5,
            }}
            
            />
            :
            <Feicons name="heart" size={24} color={colors.RED} onPress={(e)=>favouriteHandler(e)} style={{
                position:"absolute",
                backgroundColor:colors.WHITE,
                padding:10,
                borderRadius:50,
                alignSelf:"flex-end",
                top:5,
                right:5,
            }}
            />

         }
        </View>

         <View style={{
            paddingTop:5,
         }}>
         <Text style={{
        color:colors.WHITE,
        fontFamily:"ReadexMedium",
        fontSize:16,
       
      }}>
        Oberoi Amarvilas
      </Text>
      <Text style={{
        color:colors.WHITE,
        fontFamily:"ReadexMedium",
        fontSize:12,
        letterSpacing:0.4,
       
      }}>
        Ratings 4/5
      </Text>
      </View>
    </View>
  );
};

export default HotelCard;

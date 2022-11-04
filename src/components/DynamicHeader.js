import React from 'react';
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../constants/colors";
import Feicons from "react-native-vector-icons/Feather";
import { useFonts } from 'expo-font';
const DynamicHeader = ({navigation,title}) => {
    const [loaded] = useFonts({
        ReadexBold: require("../../assets/fonts/ttf/ReadexPro-bold.ttf"),
        ReadexMedium: require("../../assets/fonts/ttf/ReadexPro-Medium.ttf"),
        ReadexLight: require("../../assets/fonts/ttf/ReadexPro-Light.ttf"),
      });
  return (
    <View
    style={{
      backgroundColor: colors.BACKGROUND,
      width:"100%",
    //   marginTop:StatusBar.currentHeight,
    }}
  >
    <StatusBar barStyle="light-content" backgroundColor={colors.STATUS} />
    <View style={{
      width:"100%",
      paddingHorizontal:15,
      paddingVertical:10,
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:"row",
    }}>
      <Feicons name="chevron-left" size={24} color={colors.WHITE} onPress={()=>navigation.goBack()} />
       <Text style={{
        fontSize:16,
        fontFamily:"ReadexMedium",
        lineHeight:22,
        textAlign:'center',
        color:colors.WHITE,
       }}>{title}</Text>
      <Feicons name="search" size={0} color={colors.WHITE}  />
     
    </View>
  </View>
  )
}

export default DynamicHeader
import React from 'react';
import {View,Text,StatusBar,StyleSheet, Pressable,Image,ScrollView} from 'react-native';
import { useFonts } from "expo-font";
import colors from "../../constants/colors";
import HotelsCard from '../../components/HotelsSectionCards/HotelsCard';

const Hotels = ({navigation}) => {
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
    <ScrollView contentContainerStyle={{flexGrow: 1,paddingBottom:40,}}>
       <HotelsCard navigation={navigation} />
       <HotelsCard navigation={navigation} />
    </ScrollView>
    
    </View>
  )

}

export default Hotels
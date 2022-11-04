import React from 'react';
import {View,Text,StatusBar,StyleSheet, Pressable,Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../constants/colors';
import { useFonts } from "expo-font";

const GreenCard = () => {
    const [loaded] = useFonts({
        ReadexBold: require("../../assets/fonts/ttf/ReadexPro-bold.ttf"),
        ReadexMedium: require("../../assets/fonts/ttf/ReadexPro-Medium.ttf"),
        ReadexLight: require("../../assets/fonts/ttf/ReadexPro-Light.ttf"),
      });
  return (
        <View>
            <Text>Heelo</Text>
        </View>
  )
}

export default GreenCard
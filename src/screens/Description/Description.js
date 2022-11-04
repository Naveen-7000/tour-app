import React from 'react'
import {View,Text,StatusBar,StyleSheet, Pressable,Image} from 'react-native';
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constants/colors";
import OverView from '../Description/OverView';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Hotels from './Hotels';
import Restaurants from './Restaurants';
import { lazy } from 'react';
import DynamicHeader from '../../components/DynamicHeader';
import { useIsFocused } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();
const Description = ({navigation}) => {
  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
  }
    const [loaded] = useFonts({
        ReadexBold: require("../../../assets/fonts/ttf/ReadexPro-bold.ttf"),
        ReadexMedium: require("../../../assets/fonts/ttf/ReadexPro-Medium.ttf"),
        ReadexLight: require("../../../assets/fonts/ttf/ReadexPro-Light.ttf"),
      });
  return (
    <SafeAreaView
    style={{
      flex:1,
      width:"100%",
      height: "100%",
    }}
  >  
  <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={colors.BACKGROUND}
      />
    <DynamicHeader navigation={navigation} title={"Agra"}/>
    <Tab.Navigator
      initialRouteName="Description"
      screenOptions={{
        
        tabBarActiveTintColor: colors.WHITE,
        tabBarInactiveTintColor:colors.WHITE,
        tabBarLabelStyle: { fontSize: 13,fontFamily:"ReadexMedium",letterSpacing:0.1 },
        tabBarStyle: { backgroundColor: colors.BACKGROUND, },
        tabBarIndicatorStyle:{borderBottomWidth:2,borderBottomColor:colors.WHITE,height:3,bottom:5},
        lazy:true,
        swipeEnabled:false,
        tabBarScrollEnabled:true,
        tabBarIndicatorContainerStyle:{marginHorizontal:25,paddingHorizontal:70},
        tabBarContentContainerStyle:{
            justifyContent: "center",
           alignItems:'center',
        }
      }}
      
    >
      <Tab.Screen
        name="Overview"
        component={OverView}
        options={{ tabBarLabel: 'Overview', }}
      />
      <Tab.Screen
        name="Hotels"
        component={Hotels}
        options={{ tabBarLabel: 'Hotel' }}
      />
      <Tab.Screen
        name="Restaurants"
        component={Restaurants}
        options={{ tabBarLabel: 'Restaurants' }}
      />
    </Tab.Navigator>
    </SafeAreaView>
  )

}

export default Description
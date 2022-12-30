import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import colors from './src/constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect, useDispatch } from "react-redux";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Authenticationstack from './src/stacks/Authenticationstack';
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeStack from './src/stacks/HomeStack';
import { useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { completeLogin } from './src/redux/actions/auth';
import Search from './src/screens/Search/Search';
import Plans from './src/screens/Plans/Plans';
import Calculator from './src/screens/Calculator/Calculator';
const Tab = createMaterialBottomTabNavigator();
SplashScreen.preventAutoHideAsync();
const AppNavigation = ({auth,loginWithToken}) => {
  let [fontsLoaded] = useFonts({
    ReadexBold: require("../tour-app/assets/fonts/ttf/ReadexPro-bold.ttf"),
    ReadexMedium: require("../tour-app/assets/fonts/ttf/ReadexPro-Medium.ttf"),
    ReadexLight: require("../tour-app/assets/fonts/ttf/ReadexPro-Light.ttf"),
  });
   const bottomNavigation =(
          <NavigationContainer theme={{colors:{background:colors.BACKGROUND}}}>
           <Tab.Navigator  
        initialRouteName="bottomNavigation"
        activeColor={colors.WHITE}
        shifting={false}
        inactiveColor={colors.GREY}
        barStyle={{
          backgroundColor:"#323232",
          padding: 2,
          justifyContent: "space-between",
          alignItems: "center",
        }}
        tabBarOptions={{
          safeAreaInsets: {
            bottom: 0,
          },
        }}>
           <Tab.Screen
          name="Explore"
          component={HomeStack}
          options={{
            tabBarLabel: "Explore",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home-outline" color={color} size={25} s />
            ),
          }}
        />
           <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="search" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Plan"
          component={Plans}
          options={{
            tabBarLabel: "Plan",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="heart-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Calculator"
          component={Calculator}
          options={{
            tabBarLabel: "Calculator",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="calculate" color={color} size={26} />
            ),
          }}
        />

           </Tab.Navigator>
          </NavigationContainer>
    );
    const [appReady, setAppReady] = React.useState(false);
    const dispatch = useDispatch();
    const checkLogin = async () => {
      AsyncStorage.getItem("access_token_tour").then((token) => {
        if (token) {
          console.log("----token found on reload", token);
          dispatch(completeLogin(token, true));
          setAppReady(true);
        } else {
          console.log("----token not found on reload");
          setAppReady(true);
        }
      });
    };
    if (!appReady) {
      return (
        <AppLoading
          startAsync={checkLogin}
          onFinish={() => setAppReady(true)}
          onError={console.warn}
        />
      );
    }
  return auth.stackMode === "default" && auth?.loggedIn && fontsLoaded ?(
    <>
    <StatusBar
       barStyle="light-content"
       backgroundColor={colors.STATUS}
       translucent
      />
       {bottomNavigation}
      
    </>
  ):(
    fontsLoaded && (
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.WHITE}
        />
        <NavigationContainer>
          <Authenticationstack />
        </NavigationContainer>
               {/* {bottomNavigation} */}

      </>
    )
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginWithToken: (token) => dispatch(loginWithToken(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);

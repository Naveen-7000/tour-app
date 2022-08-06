import React from 'react';
import {Text,StatusBar} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import colors from './src/constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import App from './App';
import { connect, useDispatch } from "react-redux";
import AppLoading from "expo-app-loading";
import { useFonts, Inter_900Black,Inter_400Regular,Inter_600SemiBold } from '@expo-google-fonts/inter';
import Authenticationstack from './src/stacks/Authenticationstack';
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from './src/screens/HomeScreen/HomeScreen';


const Tab = createMaterialBottomTabNavigator();

const AppNavigation = ({auth}) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

    const bottomNavigation =(
          <NavigationContainer>
           <Tab.Navigator  
        initialRouteName="Home"
        activeColor={colors.PRIMARY}
        shifting={false}
        inactiveColor={colors.BLACK}
        barStyle={{
          backgroundColor: "#fff",
          padding: 6,
          justifyContent: "space-between",
          alignItems: "center",
        }}
        tabBarOptions={{
          safeAreaInsets: {
            bottom: 0,
          },
        }}>
           <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={25} />
            ),
          }}
        />
           <Tab.Screen
          name="Explore"
          component={""}
          options={{
            tabBarLabel: "Explore",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="compass" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Contents"
          component={""}
          options={{
            tabBarLabel: "Content",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book" color={color} size={26} />
            ),
          }}
        />

           </Tab.Navigator>
          </NavigationContainer>
    );

    const [appReady, setAppReady] = React.useState(false);
    const dispatch = useDispatch();
    const checkLogin = async () => {
      AsyncStorage.getItem("access_token_bearlyfe").then((token) => {
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
  return auth?.loggedIn && fontsLoaded ?(
    <>
    <StatusBar
        translucent={true}
        hidden={false}
        barStyle="dark-content"
        backgroundColor={
          auth.stackMode === "default" ? colors.PRIMARY : colors.WHITE
        }
      />
      {bottomNavigation}
      
    </>
  ):(
    fontsLoaded && (
      <>
        <StatusBar
          translucent={true}
          hidden={false}
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

export default AppNavigation
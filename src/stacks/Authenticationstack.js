import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import colors from '../constants/colors';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
const Stack = createStackNavigator();

const Authenticationstack = () => {
  return (
<Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.YELLOW,
        },
        headerTintColor: colors.WHITE,
      }}
    >
     <Stack.Screen name="Login" component={HomeScreen} />

    </Stack.Navigator>
  )
}

export default Authenticationstack
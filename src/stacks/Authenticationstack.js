import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import colors from '../constants/colors';
import Login from '../screens/Authentication/Login';
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
     <Stack.Screen name="Login" component={Login} />

    </Stack.Navigator>
  )
}

export default Authenticationstack
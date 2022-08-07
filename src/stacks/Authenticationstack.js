import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import colors from '../constants/colors';
import Login from '../screens/Authentication/Login';
import Signup from '../screens/Authentication/SignUp';
import SignUp2 from '../screens/Authentication/SignUp2';
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
     <Stack.Screen name="SignUp1" component={Signup} />
     <Stack.Screen name="SignUp2" component={SignUp2} />

    </Stack.Navigator>
  )
}

export default Authenticationstack
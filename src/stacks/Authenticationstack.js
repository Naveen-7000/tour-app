import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import colors from '../constants/colors';
import Login from '../screens/Authentication/Login';
import LandingPage from '../screens/Authentication/LandingPage';
import Signup from '../screens/Authentication/SignUp';
import SignUpTwo from '../screens/Authentication/SignUpTwo';
const Stack = createStackNavigator();

const Authenticationstack = ({navigation}) => {
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
     <Stack.Screen name="LandingPage" component={LandingPage}  />
     <Stack.Screen name="Login" component={Login} />
     <Stack.Screen name="Register" component={Signup} />
     <Stack.Screen name="Register2" component={SignUpTwo} />
    </Stack.Navigator>
  )
}

export default Authenticationstack
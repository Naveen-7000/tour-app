import { createStackNavigator,HeaderStyleInterpolators , CardStyleInterpolators } from "@react-navigation/stack";
import colors from "../constants/colors";
import Profile from "../screens/ProfileScreen/Profile";
const Stack = createStackNavigator();

const ProfileStack = ({navigation}) => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: colors.YELLOW,
        },
        headerTintColor: colors.WHITE,
        // horizontal open screen
        cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
        HeaderStyleInterpolator:HeaderStyleInterpolators.forUIKit,
    }}
    >
    <Stack.Screen name="home" component={Profile}/>

    </Stack.Navigator>
  )
}

export default ProfileStack
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../constants/colors";
import Description from "../screens/Description/Description";
import HotelDetail from "../screens/Description/HotelDetail";
const Stack = createStackNavigator();

const DescriptionStack = ({navigation}) => {
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
    <Stack.Screen name="Home" component={Description}/>
    <Stack.Screen name="HotelDetails" component={HotelDetail}/>

    </Stack.Navigator>
  )
}

export default DescriptionStack
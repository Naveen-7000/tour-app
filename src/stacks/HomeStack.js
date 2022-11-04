import { createStackNavigator, HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack";
import colors from "../constants/colors";
import Description from "../screens/Description/Description";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import DescriptionStack from '../stacks/DescriptionStack';
const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
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
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="DescriptionStack" component={DescriptionStack}/>

    </Stack.Navigator>
  )
}

export default HomeStack
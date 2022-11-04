import React from "react";
import {
  View,
  Text,
  Pressable
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constants/colors";
import { useFonts } from "expo-font";
import Logo from '../../../assets/logoSvg.svg';

const LandingPage = ({navigation}) => {
  const [loaded] = useFonts({
    ReadexBold: require("../../../assets/fonts/ttf/ReadexPro-bold.ttf"),
    ReadexMedium: require("../../../assets/fonts/ttf/ReadexPro-Medium.ttf"),
    ReadexLight: require("../../../assets/fonts/ttf/ReadexPro-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.WHITE,
        height: "100%",
        flex:1,
      }}
    >
      <View style={{
        // flex:1,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        width:"100%",
        height:"100%",
      }}>
        <View style={{
            width:320,
            height:476,
            backgroundColor:"#ffff",
            justifyContent:"flex-start",
            alignItems:"flex-start",
        }}>
            <View>
            <Logo />
            <Text style={{
                paddingLeft:30,
                fontWeight:'600',
                fontFamily:"ReadexBold",
                fontSize:28,
                lineHeight:31,
                letterSpacing:0.5
                
            }}>
                Log in to start
                planning your trip.
            </Text>
            <Text style={{
                paddingTop:10,
                paddingLeft:30,
                fontWeight:'400',
                fontFamily:"ReadexLight",
                fontSize:16,
                lineHeight:20,
                letterSpacing:0.5
            }}>
                We can help you in developing pograms that allow tourists to explore new areas.
            </Text>
            </View>
            <View style={{
                width:"100%",
                padding:10,
                paddingLeft:20,
                paddingTop:20,
            }}>
                <Pressable
                style={{
                    width:"100%",
                    height:49,
                    borderColor:colors.BLACK,
                    borderWidth:2,
                    borderRadius:25,
                    justifyContent:'center',
                    alignItems:'center',
                }}
                  onPress={()=>navigation.navigate("Login")}>
                    <Text style={{
                        fontFamily:"ReadexBold",
                        fontSize:16,
                    }}>
                    Login
                    </Text>
                </Pressable>
            </View>
            <View style={{
                width:"100%",
                padding:10,
                paddingLeft:20,
            }}>
                <Pressable
                style={{
                    width:"100%",
                    height:49,
                    borderColor:colors.BLACK,
                    borderWidth:2,
                    borderRadius:25,
                    justifyContent:'center',
                    alignItems:'center',
                }}
                  onPress={()=>navigation.navigate("Register")}>
                    <Text style={{
                        fontFamily:"ReadexBold",
                        fontSize:16,
                    }}>
                    Register
                    </Text>
                </Pressable>
            </View>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default LandingPage;

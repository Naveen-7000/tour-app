import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constants/colors";

const Profile = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.WHITE,
        height: "100%",
      }}
    >
      <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:"100%",

      }}>
        <Text style={{
            padding:15,
            fontSize:22,
            fontWeight:600,
        }}>Profile</Text>
        
      </View>
    </SafeAreaView>
  );
};

export default Profile;

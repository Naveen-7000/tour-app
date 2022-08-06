import React from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../constants/colors";
import Feicons from "react-native-vector-icons/Feather";

const AuthHeader = () => {
  return (
    <View
      style={{
        backgroundColor: colors.WHITE,
        marginTop:StatusBar.currentHeight,
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor={colors.WHITE} />
      <View style={{
        paddingHorizontal:15,
        paddingVertical:10,
      }}>
        <Feicons name="chevron-left" size={24} color={colors.BLACK}  />
      </View>
    </View>
  );
};

export default AuthHeader;

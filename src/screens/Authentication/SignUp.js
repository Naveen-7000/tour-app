import React,{useState} from 'react';
import {View,Text,StatusBar,StyleSheet,} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../constants/colors';
const Signup = () => {
 
  return (
    <SafeAreaView style={{
        backgroundColor: colors.WHITE,
        height: "100%",
    }}>
    <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.PRIMARY}
      />
      <View style={{
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
      }}>
        <Text style={{
            fontSize:22,
            fontWeight:'700',
        }}>
            Signup
        </Text>
    </View>
  </SafeAreaView>
  )
}

export default Signup;

  
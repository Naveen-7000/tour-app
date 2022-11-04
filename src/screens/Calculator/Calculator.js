import React from 'react';
import { Text,View,Sty } from 'react-native';
import colors from '../../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const Calculator = () => {
  return (
    <SafeAreaView style={{
        width:"100%",
        height:"100%",
        backgroundColor:colors.BACKGROUND,

    }}>
        <View style={{
            width:"100%",
            height:"100%",
            justifyContent:"center",
            alignItems:"center",
        }}>
            <Text style={{
                color:colors.PRIMARY,
                fontSize:22,
                fontWeight:"700",
            }}>
                Soon available !
            </Text>
        </View>
    </SafeAreaView>
  )
}

export default Calculator
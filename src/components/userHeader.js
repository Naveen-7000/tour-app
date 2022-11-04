import React from 'react'
import {View,Text,StatusBar,StyleSheet, Pressable,} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import colors from '../constants/colors';
const UserHeader = () => {
  return (
    <View style={{
        width:"100%",
        alignItems:'flex-end',
        paddingVertical:15,
    }}>
        <Pressable style={{
            backgroundColor:colors.AVATAR,
            width:40,
            height:40,
            borderRadius:50,
            justifyContent:'center',
            alignItems:'center',
            borderColor:"#9bf754",
            borderWidth:2,
            elevation:2,
        }}
        >
         <MaterialIcons name="person" color={colors.WHITE} size={22} />
        </Pressable>
    </View>
  )
}

export default UserHeader;
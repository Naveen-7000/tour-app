import React,{useState} from 'react';
import {View,Text,StatusBar,StyleSheet,} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../constants/colors';
const HomeScreen = () => {
    const [count, setcount] = useState(0);



const increment=()=>{
  setcount(prev=>count+1);
}
let decrement=()=>{
  if(count!=0)
  setcount(prev=>count-1);
}
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
            dafbwabfabfa
        </Text>
    </View>
  </SafeAreaView>
  )
}

export default HomeScreen;

  
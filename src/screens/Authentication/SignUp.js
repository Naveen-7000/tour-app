import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "../../components/AuthHeader";
import colors from "../../constants/colors";
import { useFonts } from "expo-font";
import { Form, Formik, useFormikContext } from "formik";
import { Button, TextInput } from "react-native-paper";
import * as Yup from "yup";
const Signup = () => {
    
  const [loaded] = useFonts({
    ReadexBold: require("../../../assets/fonts/ttf/ReadexPro-bold.ttf"),
    ReadexMedium: require("../../../assets/fonts/ttf/ReadexPro-Medium.ttf"),
    ReadexLight: require("../../../assets/fonts/ttf/ReadexPro-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const intialValue = {
    fullName: "",
    phoneNumber: "",
  };
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const UserSchema = Yup.object().shape({
    fullName: Yup.string().max(255).required("Full name is required"),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  });
  const handleSubmit = (values) => {
    let finalValue ={
      fullName:values.fullName,
      phoneNumber:values.phoneNumber
    }
    return console.log(finalValue);
  };
  return (
    <SafeAreaView style={{
        backgroundColor: colors.WHITE,
        height: "100%",
    }}>
    <AuthHeader/>
    <ScrollView>

    <View>
    <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 50,
          }}
        >
          <View
            style={{
              width: 150,
              height: 150,
            }}
          >
            <Image source={require("../../../assets/hoemlogo2.png")} />
            

          </View>
        </View>
    <Formik
            initialValues={intialValue}
            validationSchema={UserSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ handleChange, values, errors, touched,isValid,dirty,handleSubmit }) => (
              <KeyboardAvoidingView behavior="padding">
                <View
                  style={{
                    paddingHorizontal: 10,
                  }}
                >
                  <TextInput
                    style={{ width: '95%', height: 47, marginTop: 10, backgroundColor: colors.WHITE, borderColor: '#fff' }}
                    mode="outlined"
                    label="Full Name"
                    placeholder="Enter your full name"
                    onChangeText={handleChange("fullName")}
                    activeOutlineColor={colors.BLACK}
                    outlineColor={colors.BLACK}   
                    error={Boolean(touched.fullName && errors.fullName)}              
                  />
                  {errors.fullName && (
                    <Text style={{color:'red',fontSize:12,paddingLeft:3,paddingTop:3}}>{errors.fullName}</Text>
                  )}
                  <TextInput
                    style={{ width: '95%', height: 47, marginTop: 20, backgroundColor: colors.WHITE, borderColor: '#fff' }}
                    mode="outlined"
                    label="Phone number"
                    placeholder="Enter your phone number"
                    onChangeText={handleChange("phoneNumber")}
                    activeOutlineColor={colors.BLACK}
                    outlineColor={colors.BLACK}
                    error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                                       
                  />
                  {errors.phoneNumber && (
                    <Text style={{color:'red',fontSize:12,paddingLeft:3,paddingTop:3}}>{errors.phoneNumber}</Text>
                  )}
                  <Button labelStyle={{color:colors.WHITE}} style={{
                    backgroundColor:colors.BLACK,
                    marginTop:20,
                    height:47,
                    alignItems:'center',
                    justifyContent:'center',
                    width:"95%",
                  }}
                  disabled={!isValid || !dirty}
                  onPress={handleSubmit}
                  >Next</Button>
                </View>
              </KeyboardAvoidingView>
            )}
          </Formik>
     </View>
     </ScrollView>
  </SafeAreaView>
  )
}

export default Signup;

  
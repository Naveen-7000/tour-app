import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constants/colors";
import AuthHeader from "../../components/AuthHeader";
import { useFonts } from "expo-font";
import { Form, Formik, useFormikContext } from "formik";
import { Button, TextInput } from "react-native-paper";
import * as Yup from "yup";
import Logo from '../../../assets/logoSvg.svg';
const SignUpTwo = ({ navigation,route }) => {
    const {fullname,phone} = route.params;
  const [loaded] = useFonts({
    ReadexBold: require("../../../assets/fonts/ttf/ReadexPro-bold.ttf"),
    ReadexMedium: require("../../../assets/fonts/ttf/ReadexPro-Medium.ttf"),
    ReadexLight: require("../../../assets/fonts/ttf/ReadexPro-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const intialValue = {
    email: "",
    password: "",
  };

  const UserSchema = Yup.object().shape({
    email: Yup.string().email('Email must be valid').max(255).required("Email is required"),
    password: Yup.string().min(8, ({ min }) => `Password must be at least ${min} characters`).required("Password is required"),
  });

  const handleRegister = (values) => {
    let finalValue ={
        fullname:fullname,
        phone:phone,
        email:values.email,
        password:values.password
      }
    return console.log(finalValue);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.WHITE,
        height: "100%",
      }}
    >
      <AuthHeader navigation={navigation} />
      <ScrollView>
      <View
        style={{
          paddingHorizontal: 15,
          paddingBottom:10,
        }}
      >
        <View
          style={{
            flex:1,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 50,
          }}
        >
          <View>
            <Logo/>
          </View>
        </View>
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal:10,
          }}
        >
          <Text
            style={{
              fontSize: 32,
              fontWeight: "600",
              fontFamily: "ReadexMedium",
              lineHeight: 35,
            }}
          >
            Register
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              lineHeight: 12,
              color: colors.GREY,
              letterSpacing: 0.5,
              paddingVertical: 5,
            }}
          >
            Register to continue.
          </Text>
        </View>
        <View>
          <Formik
            initialValues={intialValue}
            validationSchema={UserSchema}
            onSubmit={(values) => handleRegister(values)}
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
                    label="Email ID"
                    placeholder="Enter your email ID"
                    onChangeText={handleChange("email")}
                    activeOutlineColor={colors.BLACK}
                    outlineColor={colors.BLACK}   
                    error={Boolean(touched.email && errors.email)}              
                  />
                  {errors.email && (
                    <Text style={{color:'red',fontSize:12,paddingLeft:3,paddingTop:3}}>{errors.email}</Text>
                  )}
                  <TextInput
                    style={{ width: '95%', height: 47, marginTop: 20, backgroundColor: colors.WHITE, borderColor: '#fff' }}
                    mode="outlined"
                    label="Password"
                    placeholder="Enter your password"
                    onChangeText={handleChange("password")}
                    activeOutlineColor={colors.BLACK}
                    outlineColor={colors.BLACK}
                    error={Boolean(touched.password && errors.password)}
                                       
                  />
                  {errors.password && (
                    <Text style={{color:'red',fontSize:12,paddingLeft:3,paddingTop:3}}>{errors.password}</Text>
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
                  >Submit</Button>
                </View>
              </KeyboardAvoidingView>
            )}
          </Formik>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpTwo;

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
const Signup = ({ navigation }) => {
  const [loaded] = useFonts({
    ReadexBold: require("../../../assets/fonts/ttf/ReadexPro-bold.ttf"),
    ReadexMedium: require("../../../assets/fonts/ttf/ReadexPro-Medium.ttf"),
    ReadexLight: require("../../../assets/fonts/ttf/ReadexPro-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const intialValue = {
    fullname: "",
    phone: "",
  };

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const UserSchema = Yup.object().shape({
    fullname: Yup.string().required("Full name is required"),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  });

  const handleRegister = (values) => {
    let final = {
      fullname:values.fullname,
      phone:values.phone
    }
    navigation.navigate("Register2",final);
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
            paddingBottom: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 50,
            }}
          >
            <View>
              <Logo />
            </View>
          </View>
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 10,
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
              {({
                handleChange,
                values,
                errors,
                touched,
                isValid,
                dirty,
                handleSubmit,
              }) => {
                console.log(errors,values);
                return(
                <KeyboardAvoidingView behavior="padding">
                  <View
                    style={{
                      paddingHorizontal: 10,
                    }}
                  >
                    <TextInput
                      style={{
                        width: "95%",
                        height: 47,
                        marginTop: 10,
                        backgroundColor: colors.WHITE,
                        borderColor: "#fff",
                      }}
                      mode="outlined"
                      label="Full Name"
                      placeholder="Enter your full name"
                      onChangeText={handleChange("fullname")}
                      activeOutlineColor={colors.BLACK}
                      outlineColor={colors.BLACK}
                      error={Boolean(touched.fullname && errors.fullname)}
                    />
                    {errors.fullname && (
                      <Text
                        style={{
                          color: "red",
                          fontSize: 12,
                          paddingLeft: 3,
                          paddingTop: 3,
                        }}
                      >
                        {errors.fullname}
                      </Text>
                    )}
                    <TextInput
                      style={{
                        width: "95%",
                        height: 47,
                        marginTop: 20,
                        backgroundColor: colors.WHITE,
                        borderColor: "#fff",
                      }}
                      mode="outlined"
                      label="Contact Number"
                      placeholder="Enter your phone number"
                      onChangeText={handleChange("phone")}
                      activeOutlineColor={colors.BLACK}
                      outlineColor={colors.BLACK}
                      error={Boolean(touched.phone && errors.phone)}
                    />
                    {errors.phone && (
                      <Text
                        style={{
                          color: "red",
                          fontSize: 12,
                          paddingLeft: 3,
                          paddingTop: 3,
                        }}
                      >
                        {errors.phone}
                      </Text>
                    )}
                    <Button
                      labelStyle={{ color: colors.WHITE }}
                      style={{
                        backgroundColor: colors.BLACK,
                        marginTop: 20,
                        height: 47,
                        alignItems: "center",
                        justifyContent: "center",
                        width: "95%",
                      }}
                      disabled={!isValid || !dirty}
                      onPress={handleSubmit}
                    >
                      Next
                    </Button>
                  </View>
                </KeyboardAvoidingView>
              )}}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

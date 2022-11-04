import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constants/colors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/auth";
import { useFonts } from "expo-font";
import UserHeader from "../../components/userHeader";
import Button from "../../components/button";
import BookCards from "../../components/BookCards";
import OrderCards from "../../components/OrderCards";
const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [loaded] = useFonts({
    ReadexBold: require("../../../assets/fonts/ttf/ReadexPro-bold.ttf"),
    ReadexMedium: require("../../../assets/fonts/ttf/ReadexPro-Medium.ttf"),
    ReadexLight: require("../../../assets/fonts/ttf/ReadexPro-Light.ttf"),
  });
  return (
    <SafeAreaView
      style={{
        flex:1,
        height: "100%",
      }}
    >
      <ScrollView
        style={{
          height: "100%",
        }}
        contentContainerStyle={{flexGrow: 1,paddingBottom:40}}
      >
        <View
          style={{
            width: "100%",
            height: 350,
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
            source={require("../../../assets/nightBearro.jpg")}
            blurRadius={1}
          />
          <View
            style={{
              paddingHorizontal: 25,
            }}
          >
            <UserHeader />
            <View
              style={{
                width: "100%",
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 28,
                  fontFamily: "ReadexBold",
                  color: colors.WHITE,
                  lineHeight: 29,
                  elevation: 5,
                }}
              >
                Explore
              </Text>
            </View>
            <View
              style={{
                paddingVertical: 14,
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Button title={"Hotels"} />
              <Button title={"Restaurant"} />
            </View>
          </View>
        </View>
        {/* Like */}
        <View style={{}}>
          <View
            style={{
              width: "100%",
              paddingTop: 25,
              paddingBottom: 15,
              paddingHorizontal: 30,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontFamily: "ReadexMedium",
                color: colors.WHITE,
                lineHeight: 26,
              }}
            >
              You might like these
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "ReadexMedium",
                color: colors.WHITE,
                lineHeight: 16,
                letterSpacing: 1.2,
                paddingVertical: 10,
              }}
            >
              More things to do in Antalya
            </Text>
          </View>
          <View
            style={{
              paddingLeft: 30,
              width: "100%",
            }}
          >
            <ScrollView horizontal >
             {/* place cards */}
              <Pressable >
                <OrderCards />
              </Pressable>
              <Pressable>
                <OrderCards />
              </Pressable>
              <Pressable>
                <OrderCards />
              </Pressable>
            </ScrollView>
          </View>
        </View>
        {/* Escape */}
        <View>
          <View
            style={{
              width: "100%",
              paddingVertical: 15,
              paddingHorizontal: 30,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontFamily: "ReadexMedium",
                color: colors.WHITE,
                lineHeight: 26,
              }}
            >
              Plan your next escape
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "ReadexMedium",
                color: colors.WHITE,
                lineHeight: 16,
                letterSpacing: 1.2,
                paddingVertical: 10,
              }}
            >
              Family-friendly spots to explore
            </Text>
          </View>
          <View
            style={{
              paddingLeft: 30,
              width: "100%",
            }}
          >
            <ScrollView horizontal>
              {/* City card */}
              <Pressable onPress={()=>navigation.navigate("DescriptionStack")}>
                <BookCards />
              </Pressable>
              <Pressable onPress={()=>navigation.navigate("DescriptionStack")}>
                <BookCards />
              </Pressable>
              <Pressable onPress={()=>navigation.navigate("DescriptionStack")}>
                <BookCards />
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import colors from "../../constants/colors";
import { SliderBox } from "react-native-image-slider-box";
import DynamicHeader from "../../components/DynamicHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import { Rating, AirbnbRating } from "react-native-ratings";

const HotelDetail = ({ navigation }) => {
  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
  }
  function ratingCompleted(rating) {
    console.log("Rating is: " + rating);
  }

  const [loaded] = useFonts({
    ReadexBold: require("../../../assets/fonts/ttf/ReadexPro-bold.ttf"),
    ReadexMedium: require("../../../assets/fonts/ttf/ReadexPro-Medium.ttf"),
    ReadexLight: require("../../../assets/fonts/ttf/ReadexPro-Light.ttf"),
  });
  const [image, setImage] = useState({
    image: [
      "https://source.unsplash.com/1024x768/?taj-hotel",
      "https://source.unsplash.com/1024x768/?taj-hotel1",
      "https://source.unsplash.com/1024x768/?taj-hotel",
    ],
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor={colors.BACKGROUND}
      />
      <DynamicHeader navigation={navigation} title={"Taj Hotel"} />
      <ScrollView
      // contentContainerStyle={{flexGrow: 1,paddingBottom:40,height:"100%"}}
      >
        <SliderBox
          dotColor={colors.GREY}
          autoplay={true}
          circleLoop={true}
          images={image.image}
        />
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 28,
                fontFamily: "ReadexBold",
                color: colors.WHITE,
                lineHeight:28,
              }}
            >
              Taj Hotel
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "ReadexMedium",
                color: colors.WHITE,
                lineHeight:24,
                letterSpacing:0.8
              }}
            >
              Rating : 4/5
            </Text>
           
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HotelDetail;

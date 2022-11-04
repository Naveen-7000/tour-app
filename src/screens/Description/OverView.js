import React from "react";
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
import { useState } from "react";
import PlaceCard from "../../components/PlaceCard";
import HotelCard from "../../components/HotelCard";
import RestroCard from "../../components/RestroCard";
import Feicons from "react-native-vector-icons/Feather";


const OverView = ({ navigation }) => {
  
  const [image, setImage] = useState({
    image: [
      "https://source.unsplash.com/1024x768/?taj-mahal",
      "https://source.unsplash.com/1024x768/?tak-mahal",
      "https://source.unsplash.com/1024x768/?tak-mahal",
      "https://source.unsplash.com/1024x768/?tak-mahal",
      "https://source.unsplash.com/1024x768/?sea",
      "https://source.unsplash.com/1024x768/?holi",
    ],
  });
  const [loaded] = useFonts({
    ReadexBold: require("../../../assets/fonts/ttf/ReadexPro-bold.ttf"),
    ReadexMedium: require("../../../assets/fonts/ttf/ReadexPro-Medium.ttf"),
    ReadexLight: require("../../../assets/fonts/ttf/ReadexPro-Light.ttf"),
  });
  return (
    <ScrollView
    contentContainerStyle={{flexGrow: 1,paddingBottom:40,}}

    >
   
        <SliderBox
          dotColor={colors.GREY}
          autoplay={true}
          circleLoop={true}
          images={image.image}
        />
        <View  style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}>
        {/* Description of city */}
        <View>
          <Text
            style={{
              fontSize: 26,
              fontFamily: "ReadexBold",
              color: colors.WHITE,
            }}
          >
            Agra
          </Text>
         
          <Text
            style={{
              fontSize: 16,
              fontFamily: "ReadexMedium",
              color: colors.WHITE,
              letterSpacing: 1.1,
              lineHeight: 20,
              fontStyle:"italic",
            }}
          >
            Where better to go for a romantic holiday than to the great
            testament of love, the Taj Mahal? buld by the grieving Mughal
            Emperor Shah Jahan.
          </Text>
        </View>
        <Pressable style={{
            marginVertical:15,
            backgroundColor:colors.WHITE,
            width:130,
            height:40,
            borderRadius:20,
            justifyContent:'space-evenly',
            alignItems:'center',
            flexDirection:'row',
          }}>
             <Feicons size={20} name={"map-pin"} 
             color={colors.BACKGROUND}
             />
             <Text  style={{
              fontSize: 14,
              fontFamily: "ReadexBold",
              color: "#000",
            }}>
              View Map
             </Text>
          </Pressable>
        {/* Do ,Eat and stay places */}
        <View  style={{
            paddingVertical: 15,
          }}>
            {/* Tags */}
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection:'row',
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
              Do
            </Text>
            <Pressable>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "ReadexMedium",
                  color: colors.WHITE,
                  lineHeight: 18,
                  borderBottomColor:colors.WHITE,
                  borderBottomWidth:1,
                }}
              >
                See all
              </Text>
            </Pressable>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "ReadexMedium",
              color: colors.OFFWHITE,
              lineHeight: 18,
              letterSpacing: 1,
              paddingVertical: 5,
            }}
          >
            Places to see,ways to wonder,and signature experiences.
          </Text>
          {/*Places Cards */}
          <View style={{
            paddingVertical:15,
          }}>
            <ScrollView horizontal contentContainerStyle={{
              paddingBottom:40,
            }}>
           <Pressable>
            <PlaceCard navigation={navigation} />
           </Pressable>
           <Pressable>
            <PlaceCard navigation={navigation} />
           </Pressable>
            </ScrollView>
          </View>
        </View>
        {/* Stay */}
        <View  style={{
            paddingVertical: 10,
          }}>
            {/* Tags */}
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection:'row',
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
              Stay
            </Text>
            <Pressable>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "ReadexMedium",
                  color: colors.WHITE,
                  lineHeight: 18,
                  borderBottomColor:colors.WHITE,
                  borderBottomWidth:1,
                }}
              >
                See all
              </Text>
            </Pressable>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "ReadexMedium",
              color: colors.OFFWHITE,
              lineHeight: 18,
              letterSpacing: 1,
              paddingVertical: 5,
            }}
          >
            A mix of the charming,modern,and tried and true.
          </Text>
          {/*Hotels Cards */}
          <View style={{
            paddingVertical:15,
          }}>
            <ScrollView horizontal contentContainerStyle={{
              paddingBottom:40,
            }}>
           <Pressable>
            <HotelCard navigation={navigation} />
           </Pressable>
           <Pressable>
            <HotelCard navigation={navigation} />
           </Pressable>
            </ScrollView>
          </View>
        </View>
        {/* Eat */}
        <View  style={{
            paddingVertical: 10,
          }}>
            {/* Tags */}
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection:'row',
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
              Eat
            </Text>
            <Pressable>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "ReadexMedium",
                  color: colors.WHITE,
                  lineHeight: 18,
                  borderBottomColor:colors.WHITE,
                  borderBottomWidth:1,
                }}
              >
                See all
              </Text>
            </Pressable>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "ReadexMedium",
              color: colors.OFFWHITE,
              lineHeight: 18,
              letterSpacing: 1,
              paddingVertical: 5,
            }}
          >
           Can't-miss spots to dine,drink,and feast.
          </Text>
          {/*Hotels Cards */}
          <View style={{
            paddingVertical:15,
          }}>
            <ScrollView horizontal contentContainerStyle={{
              paddingBottom:40,
            }}>
           <Pressable>
            <RestroCard navigation={navigation} />
           </Pressable>
           <Pressable>
            <RestroCard navigation={navigation} />
           </Pressable>
            </ScrollView>
          </View>
        </View>
        </View>
    </ScrollView>
  );
};

export default OverView;

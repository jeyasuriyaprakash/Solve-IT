import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
// import { useFonts } from 'expo-font';

import { FontAwesome } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

const data = [
  { id: 1, text: "Slide 1" },
  { id: 2, text: "Slide 2" },
  { id: 3, text: "Slide 3" },
  { id: 4, text: "Slide 4" },
];

export default function Firstpage({ navigation }) {
  // const [loaded] = useFonts({
  //   Montserrat: require('../assets/DM_Sans/DMSans-Regular.ttf'),
  // });

  // if (!loaded) {
  //   return null;
  // }

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePageChange = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const renderSlide = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image
          style={{ resizeMode: "contain", width: "100%" }}
          source={require("../assets/1img.png")}
        />
        <Image
          style={{ flex: 1, resizeMode: "contain" }}
          source={require("../assets/2img.png")}
        />
        <Text style={styles.slideText}>An IT Troubleshooting Service</Text>
        <Text style={styles.slideText1}>
          Lorem ipsum dolor sit amet, consectetur {"\n"}
          adipiscing elit, sed do eiusmod tempor incididunt {"\n"}
          ut labore et dolore magna aliqua
        </Text>
        {/* <Text style={styles.slideText}>{item.text}</Text> */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.fimg}></View>

      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderSlide}
        onMomentumScrollEnd={(event) =>
          handlePageChange(
            Math.round(event.nativeEvent.contentOffset.x / windowWidth)
          )
        }
      />
      <View style={styles.indicatorContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === activeIndex && styles.activeIndicator,
            ]}
          />
        ))}
      </View>

      <View
        style={{
          margin: 30,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Secondpage")}>
          <Text style={{ fontSize: 20, color: "#fff", fontWeight: "700" }}>
            Skip
          </Text>
        </TouchableOpacity>
        {/* <View style={{position:'relative',transform:[{rotate:'0deg'}]}}> */}
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            height: 36,
            width: 36,
            borderRadius: 8,
            transform: [{ rotate: "45deg" }],
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Secondpage")}
        >
          <FontAwesome
            name="angle-double-right"
            size={25}
            color={"#FF9800"}
            style={{ transform: [{ rotate: "315deg" }] }}
          />
        </TouchableOpacity>
        {/* </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#263A96",
    // fontFamily:'DMSans-Regular'
  },
  fimg: {
    justifyContent: "flex-start",
  },

  slide: {
    width: windowWidth,

    alignItems: "center",
    // backgroundColor: '#ccc',
    marginTop: 0,
  },
  slideText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",

    marginTop: 10,
  },
  slideText1: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 10,
  },

  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 0,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    margin: 5,
  },
  activeIndicator: {
    backgroundColor: "#FF9800",
  },
});

import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native";

export default function Thirdpage({ navigation }) {


  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: "#fafafa" }}>
      <Ionicons
        style={{ marginTop: 40, marginLeft: 15 }}
        name="chevron-back-outline"
        size={30}
        color={"#263A96"}
        onPress={() => navigation.navigate("Secondpage")}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ margin: 30 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "#292D3D",
              marginBottom: 10,
            }}
          >
            Tell us about you
          </Text>
          <Text
            style={{
              color: "#919191",
              fontWeight: "500",
              fontSize: 16,
              marginLeft: 10,
            }}
          >
            Let us know about you. Please{"\n"}
            select one of the option from below.
          </Text>
        </View>

        <View style={{ margin: 30 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "400",
              color: "#353948",
              marginBottom: 0,
            }}
          >
            You are a
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            margin: 0,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
          //  onPress={() => navigation.navigate("DashboardSpecial")}
            style={{
              borderColor: selectedTab == 0 ? "#263a96":"#AACBFF",
              borderWidth: 2,
              borderRadius: 5,
              height: 194,
              width: 122,
              alignItems: "center",
              justifyContent: "flex-end",
            
            }} onPress={() => {setSelectedTab(0);  }} 
          
          >
            <Image 
             
              style={{ marginBottom: 20 }}
              source={require("../assets/logimg.png")}
            />

            <TouchableWithoutFeedback  
            onPress={() => navigation.navigate("Navebar")}
            >
              <View
                style={{
                  alignItems: "center",
                  backgroundColor:selectedTab == 0 ? "#263a96":"#AACBFF",
                  padding: 10,
                  borderBottomLeftRadius: 2,
                  borderBottomRightRadius: 2,
                  width: "100%",
                }}  onPress={() => {setSelectedTab(0);}}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "500",
                  }} onPress={() => {setSelectedTab(0);}}
                >
                  Specialist User
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderColor:  selectedTab == 1 ? "#263a96":"#AACBFF",
              borderWidth: 2,
              borderRadius: 5,
              height: 194,
              width: 122,
              alignItems: "center",
              justifyContent: "flex-end",
            }} onPress={() => {setSelectedTab(1);}}
          >
            <Image
              style={{ marginBottom: 20 }}
              source={require("../assets/logimg.png")}
            />

            <TouchableWithoutFeedback 
             onPress={() => navigation.navigate("DashboardCustomer")}
            >
              <View
                style={{
                  alignItems: "center",
                  backgroundColor:selectedTab == 1 ? "#263a96":"#AACBFF",
                  padding: 10,
                  borderBottomLeftRadius: 2,
                  borderBottomRightRadius: 2,
                  width: "100%",
                }} onPress={() => {setSelectedTab(1);}}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: "500",
                  }} onPress={() => {setSelectedTab(1);}}
                >
                  Customer / User
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </View>

        <View style={{ margin: 20, marginTop: "50%" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ProfileSetting")}
          >
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "500" }}>
              {" "}
              Next{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    height: 38,

    // // borderWidth: 1,
    borderRadius: 25,
    elevation: 5,
    shadowColor: "#000",
    // // color: '#fff',
    backgroundColor: "#263A96",
    // marginTop: 0,
    // marginBottom:0,
    // flexDirection: 'row',

    justifyContent: "center",
    // margin: 0,
  },
});

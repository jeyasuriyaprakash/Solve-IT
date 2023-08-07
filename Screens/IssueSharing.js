import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function IssueSharing({ navigation }) {
  return (
    <View style={styles.container}>
      <View>

        <View 
         style={{
          flexDirection: "row",
          alignItems: "center",
          margin: 20,
          marginTop: "10%",
        }}  onPress={() => navigation.navigate("DashboardCustomer")}
        >
        <Ionicons name="chevron-back-outline" size={20} color={"#263A96"}
       
        />
        <Text
          style={{
            color: "#263a96",
            fontSize: 14,
            fontWeight: "500",
            marginLeft: 5,
          }}
        >
          back
        </Text>
        </View>
      </View>

      <View style={styles.main}>
        <View style={{}}>
          <Image
            style={{ height: 85, width: 85 }}
            source={require("../assets/thankful1.png")}
          />
          {/* <Ionicons name='chatbox-ellipses-outline' size={80} color={'#263A96'} /> */}
        </View>
        <View style={{ margin: 20 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: "#373B4A",
              lineHeight: 40,
            }}
          >
            Thank you for sharing your{" "}
            <Text style={{ color: "#FF9800", fontSize: 20, fontWeight: 500 }}>
              {" "}
              issue{" "}
            </Text>{" "}
            with us.
          </Text>
        </View>
        <View>
          <Image
            style={{ height: 163, width: 163 }}
            source={require("../assets/gears_360.gif")}
          />
        </View>

        <View style={{ margin: 20 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: "#373B4A",
              lineHeight: 40,
            }}
          >
            Please hold on...
          </Text>

          <Text
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: "#373B4A",
              lineHeight: 26,
              marginTop: 20,
            }}
          >
            We are finding a{" "}
            <Text style={{ color: "#FF9800", fontSize: 20, fontWeight: 500 }}>
              {" "}
              specialist{" "}
            </Text>
            for you to fix the issue ...
          </Text>
        </View>

        {/* <TouchableOpacity style={{height:38,width:295,backgroundColor:'#263A96',borderRadius:18,justifyContent:"center",alignItems:'center'}}>
            <Text style={{fontSize:14,fontWeight:'500',color:'#ffffff'}}>Ok</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    // justifyContent:'space-evenly',
    // alignItems:'center',
  },
  main: {
    margin: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },
});

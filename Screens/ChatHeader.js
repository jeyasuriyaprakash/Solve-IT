import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function ChatHeader({navigation}) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#ffffff",
          height:100,
          width: "100%",
          paddingTop: 30,
          paddingLeft: 20,
          paddingRight: 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <View >
          <Ionicons name="arrow-back-outline" size={20} color={"#16171A"}  />
        </View>
        
        <View style={{marginLeft:10}}>
          <Image
            style={{ borderRadius: 50, height: 40, width: 40 }}
            source={require("../assets/profile4.jpg")}
          />
        </View>
        <View style={{marginLeft:10}}>
          <Text style={{fontSize:17,fontWeight:'500',color:'#263a96'}}>Jeyaprakash</Text>
          <Text style={{fontSize:11,fontWeight:'500',color:'#5F5F5F'}}>Last seen today at 12:10 PM</Text>
        </View>
        </View>
        <View>
          <Ionicons name="calendar-outline" size={25} color={"#263a96"} />
        </View>
      </View>
    </View>
  );
}

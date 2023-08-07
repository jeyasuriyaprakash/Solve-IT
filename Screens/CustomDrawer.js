import { View, Text, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

export default function CustomDrawer(props,{navigator}) {
  return (
    <View style={{ flex: 1, backgroundColor: "#263a96" }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{}}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginBottom:30,
          }}
        >
          <Image
            source={require("../assets/Avather1.jpg")}
            style={{
              height: 43,
              width: 43,
              borderRadius: 50,
            //   borderWidth: 2,
            //   borderColor: "#fff",
            }}
          />
          <Text style={{ color: "#ffffff", fontSize: 14, fontWeight: "700" }}>
            Welcome, King!
          </Text>
          <Ionicons name="menu" size={25} color={"#ffffff"}  />
        </View>
        <View style={{}}>
        <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding:20}}>
        <Text style={{fontSize:15,fontWeight:'400',color:'#ffffff'}}>Version 1.0</Text>
      </View>
    </View>
  );
}

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Card } from "react-native-paper";

export default function Cardpage({navigation}) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <TouchableOpacity onPress={()=> navigation.navigate('PasswordLink') }
          style={{
            backgroundColor: "#4A89DC",
            height: 83,
            width: 93,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 6,
          }}
        >
          <Text style={{ color: "#FFF", fontSize: 12, fontWeight: "500" }}>
            Closed {"\n"}Contracts
          </Text>
          <Text style={{ color: "#fff", fontSize: 23, fontWeight: "500" }}>
            20
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#ff9800",
            height: 83,
            width: 93,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 6,
          }}
        >
          <Text style={{ color: "#FFF", fontSize: 12, fontWeight: "500" }}>
            Ongoing {"\n"}Contracts
          </Text>
          <Text style={{ color: "#fff", fontSize: 23, fontWeight: "500" }}>
            10
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#263A96",
            height: 83,
            width: 93,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 6,
          }}
        >
          <Text style={{ color: "#FFF", fontSize: 12, fontWeight: "500" }}>
            Canceled {"\n"}Contracts
          </Text>
          <Text style={{ color: "#fff", fontSize: 23, fontWeight: "500" }}>
            05
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

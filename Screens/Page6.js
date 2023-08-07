import {
  View,
  Text,
  styles,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function Page6({ navigation }) {
  return (
    <View style={Styles.container}>
      
        <Card
          style={{
            backgroundColor: "#263A96",
            height: 232,
            width: "100%",
            borderBottomLeftRadius: 92,
            borderRadius: 0,
          }}
        >
          <Ionicons
            style={{
              marginTop: 40,
              marginLeft: 15,
              position: "absolute",
              height: 25,
              width: 25,
            }}
            name="chevron-back-outline"
            size={30}
            color={"#fff"}
            onPress={() => navigation.navigate("Forthpage")}
          />
          <View style={{ margin: 38, marginLeft: 47 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image source={require("../assets/logocard.png")} />
              <Text style={{ color: "#fff", fontSize: 14, fontWeight: "500" }}
               onPress={() => navigation.navigate("Secondpage")}
              >
                Login
              </Text>
            </View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: "#fff",
                marginTop: 20,
                marginLeft: 10,
              }}
            >
              50% Complete
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "#fff",
                marginTop: 20,
                marginLeft: 10
              }}
            >
              Contact Info
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <View
                style={{
                  height: 8,
                  width: 80,
                  backgroundColor: "#FF9800",
                  borderRadius: 6,
                  margin: 5,
                }}
              ></View>
              <View
                style={{
                  height: 8,
                  width: 80,
                  backgroundColor: "#FF9800",
                  borderRadius: 6,
                  margin: 5,
                }}
              ></View>
              <View
                style={{
                  height: 8,
                  width: 80,
                  backgroundColor: "#FFf",
                  borderRadius: 6,
                  margin: 5,
                }}
              ></View>
            </View>
          </View>
        </Card>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ margin: 20 }}>
            <Text style={{ color: "#292D3D", fontWeight: "700", fontSize: 20 }}>
              Sign Up
            </Text>
            <Text style={{ fontWeight: "500", color: "#919191", fontSize: 16,marginTop:10, }}>
              Create an account
            </Text>
          
            <View style={{marginTop:20}}>
            <Text style={Styles.text}>Mobile No</Text>
            </View>
            <TextInput
              style={{
                height: 38,
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: 18,
                borderWidth: 1,
                borderColor: "#DADADA",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
               
                textAlign: "left",
                paddingLeft: 20,
                color:'#373B4A'
              }}
              placeholder={"+91  7677739283"}
              
              keyboardType={"number-pad"}
            > +91  <Ionicons
            name="chevron-down-outline"
            size={20}
            color={"#919191"}
            style={{}}
          /></TextInput>


            <Text style={Styles.text}>Email ID</Text>

            <TextInput
              style={{
                height: 38,
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: 18,
                borderWidth: 1,
                borderColor: "#DADADA",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                // marginBottom: 10,
                paddingLeft: 20,
              }}
              placeholder={"abcd@gmail.com"}
            ></TextInput>
            <Text style={Styles.text}>Street /Apartment</Text>

            <TextInput
              style={{
                height: 38,
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: 18,
                borderWidth: 1,
                borderColor: "#DADADA",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                // marginBottom: 10,
                paddingLeft: 20,
              }}
              placeholder={"xxxxxxxxx"}
            ></TextInput>
            <Text style={Styles.text}>Locality /Landmark</Text>

            <TextInput
              style={{
                height: 38,
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: 18,
                borderWidth: 1,
                borderColor: "#DADADA",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                // marginBottom: 10,
                paddingLeft: 20,
              }}
              placeholder={"xxxxxxxxx"}
            ></TextInput>
            <Text style={Styles.text}>City</Text>

            <View style={Styles.wrapperInput}>
              <TextInput style={Styles.input} placeholder="xxxxxxx" />

              <Ionicons
                name="chevron-down-outline"
                size={20}
                color={"#919191"}
                style={{ marginRight: 10 }}
              />
            </View>

            <Text style={Styles.text}>State</Text>

            <View style={Styles.wrapperInput}>
              <TextInput style={Styles.input} placeholder="xxxxxxx" />

              <Ionicons
                name="chevron-down-outline"
                size={20}
                color={"#919191"}
                style={{ marginRight: 10 }}
              />
            </View>
            <Text style={Styles.text}>Country</Text>

            <View style={Styles.wrapperInput}>
              <TextInput style={Styles.input} placeholder="xxxxxxx" />

              <Ionicons
                name="chevron-down-outline"
                size={20}
                color={"#919191"}
                style={{ marginRight: 10 }}
              />
            </View>
            <Text style={Styles.text}>Pincode</Text>

            <TextInput
              style={{
                height: 38,
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: 18,
                borderWidth: 1,
                borderColor: "#DADADA",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10,
                paddingLeft:20,
              }}
              placeholder={"xxxxxxxxx"}
              keyboardType={"number-pad"}
            ></TextInput>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Forthpage")}
                style={{
                  height: 51,
                  width: 71,
                  backgroundColor: "#263A96",
                  borderRadius: 18,
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <Ionicons
                  name="chevron-back-outline"
                  size={30}
                  color={"#ffffff"}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Companyname")}
                style={{
                  height: 51,
                  width: 71,
                  backgroundColor: "#263A96",
                  borderRadius: 18,
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <Ionicons
                  name="chevron-forward-outline"
                  size={30}
                  color={"#ffffff"}
                />
              </TouchableOpacity>
            </View>
         
          </View>
        </ScrollView>
       
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FAFAFA',
  },
  text: {
    fontSize: 12,
    fontWeight: "400",
    color: "#353948",
    marginTop: 20,
  },

  wrapperInput: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#DADADA",
    backgroundColor: "#fff",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    margin: 0,
  },

  input: {
   marginLeft:20,
    height:38,
    width: "80%",
  },
});

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

const Separator = () => <View style={styles.separator} />;

export default function Secondpage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ resizeMode: "contain", width: "100%" }}
        source={require("../assets/3img.png")}
      />

      <Ionicons
        style={{
          marginTop: 40,
          marginLeft: 20,
          position: "absolute",
        }}
        name="chevron-back-outline"
        size={30}
        color={"#263A96"}
        onPress={() => navigation.navigate("Firstpage")}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ margin: 15 }}>
          <Text style={{ color: "#292D3D", fontWeight: "700", fontSize: 20 }}>
            Welcome Back!
          </Text>
          <Text
            style={{
              color: "#919191",
              fontWeight: "500",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Hello there, Login to continue.
          </Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              style={{
                height: 38,
                width: "45%",
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 16,
                padding: 0,
                borderRadius: 18,
                elevation: 3,
                shadowColor: "#c1c1c1",
                flexDirection: "row",
              }}
            >
              {/* <FontAwesome name="google" size={25} color={'#FF9800'} style={{marginRight:10}} /> */}
              <Image
                source={require("../assets/search.png")}
                style={{ height: 20, width: 20, marginRight: 10 }}
              />
              <Text
                style={{
                  textAlign: "center",
                  color: "#919191",
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 38,
                width: "45%",
                backgroundColor: "#263A96",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 16,
                borderRadius: 18,
                elevation: 3,
                shadowColor: "#c1c1c1",
                flexDirection: "row",
              }}
            >
              <FontAwesome
                name="facebook"
                size={20}
                color={"#fff"}
                style={{ marginRight: 10 }}
              />
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                Facebook
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            top: "2%",
            alignItems: "center",
            margin: 10,
          }}
        >
          <Separator />

          <Text style={{ color: "#919191", fontSize: 16, fontWeight: "500" }}>
            or sign in with
          </Text>

          <Separator />
        </View>

        <View style={{ margin: 15 }}>
          <Text style={styles.emailText}>Email / Phone number</Text>
          <View style={styles.wrapperInput}>
            <TextInput style={styles.input} placeholder="Email" />
            <Ionicons
              name="checkmark-circle-outline"
              size={16.67}
              color={"#263A96"}
              style={{ marginRight: 0 }}
            />
          </View>
        </View>

        <View style={{ margin: 15 }}>
          <Text style={styles.emailText}>Password</Text>
          <View style={styles.wrapperInput}>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Password"
            />
            {/* <Ionicons name="eye-outline" size={22} color={'#263A96'} style={{marginRight:10}} /> */}
            <Ionicons
              name="eye-off-outline"
              size={22}
              color={"#919191"}
              style={{ marginRight: 0 }}
            />
          </View>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: "#263A96",
                marginTop: 6,
                textAlign: "right",
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ margin: 15 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Thirdpage")}
          >
            <Text
              style={{
                color: "#fff",
                padding: 0,
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              {" "}
              Login Account{" "}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 50,
            margin: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#919191",
              fontSize: 12,
              fontWeight: "500",
            }}
          >
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => navigation.navigate("Forthpage")}
          >
            <Text style={{ color: "#263A96", fontSize: 12, fontWeight: "500" }}>
              {" "}
              Sign Up{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },

  separator: {
    marginVertical: 0,
    borderBottomColor: "#d5d5d5",
    borderBottomWidth: 3,
    width: 80,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: 15
  },

  wrapperInput: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#DADADA",
    backgroundColor: "#fff",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    margin: 0,
    height: 38,
    width: "100%",
  },

  input: {
    marginLeft: 20,
    width: "80%",
    fontSize: 14,
  },
  emailText: {
    color: "#353948",
    fontWeight: "400",
    fontSize: 12,
  },

  button: {
    // borderWidth: 1,
    borderRadius: 25,
    elevation: 5,
    shadowColor: "#000",
    // color: '#fff',
    backgroundColor: "#263A96",
    marginTop: 10,
    marginBottom: 0,
    flexDirection: "row",
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    // shadowOffset: {width: 10, height: 10},
    // shadowColor: '#171717',
    // shadowOpacity: 2,
    // shadowRadius: 3,
  },
});

import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function OtpScreen({ navigation }) {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const otpTextInput = useRef([]);

  const handleOtpInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 4) {
      otpTextInput.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "flex-start" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Thirdpage")}>
          <Ionicons
            name="chevron-back-outline"
            size={30}
            color="#263A96"
            style={{ marginTop: 20 }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 30, marginLeft: 20 }}>
        <Text
          style={{
            color: "#292D3D",
            fontSize: 20,
            fontWeight: "700",
            alignItems: "center",
          }}
        >
          OTP Verification
        </Text>
        <Text style={{ fontSize: 16, paddingTop: 10, color: "#919191" }}>
          Check your SMS messages.{"\n"}
          We have sent you the OTP pin at{"\n"}
          <Text style={{ color: "#353948", fontWeight: "700" }}>
            (+91) XXX XXX - XXXX
          </Text>
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {otp.map((value, index) => (
            <TextInput
              key={index}
              style={styles.textbox}
              maxLength={1}
              keyboardType="numeric"
              placeholder="5"
              value={value}
              onChangeText={(text) => handleOtpInputChange(index, text)}
              ref={(ref) => (otpTextInput.current[index] = ref)}
            />
          ))}
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ color: "#919191", fontWeight: "500", textAlign: "center" }}
          >
            Didn't receive any code?{" "}
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: "#263A96",
                fontSize: 14,
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Resend
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Forthpage")}
          >
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: "500" }}>
              {" "}
              Verify Now{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },

  textbox: {
    height: 62,
    width: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    alignItems: "center",
    fontSize: 26,
    justifyContent: "center",
    borderColor: "#DADADA",
    borderWidth: 1,
    textAlign: "center",
    margin: 5,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    height: 38,
    width: "100%",
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

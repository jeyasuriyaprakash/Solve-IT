import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Image
          style={{ height: 126, width: "100%" }}
          resizeMode="cover"
          source={require("../assets/Avather1.jpg")}
        />
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            marginTop: 30,
            marginLeft: 15,
          }} onPress={()=>navigation.navigate('UserAssigned')}
        >
          <Ionicons name="chevron-back-outline" size={20} color={"#ffffff"} />
          <Text style={{ fontWeight: "500", fontSize: 14, color: "#ffffff" }}>
            back
          </Text>
        </Pressable>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: -60,
          }}
        >
          <Image
            style={{
              height: 94,
              width: 94,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: "#ffffff",
            }}
            source={require("../assets/Profileimg1.jpg")}
          />
        </View>

        <View style={{ marginTop: 20, alignItems: "center" }}>
          <Text
            style={{ fontSize: 18.84, fontWeight: "500", color: "#16171A" }}
          >
            Jeyaprakash G
          </Text>
          <Text
            style={{
              fontSize: 12.56,
              fontWeight: "400",
              color: "#676979",
              marginTop: 10,
            }}
          >
            React Native UI Developer
          </Text>
        </View>

        <View
          style={{
            marginTop: 20,
            justifyContent: "space-evenly",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 10.39,
                fontWeight: "700",
                color: "rgba(38, 58, 150, 1)",
              }}
            >
              2.5+
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: "400",
                color: "rgba(145, 145, 145, 0.75)",
              }}
            >
              Experience
            </Text>
          </View>
          <View
            style={{ height: 30, backgroundColor: "#DADADA", width: 1 }}
          ></View>
          <View>
            <Text
              style={{
                fontSize: 10.39,
                fontWeight: "700",
                color: "rgba(38, 58, 150, 1)",
              }}
            >
              2000+
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: "400",
                color: "rgba(145, 145, 145, 0.75)",
              }}
            >
              Issues Solved
            </Text>
          </View>
          <View
            style={{ height: 30, backgroundColor: "#DADADA", width: 1 }}
          ></View>

          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="star" size={17} color={"#FFB800"} />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "400",
                  color: "rgba(145, 145, 145, 0.75)",
                  marginLeft: 5,
                }}
              >
                4.3
              </Text>
            </View>
            <Text
              style={{
                fontSize: 10,
                fontWeight: "400",
                color: "rgba(145, 145, 145, 0.75)",
              }}
            >
              User Rating
            </Text>
          </View>
        </View>
      </View>

      <View style={{ margin: 20, marginTop: 40 }}>
        <View>
          <Text
            style={{
              color: "#292D3D",
              fontSize: 10,
              fontWeight: "500",
              marginBottom: 10,
            }}
          >
            About
          </Text>
          <Text
            style={{
              color: "rgba(55, 59, 74, 0.75)",
              fontSize: 12,
              fontWeight: "400",
              lineHeight: 16,
            }}
          >
            Hii I am Jeyaprakash, I am Certified in Master in Microsoft
            windows & Microsoft office 365 & then Expert in Windows OS update.
            1.5+ years experience in the field. 2000+ Issue Solved.
          </Text>
        </View>

        <View>
          <Text
            style={{
              color: "#979797",
              fontSize: 8,
              fontWeight: "500",
              marginTop: 20,
            }}
          >
            Skill
          </Text>

          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 4,
              }}
            >
              <Text
                style={{ color: "#373B4A", fontSize: 12, fontWeight: "400" }}
              >
                OS Expert
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 10, fontWeight: "400", color: "#000000" }}
                >
                  2.5 Years
                  <Text style={{ color: "rgba(145, 145, 145, 0.75)" }}>
                    {" "}
                    Experience
                  </Text>{" "}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: "400",
                    color: "rgba(145, 145, 145, 0.75)",
                  }}
                >
                  . 4th Level
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 4,
                width: 228,
                backgroundColor: "#DDB984",
                borderRadius: 6,
                marginTop: 10,
              }}
            >
              <View
                style={{
                  height: 4,
                  width: 181,
                  backgroundColor: "#FFA726",
                  borderRadius: 6,
                }}
              ></View>
              <Ionicons
                name="ellipse"
                size={4}
                color={"#ffffff"}
                style={{ position: "absolute", marginLeft: 150 }}
              />
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text
                style={{ color: "#373B4A", fontSize: 12, fontWeight: "400" }}
              >
                Network
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 10, fontWeight: "400", color: "#000000" }}
                >
                  2.5 Years
                  <Text style={{ color: "rgba(145, 145, 145, 0.75)" }}>
                    {" "}
                    Experience
                  </Text>{" "}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: "400",
                    color: "rgba(145, 145, 145, 0.75)",
                  }}
                >
                  . 4th Level
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 4,
                width: "100%",
                backgroundColor: "#DDB984",
                borderRadius: 6,
                marginTop: 10,
              }}
            >
              <View
                style={{
                  height: 4,
                  width: 208,
                  backgroundColor: "#FFA726",
                  borderRadius: 6,
                }}
              ></View>
              <Ionicons
                name="ellipse"
                size={4}
                color={"#ffffff"}
                style={{ position: "absolute", marginLeft: 170 }}
              />
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <Text
                style={{ color: "#373B4A", fontSize: 12, fontWeight: "400" }}
              >
                Linux
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 10, fontWeight: "400", color: "#000000" }}
                >
                  2.5 Years
                  <Text style={{ color: "rgba(145, 145, 145, 0.75)" }}>
                    {" "}
                    Experience
                  </Text>{" "}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: "400",
                    color: "rgba(145, 145, 145, 0.75)",
                  }}
                >
                  . 4th Level
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 4,
                width: "100%",
                backgroundColor: "#DDB984",
                borderRadius: 6,
                marginTop: 10,
              }}
            >
              <View
                style={{
                  height: 4,
                  width: 208,
                  backgroundColor: "#FFA726",
                  borderRadius: 6,
                }}
              ></View>
              <Ionicons
                name="ellipse"
                size={4}
                color={"#ffffff"}
                style={{ position: "absolute", marginLeft: 190 }}
              />
            </View>
          </View>

          <View>
            <Text
              style={{
                color: "#979797",
                fontSize: 8,
                fontWeight: "500",
                marginTop: 30,
              }}
            >
              Achievements
            </Text>

            <Text
              style={{
                color: "#373B4A",
                fontSize: 12,
                fontWeight: "400",
                marginTop: 8,
              }}
            >
              An operating system's achievement lies in its ability to
              efficiently manage hardware resources, provide a user-friendly
              interface, and support a wide range of software applications.
              Additionally, the ability to offer high levels of security,
              stability, and scalability are also significant achievements for
              an operating system.
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#353948",
                fontSize: 12,
                fontWeight: "400",
                marginTop: 30,
              }}
            >
              Certificates
            </Text>

            <View
              style={{
                height: 136,
                width: "100%",
                borderStyle: "dashed",
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#DADADA",
                backgroundColor: "#F3F3F3",
                marginTop:20
              }}
            >
              <View style={{flexDirection:'row',alignItems:'center',marginLeft:24.25,marginTop:17.5}}>
                <Ionicons name="document-text-outline" size={15} color={'#263a96'} />
                <Text style={{color:'#333333',fontSize:14,fontWeight:'400',marginLeft:17.25}}>file1.pdf</Text>
              </View>
              <View style={{flexDirection:'row',alignItems:'center',marginLeft:24.25,marginTop:17.5}}>
                <Ionicons name="document-text-outline" size={15} color={'#263a96'} />
                <Text style={{color:'#333333',fontSize:14,fontWeight:'400',marginLeft:17.25}}>file2.pdf</Text>
              </View>
              <View style={{flexDirection:'row',alignItems:'center',marginLeft:24.25,marginTop:17.5}}>
                <Ionicons name="document-text-outline" size={15} color={'#263a96'} />
                <Text style={{color:'#333333',fontSize:14,fontWeight:'400',marginLeft:17.25}}>file3.pdf</Text>
              </View>

            </View>
          </View>
        </View>
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
});

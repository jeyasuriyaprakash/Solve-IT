import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";


export default function Reportissue({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Pressable style={{ flexDirection: "row", alignItems: "center" }}
          onPress={()=> navigation.navigate ('DashboardCustomer')}
          >
            <Ionicons name="chevron-back-outline" size={15} color={"#263A96"} />

         <Text style={{color:'#263a96',fontSize:14,fontWeight:'500'}}>back</Text>
          </Pressable>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
                onPress={() => navigation.navigate("IssueSharing")}
              name="checkmark-sharp"
              size={20}
              // style={{ marginRight: 20 }}
              color={"#263A96"}
            />
          
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text
              style={{
                color: "#292D3D",
                fontSize: 20,
                fontWeight: "700",
                marginTop: 30,
              }}
            >
              Fill the details
            </Text>
          </View>

          <View style={{ marginTop: 29 }}>
            <Text style={styles.inputhead}>Title</Text>
            <View style={{ marginTop: 5 }}>
              <TextInput style={styles.inputtext}>
                <Text
                  style={{ color: "#373B4A", fontSize: 14, fontWeight: "400" }}
                >
                  OS Update Issue
                </Text>
              </TextInput>
            </View>
          </View>

          <View style={{ marginTop: 25 }}>
            <Text style={styles.inputhead}>Category</Text>
            <View style={{ marginTop: 5 }}>
              <TextInput style={styles.inputtext}>
                <Text
                  style={{ color: "#373B4A", fontSize: 14, fontWeight: "400" }}
                >
                  OS Update
                </Text>
              </TextInput>
            </View>
          </View>

          <View style={{ marginTop: 25 }}>
            <Text style={styles.inputhead}>Sub-category</Text>
            <View style={{ marginTop: 5 }}>
              <TextInput style={styles.inputtext}>
                <Text
                  style={{ color: "#373B4A", fontSize: 14, fontWeight: "400" }}
                >
                  Linux OS Upgradation
                </Text>
              </TextInput>
            </View>
          </View>

          <View style={{ marginTop: 25 }}>
            <Text style={styles.inputhead}>Description</Text>
            <View style={{ marginTop: 5 }}>
              <TextInput style={styles.inputtextBig} multiline={true}>
                <Text
                  style={{
                    color: "#373B4A",
                    fontSize: 14,
                    fontWeight: "400",
                    lineHeight: 25,
                  }}
                >
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation.
                </Text>
              </TextInput>
            </View>
          </View>

          <View style={{ marginTop: 25 }}>
            <Text style={styles.inputhead}>System Specifications</Text>
            <View style={{ marginTop: 5 }}>
              <TextInput style={styles.inputtextBig} multiline={true}>
                <Text
                  style={{
                    color: "#373B4A",
                    fontSize: 14,
                    fontWeight: "400",
                    lineHeight: 25,
                  }}
                >
                  1 GHz processor or faster 32-bit (x86) or 64-bit (x64).{"\n"}1
                  GB of RAM for 32-bit or 2 GB of RAM for 64-bit.
                </Text>
              </TextInput>
            </View>
          </View>

          <View style={{ marginTop: 25 }}>
            <Text style={styles.inputhead}>Add Screenshots</Text>
            <View style={{ marginTop: 5 ,marginBottom:10}}>
              <View style={styles.inputtextBigdash}>
                <Ionicons
                  name="add-circle-outline"
                  size={35}
                  color={"#8E95B7"}
                  onPress={() => {}}
                />
                <Text
                  style={{
                    color: "#919191",
                    fontSize: 12,
                    fontWeight: "400",
                    marginTop: 5,
                  }}
                >
                  Add Files
                </Text>
              </View>
            </View>
          </View>

          {/* <View style={{ marginTop: 20, marginBottom: 40 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("IssueSharing")}
            >
              <Text
                style={{ color: "#ffffff", fontSize: 14, fontWeight: "500" }}
              >
                Raise an issue
              </Text>
            </TouchableOpacity>
          </View> */}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  main: {
    margin: 15,
    marginTop: "10%",
  },
  inputhead: {
    fontSize: 12,
    color: "#353948",
    fontWeight: "400",
  },
  inputtext: {
    height: 38,
    width: "100%",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#DADADA",
    backgroundColor: "#ffffff",
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputtextBig: {
    height: 84,
    width: "100%",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#DADADA",
    backgroundColor: "#ffffff",
    paddingLeft: 20,
    paddingRight: 20,
    padding: 5,
  },
  inputtextBigdash: {
    height: 136,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#DADADA",
    backgroundColor: "#f3f3f3",
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 38,
    width: "100%",
    backgroundColor: "#263A96",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
});

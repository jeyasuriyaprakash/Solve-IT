// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TextInput,
//   ScrollView,
// } from "react-native";
// import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import { Card } from "react-native-paper";
// import { FontAwesome, Ionicons } from "@expo/vector-icons";
// import { TouchableWithoutFeedback } from "react-native";
// import { TouchableOpacity } from "react-native";

// export default function Companyname({ navigation }) {
//   //   const [selectedTab, setSelectedTab] = useState(0);

//   //   const [selectedClose, setSelectedClose] = useState(0);

//   return (
//     <View style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
//       <Card
//         style={{
//           backgroundColor: "#263A96",
//           height: 232,
//           width: "100%",
//           borderBottomLeftRadius: 92,
//           borderRadius: 0,
//         }}
//       >
//         <Ionicons
//           style={{
//             marginTop: 40,
//             marginLeft: 15,
//             position: "absolute",
//             height: 25,
//             width: 25,
//           }}
//           name="chevron-back-outline"
//           size={30}
//           color={"#fff"}
//           onPress={() => navigation.navigate("Page6")}
//         />
//         <View style={{ margin: 38, marginLeft: 47 }}>
//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <Image source={require("../assets/logocard.png")} />
//             <Text
//               style={{ color: "#fff", fontSize: 14, fontWeight: "500" }}
//               onPress={() => navigation.navigate("Secondpage")}
//             >
//               Login
//             </Text>
//           </View>
//           <Text
//             style={{
//               fontSize: 20,
//               fontWeight: "700",
//               color: "#fff",
//               marginTop: 20,
//               marginLeft: 10,
//             }}
//           >
//             75% Complete{" "}
//           </Text>
//           <Text
//             style={{
//               fontSize: 16,
//               fontWeight: "500",
//               color: "#fff",
//               marginTop: 20,
//               marginLeft: 10,
//             }}
//           >
//             Company Info
//           </Text>

//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "center",
//               alignItems: "center",
//               marginTop: 20,
//             }}
//           >
//             <View
//               style={{
//                 height: 8,
//                 width: 55,
//                 backgroundColor: "#FF9800",
//                 borderRadius: 6,
//                 margin: 5,
//               }}
//             ></View>
//             <View
//               style={{
//                 height: 8,
//                 width: 55,
//                 backgroundColor: "#FF9800",
//                 borderRadius: 6,
//                 margin: 5,
//               }}
//             ></View>
//             <View
//               style={{
//                 height: 8,
//                 width: 55,
//                 backgroundColor: "#FF9800",
//                 borderRadius: 6,
//                 margin: 5,
//               }}
//             ></View>
//             <View
//               style={{
//                 height: 8,
//                 width: 55,
//                 backgroundColor: "#FFf",
//                 borderRadius: 6,
//                 margin: 5,
//               }}
//             ></View>
//           </View>
//         </View>
//       </Card>

//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={{ margin: 20 }}>
//           <Text style={{ color: "#292D3D", fontWeight: "700", fontSize: 20 }}>
//             Sign Up
//           </Text>
//           <Text
//             style={{
//               color: "#919191",
//               fontWeight: "500",
//               fontSize: 16,
//               marginTop: 10,
//             }}
//           >
//             Create an account.
//           </Text>

//           <Text
//             style={{
//               marginTop: 40,
//               fontSize: 12,
//               fontWeight: "400",
//               color: "#353948",
//             }}
//           >
//             Company
//           </Text>

//           <View style={styles.wrapperInput}>
//             <TextInput style={styles.input} placeholder="xxxxxxx" />

//             <Ionicons
//               name="chevron-down-outline"
//               size={20}
//               color={"#919191"}
//               style={{ marginRight: 10 }}
//             />
//           </View>

//           <Text style={styles.text}>Location</Text>

//           <View style={styles.wrapperInput}>
//             <TextInput style={styles.input} placeholder="xxxxxxx" />

//             {/* <Ionicons
//                 name="chevron-down-outline"
//                 size={20}
//                 color={"#919191"}
//                 style={{ marginRight: 10 }}
//               /> */}
//           </View>
//         </View>

//         <View style={{ marginTop: 200, marginBottom: 20, margin: 20 }}>
//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "space-between",
//             }}
//           >
//             <TouchableOpacity
//               onPress={() => navigation.navigate("Page6")}
//               style={{
//                 height: 51,
//                 width: 71,
//                 backgroundColor: "#263A96",
//                 borderRadius: 18,
//                 alignItems: "center",
//                 justifyContent: "center",
//                 position: "relative",
//               }}
//             >
//               <Ionicons
//                 name="chevron-back-outline"
//                 size={30}
//                 color={"#ffffff"}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => navigation.navigate("Page7")}
//               style={{
//                 height: 51,
//                 width: 71,
//                 backgroundColor: "#263A96",
//                 borderRadius: 18,
//                 alignItems: "center",
//                 justifyContent: "center",
//                 position: "relative",
//               }}
//             >
//               <Ionicons
//                 name="chevron-forward-outline"
//                 size={30}
//                 color={"#ffffff"}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 12,
//     fontWeight: "400",
//     color: "#353948",
//     marginTop: 20,
//   },

//   wrapperInput: {
//     borderWidth: 1,
//     borderRadius: 25,
//     borderColor: "#DADADA",
//     backgroundColor: "#fff",
//     marginTop: 10,
//     flexDirection: "row",
//     alignItems: "center",
//     // justifyContent: "space-between",
//     margin: 0,
//   },

//   input: {
//     marginLeft: 20,
//     height: 38,
//     width: "80%",
//   },
// });

import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Card } from "react-native-paper";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import { SelectList } from "react-native-dropdown-select-list";

export default function Companyname({ navigation }) {
  //   const [selectedTab, setSelectedTab] = useState(0);

  //   const [selectedClose, setSelectedClose] = useState(0);
  const [selected, setSelected] = React.useState("");
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(
    () =>
      //Get Values from database
      axios
        .get("http://52.1.46.82:3001/api/companyDetails")
        .then((response) => {
          // Store Values in Temporary Array
          console.log(response);
          let newArray = response.data.map((item) => {
            return {
              key: item.city,
              value: item.companyName,
              value1: item.id,
            };
          });
          //Set Data Variable
          // let ele=  newArray.data.map((item)=>{
          //  return item.value

          // })
          setData(newArray);
          console.log("newarray", newArray);
          setIsLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setIsLoading(false);
        }),
    []
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#FAFAFA" }}>
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
          onPress={() => navigation.navigate("Signup2")}
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
            <Text
              style={{ color: "#fff", fontSize: 14, fontWeight: "500" }}
              onPress={() => navigation.navigate("Login")}
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
            75% Complete{" "}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "#fff",
              marginTop: 20,
              marginLeft: 10,
            }}
          >
            Company Info
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
                width: 55,
                backgroundColor: "#FF9800",
                borderRadius: 6,
                margin: 5,
              }}
            ></View>
            <View
              style={{
                height: 8,
                width: 55,
                backgroundColor: "#FF9800",
                borderRadius: 6,
                margin: 5,
              }}
            ></View>
            <View
              style={{
                height: 8,
                width: 55,
                backgroundColor: "#FF9800",
                borderRadius: 6,
                margin: 5,
              }}
            ></View>
            <View
              style={{
                height: 8,
                width: 55,
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
          <Text
            style={{
              color: "#919191",
              fontWeight: "500",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            Create an account.
          </Text>

          <Text
            style={{
              marginTop: 40,
              fontSize: 12,
              fontWeight: "400",
              color: "#353948",
            }}
          >
            Company
          </Text>

          <SelectList
            boxStyles={{
              height: 38,
              width: "100%",
              borderWidth: 1,
              borderRadius: 25,
              borderColor: "#DADADA",
              marginTop: 10,
              backgroundColor: "#fff",
             alignItems:'center',
             

            }}
            setSelected={setSelected}
            data={data}
            onSelect={() => selected}
          />

          <Text style={styles.text}>Location</Text>

          <View style={styles.wrapperInput}>
            <Text style={styles.input}>{selected}</Text>
          </View>
        </View>

        <View style={{ marginTop: 200, marginBottom: 20, margin: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Signup2")}
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
              onPress={() => navigation.navigate("PasswordLink")}
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

const styles = StyleSheet.create({
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
    height: 38,
  },

  input: {
    marginLeft: 20,
    // height: 38,
    // width: "80%",
    alignSelf: "center",
    justifyContent: "center",
  },
});

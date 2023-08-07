import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput,
  Animated,
} from "react-native";
import React ,{ useState } from "react";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const Separator = () => <View style={Styles.separator} />;

export default function Page7({ navigation }) {


  const [selectedTab, setSelectedTab] = useState(0);

  



  const starRatingOptions = [1, 2, 3, 4, 5, ];

  const [starRating, setStarRating] = useState(null);

  const animatedButtonScale = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      useNativeDriver: true,
      // speed: 0,
      // bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      useNativeDriver: true,
      // speed: 0,
      // bounciness: 4,
    }).start();
  };

  const animatedScaleStyle = {
    transform: [{ scale: animatedButtonScale }],
  };



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
          onPress={() => navigation.navigate("Companyname")}
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
            100% Complete
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
            SkillSet Info
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: 'center',
              alignItems: "center",
              marginTop: 20
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
                backgroundColor: "#FF9800",
                borderRadius: 6,
                margin: 5,
              }}
            ></View>
          </View>
        </View>
      </Card>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ margin: 20 }}>
          <View>
            <Text style={{ color: "#292D3D", fontWeight: "700", fontSize: 20 }}>
              Sign Up
            </Text>
            <Text style={{ fontWeight: "500", color: "#919191", fontSize: 16 }}>
              Create an account
            </Text>
          
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                fontWeight: "400",
                color: "#263A96",
              }}
            >
              Skillset
            </Text>
            <TouchableOpacity
              style={{
                height: 27,
                width: 99,
                backgroundColor: "#FFF",
                borderRadius: 18,
                justifyContent: "center",
                borderColor: "#263A96",
                borderWidth: 1,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#263A96",
                }}
              >
                Add Skill
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Card
              style={{
                height: 170,
                width: "100%",
                backgroundColor: "#F3F3F3",
                borderRadius: 10,
                alignItems: "center",
                marginTop: 20,
                shadowColor:'#fff',
                
              }}
            >
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop: 10,
                  margin: 5,}}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  color: "#353948",
                  
                }}
              >
                Skill
              </Text>
              {/* <Ionicons name="close-circle-outline" size={20}/> */}
              </View>

              <View style={Styles.wrapperInput}>
                <TextInput style={Styles.input} placeholder="xxxxxxx" />

                <Ionicons
                  name="chevron-down-outline"
                  size={20}
                  color={"#919191"}
                  style={{ marginRight: 10 }} 
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 10,
                }}
              >
                <Text
                  style={{ fontSize: 12, fontWeight: "400", color: "#353948" }}
                >
                  Experience
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "400",
                    color: "#353948",
                    marginRight: 60,
                  }}
                >
                  Level
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: 'space-between',
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    height: 38,
                    width: 138,
                    backgroundColor: "#fff",
                    borderColor: "#DADADA",
                    borderRadius: 18,
                    justifyContent: "space-around",
                    alignItems: "center",
                    borderWidth: 1,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      alignItems: "flex-start",
                      fontSize: 14,
                      fontWeight: "400",
                      color: selectedTab == 0 ? '#263A96':'#919191',
                    }}  onPress={() => {setSelectedTab(0);}}
                  >
                    Years
                  </Text>

                  <Separator />
                  <Text
                    style={{
                      alignItems: "flex-end",
                      fontSize: 14,
                      fontWeight: "400",
                      color:  selectedTab == 1 ? '#263A96':'#919191',
                    }}  onPress={() => {setSelectedTab(1);}}
                  >
                    Months
                  </Text>
                </TouchableOpacity>
                <View style={Styles.stars}>
          {starRatingOptions.map((option) => (
            <TouchableWithoutFeedback
              onPressIn={() => handlePressIn(option)}
              onPressOut={() => handlePressOut(option)}
              onPress={() => setStarRating(option)}
              key={option}
            >
              <Animated.View style={animatedScaleStyle}>
                <Ionicons
                  name={starRating >= option ? 'ellipse' : 'ellipse-outline'}
                  size={20}
                  style={starRating >= option ? Styles.starSelected : Styles.starUnselected}
                />
              </Animated.View>
            </TouchableWithoutFeedback>
          ))}
        </View>
              </View>
            </Card>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                fontWeight: "400",
                color: "#263A96",
              }}
            >
              Achievements
            </Text>
            <TouchableOpacity
              style={{
                height: 27,
                width: 99,
                backgroundColor: "#FFF",
                borderRadius: 18,
                justifyContent: "center",
                borderColor: "#263A96",
                borderWidth: 1,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#263A96",
                }}
              >
                Add{" "}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Card
              style={{
                height: 170,
                width: "100%",
                backgroundColor: "#F3F3F3",
                borderRadius: 10,
                // alignItems: "center",
                // justifyContent:'center',

                shadowColor:'#fff'
              }}
            >
               
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  color: "#353948",
                  marginTop: 20,
                  marginLeft: 20,
                }}
              >
                Achievements
              </Text>
              <View style={{justifyContent:'center',alignItems:"center",marginTop:10}}>
              <TextInput
                style={{
                  height: 84,
                  width: '90%',
                  borderWidth: 1,
                  borderRadius: 18,
                  borderColor: "#DADADA",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor:'#fff',
                  paddingLeft:20
                }}
                placeholder={"xxxxxxxxx"}
              ></TextInput>
              </View>
              
            </Card>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                fontWeight: "400",
                color: "#263A96",
              }}
            >
              Certificates
            </Text>
            <TouchableOpacity
              style={{
                height: 27,
                width: 99,
                backgroundColor: "#FFF",
                borderRadius: 18,
                justifyContent: "center",
                borderColor: "#263A96",
                borderWidth: 1,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#263A96",
                }}
              >
                Add
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
            }}
          >
            <Card
              style={{
                height: 136,
                width: '100%',
                backgroundColor: "#F3F3F3",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                borderStyle: "dashed",
                borderWidth: 1,
                shadowColor:'#fff',
                borderColor:'#DADADA'
              }}
            >
              {/* <Text style={{ margin: 5 }}>Achievements</Text> */}
              {/* <TextInput style={{ height: 84, width: 281, borderWidth: 1, borderRadius: 18, borderColor: '#DADADA', alignItems: 'center', justifyContent: 'center', padding: 10 }}> */}
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Ionicons
                  name="add-circle-outline"
                  size={40}
                  color="#8E95B7"
                  style={{ justifyContent: "center", alignItems: "center" }}
                ></Ionicons>
              </View>
              <Text
                style={{ fontSize: 12, fontWeight: "400", color: "#919191",textAlign:'center' }}
              >
                Upload Certificates in {"\n"} PDF / JPG Format.
              </Text>
              {/* </TextInput> */}
            </Card>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "5%",
            }}
          >
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
                name="chevron-back-outline"
                size={30}
                color={"#ffffff"}
              />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Page8")}
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
              <Ionicons name="checkmark-outline" size={30} color={"#ffffff"} />
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  // text:{
  //     fontSize:16,
  //     fontWeight:'400',
  //     color:'#353948',
  // },
  wrapperInput: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#DADADA",
    backgroundColor: "#fff",
    marginTop: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0,
  },

  separator: {
   
    borderColor: "#d5d5d5",
    // borderBottomWidth: 2,
    backgroundColor:'#d5d5d5',
    borderWidth:0.5,
   
    height: 35,
    
    // transform:[{ rotate: '90deg'}]
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: 15
  },


  input: {
    marginLeft: 20,
    height: 38,
    width: "80%",
    justifyContent:'center'
  },


  stars: {
    display: 'flex',
    flexDirection: 'row',
  },
  starUnselected: {
    color: '#DADADA',
  },
  starSelected: {
    color: '#263A96',
  },


});

import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";

export default function UserAssigned({navigation}) {
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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="menu-outline" size={25} color={"#263A96"} />

            <Image
              style={{ height: 35, width: 136 }}
              source={require("../assets/logo2.png")}
            />
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="search-outline"
              size={25}
              style={{ marginRight: 20 }}
              color={"#263A96"}
            />
            <Ionicons
              name="notifications-outline"
              size={25}
              color={"#263A96"}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity
            // onPress={() => navigation.navigate("DashboardCustomer")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              //   margin: 20,
              marginTop: 30,
            }}
          >
            <Ionicons name="chevron-back-outline" size={20} color={"#263A96"} />
            <Text
              style={{
                color: "#263a96",
                fontSize: 14,
                fontWeight: "500",
                marginLeft: 5,
              }}
            >
              back
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "#373B4A", fontSize: 14, fontWeight: "500" }}>
            Thank you for taking the time to register your issue with us.
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "#919191", fontSize: 14, fontWeight: "500" }}>
            We have assigned Our specialized User for you...
          </Text>
        </View>

        <View style={{justifyContent: "center",
               alignItems: "center", marginTop:30}}>
          <View
            style={{
              height: 393,
              width: 314,
              backgroundColor: "#ffffff",
              borderRadius: 12,
              elevation:6,
            //   justifyContent: "center",
            //   alignItems: "center",
            }}
          >
            <Image
              style={{ height: 125,width:314,borderTopLeftRadius:12,borderTopRightRadius:12, }}
              resizeMode='center'
              source={require("../assets/Avather1.jpg")}
            />

<View style={{justifyContent:'center',alignItems:'center',marginTop:-60}}>
                <Image style={{height:94,width:94,borderRadius:50,borderWidth:2,borderColor:'#ffffff'}} source={require("../assets/Profileimg1.jpg")} />
            </View>

            <View style={{marginTop:20,alignItems:'center'}}>
                <Text style={{fontSize:18.84,fontWeight:'500',color:'#16171A'}}>Jeyaprakash G</Text>
                <Text style={{fontSize:12.56,fontWeight:'400',color:'#676979',marginTop:10}}>React Native UI Developer</Text>
            </View>

            <Pressable style={{marginTop:20,justifyContent:'space-evenly',flexDirection:'row',alignItems:'center'}}
             onPress={() => navigation.navigate('ProfileView')}
            >
                <View>
                    <Text style={{fontSize:10.39,fontWeight:'700',color:'rgba(38, 58, 150, 1)'}}>2.5+</Text>
                    <Text style={{fontSize:10,fontWeight:'400',color:'rgba(145, 145, 145, 0.75)'}}>Experience</Text>
                </View>
                <View style={{height:30,backgroundColor:'#DADADA',width:1}}></View>
                <View>
                    <Text style={{fontSize:10.39,fontWeight:'700',color:'rgba(38, 58, 150, 1)'}}>2000+</Text>
                    <Text style={{fontSize:10,fontWeight:'400',color:'rgba(145, 145, 145, 0.75)'}}>Issues Solved</Text>
                </View>
                <View style={{height:30,backgroundColor:'#DADADA',width:1}}></View>

                <View>
                    <View style={{flexDirection:'row',alignItems:"center"}}>
                        <Ionicons name="star" size={17} color={'#FFB800'} />
                        <Text style={{fontSize:10,fontWeight:'400',color:'rgba(145, 145, 145, 0.75)',marginLeft:5}}>4.3</Text>
                    </View>
                </View>
            </Pressable>

            <View style={{marginTop:40,alignItems:"center"}}>
                <TouchableOpacity style={styles.button}
                //  onPress={()=>navigation.navigate('ChatBubble')}
                 onPress={() => navigation.navigate('ChatScreen')}
                 >
                    <Text style={{color:'#ffffff',fontSize:14,fontWeight:'500',marginRight:10}}>Connect</Text>
                    <Ionicons name="arrow-forward-outline" size={15} color={'#ffffff'} />
                </TouchableOpacity>
            </View>

          </View>

           

        </View>




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
  button: {
    height: 38,
    width: 259,
    backgroundColor: "#263A96",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'row'
  },
});

import { View, Text } from "react-native";
import React, {useState} from "react";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function Cardpage1() {

const[Select, setSelect]= useState(0);

  return (
    <View>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>

<View style={{alignItems:'center',}}>
<Ionicons name="radio-button-on-outline" size={12} color={'#ff9800'} />
<View style={{height:108,width:1,backgroundColor:'#D1D3DB'}}></View>
</View>

      <Card
        style={{
          borderColor: Select == 0 ?  "#fafafa": "#dadada",
          backgroundColor: Select == 0 ? "#fafafa": "#fff",
          borderWidth: 1,
          height: 101,
          width: 281,
          padding: 15,
          borderRadius:6,
          shadowColor:'#fff',
          justifyContent: "space-evenly",
        //   alignItems:'center'
        }} onPress={() => {setSelect(1); }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#373B4A", fontSize: 12, fontWeight: "500" }}>
            Meeting Title1
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="time-outline" size={14} color={"#263A96"} />
            <Text style={{ color: "#373B4A", fontSize: 8, fontWeight: "500" }}>
              {" "}
              11:00 - 11:30{" "}
            </Text>
          </View>
        </View>

        <View>
          <Text style={{ fontSize: 10, fontWeight: "400", color: "#919191",marginTop:5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing {"\n"}elit, sed
            do eiusmod tempor incididunt ut labore et {"\n"}dolore magna aliqua
          </Text>
        </View>

        <View>
          <Text style={{ color: "#373B4A", fontSize: 8, fontWeight: "500",marginTop:5 }}>
            Friday, 10 Feb 2023{" "}
          </Text>
        </View>
      </Card>

    </View>




    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>

<View style={{alignItems:'center',}}>
<Ionicons name="radio-button-off-outline" size={12} color={'#ff9800'} />
<View style={{height:108,width:1,backgroundColor:'#D1D3DB'}}></View>
</View>

      <Card
        style={{
          borderColor: Select == 1 ? "#fafafa": "#Dadada",
          backgroundColor: Select == 1 ?  "#fafafa": "#fff",
          borderWidth: 1,
          height: 101,
          width: 281,
          padding: 15,
          borderRadius:6,
          shadowColor:'#fff',
          justifyContent: "space-evenly",
        //   alignItems:'center'
        }} onPress={() => {setSelect(0); }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#373B4A", fontSize: 12, fontWeight: "500" }}>
            Meeting Title2
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="time-outline" size={14} color={"#263A96"} />
            <Text style={{ color: "#373B4A", fontSize: 8, fontWeight: "500" }}>
              {" "}
              12:00 - 01:30{" "}
            </Text>
          </View>
        </View>

        <View>
          <Text style={{ fontSize: 10, fontWeight: "400", color: "#919191",marginTop:5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing {"\n"}elit, sed
            do eiusmod tempor incididunt ut labore et {"\n"}dolore magna aliqua
          </Text>
        </View>

        <View>
          <Text style={{ color: "#373B4A", fontSize: 8, fontWeight: "500",marginTop:5 }}>
            Friday, 10 Feb 2023{" "}
          </Text>
        </View>
      </Card>

    </View>



    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>

<View style={{alignItems:'center',}}>
<Ionicons name="radio-button-off-outline" size={12} color={'#ff9800'} />
<View style={{height:108,width:1,backgroundColor:'#D1D3DB'}}></View>
</View>

      <Card
        style={{
          borderColor: Select == 0 ? "#fafafa": "#Dadada",
          backgroundColor: Select == 0 ?  "#fafafa": "#fff",
          borderWidth: 1,
          height: 101,
          width: 281,
          padding: 15,
          borderRadius:6,
          shadowColor:'#fff',
          justifyContent: "space-evenly",
        //   alignItems:'center'
        }}  onPress={() => {setSelect(1); }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#373B4A", fontSize: 12, fontWeight: "500" }}>
            Meeting Title3
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="time-outline" size={14} color={"#263A96"} />
            <Text style={{ color: "#373B4A", fontSize: 8, fontWeight: "500" }}>
              {" "}
              12:00 - 01:30{" "}
            </Text>
          </View>
        </View>

        <View>
          <Text style={{ fontSize: 10, fontWeight: "400", color: "#919191",marginTop:5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing {"\n"}elit, sed
            do eiusmod tempor incididunt ut labore et {"\n"}dolore magna aliqua
          </Text>
        </View>

        <View>
          <Text style={{ color: "#373B4A", fontSize: 8, fontWeight: "500",marginTop:5 }}>
            Friday, 10 Feb 2023{" "}
          </Text>
        </View>
      </Card>

    </View>



    </View>
  );
}

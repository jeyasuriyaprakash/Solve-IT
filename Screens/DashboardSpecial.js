import { View, Text ,StyleSheet, Image, ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Card } from 'react-native-paper';
import Cardpage from './Cardpage';
import Carouselpage from './Carouselpage';
import Carouselpage1 from './Carouselpage1';
import Cardpage1 from './Cardpage1';

export default function DashboardSpecial({navigation}) {
  return (
   
    <View style={styles.container}>
      <View style={{margin:15,marginTop:'10%'}}>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

      <View style={{flexDirection:'row',alignItems:'center',}}>
    <Ionicons name='menu-outline'  size={25} color={"#263A96"}  onPress={()=>navigation.openDrawer()} />

    <Image style={{height:35,width:136}} source={require("../assets/logo2.png")} />
    </View>

<View style={{flexDirection:'row',alignItems:'center',}}>
    <Ionicons name='search-outline' size={25} style={{marginRight:20}} color={'#263A96'} />
    <Ionicons name='notifications-outline' size={25}  color={'#263A96'} />
    </View>
        </View>
<ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop:15}}>
          <Text style={{fontSize:16,fontWeight:'500',color:'#919191'}}>
          Good morning, Kingsley!
          </Text>
          <Text style={{fontSize:20,fontWeight:'700',color:'#292D3D',marginTop:5}}>
          You have got<Text style={{color:'#FF9800'}}> 12 </Text>tasks today.
          </Text>
        </View>
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
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
          <Text style={{color:'#263A96',fontSize:14,fontWeight:'500'}}>Todo's</Text>
          <Text style={{color:'#353948',fontSize:14,fontWeight:'500'}}>See all</Text>
        </View>


        <Carouselpage />

        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
          <Text style={{color:'#263A96',fontSize:14,fontWeight:'500'}}>Inprogress</Text>
          <Text style={{color:'#353948',fontSize:14,fontWeight:'500'}}>See all</Text>
        </View>

        <Carouselpage1 />

        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
          <Text style={{color:'#263A96',fontSize:14,fontWeight:'500'}}>
          Upcoming Meetings</Text>
          <Text style={{color:'#353948',fontSize:14,fontWeight:'500'}}>See all</Text>
        </View>

        <Cardpage1 />

<View>
  
</View>
</ScrollView>




      </View>  
    </View>
    
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#Fafafa',
    
  },

});
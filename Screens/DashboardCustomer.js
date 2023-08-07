import { View, Text ,StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Card } from 'react-native-paper';
import Cardpage from './Cardpage';
import Carouselpage from './Carouselpage';
import Carouselpage1 from './Carouselpage1';

import Cardpage2 from './Cardpage2';


export default function DashboardCustomer({navigation}) {
  return (
   
    <View style={styles.container}>
      <View style={{margin:15,marginTop:'10%'}}>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

      <View style={{flexDirection:'row',alignItems:'center',}}>
    <Ionicons name='menu-outline'  size={25} color={"#263A96"}/>

    <Image style={{height:35,width:136}} source={require("../assets/logo2.png")}/> 
    </View>

<View style={{flexDirection:'row',alignItems:'center',}}>
    <Ionicons name='search-outline' size={25} style={{marginRight:20}} color={'#263A96'}/>
    <Ionicons name='notifications-outline' size={25}  color={'#263A96'}/>
    </View>
        </View>
<ScrollView  showsVerticalScrollIndicator={false}>
        <View style={{marginTop:15}}>
          <Text style={{fontSize:16,fontWeight:'500',color:'#919191'}}>
          Good morning, Jessical!
          </Text>
          <Text style={{fontSize:20,fontWeight:'700',color:'#292D3D',marginTop:5}}>
          We are here to <Text style={{color:'#FF9800'}}>help </Text>you. </Text>
        <Text style={{fontSize:16,fontWeight:'500',color:'#919191',marginTop:5}}>Kindly tell us the issue that you are {'\n'}
      facing by reporting the issue.</Text>

        </View>

        <TouchableOpacity onPress={()=> navigation.navigate('Reportissue')} style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
        <Text style={{color:'#263A96',fontSize:14,fontWeight:'500',marginRight:10}}>Report an issue</Text> 
        <Ionicons name='chevron-forward-outline' size={18} color={'#263A96'} />
        </TouchableOpacity>


<View style={{marginTop:20}}>
<Text style={{color:'#263A96',fontSize:14,fontWeight:'500',}}>Issue Stats</Text> 
      <Cardpage />
</View>
        {/* <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
          <Text style={{color:'#263A96',fontSize:14,fontWeight:'500'}}>Todo's</Text>
          <Text style={{color:'#353948',fontSize:14,fontWeight:'500'}}>See all</Text>
        </View> */}


        {/* <Carouselpage /> */}

        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
          <Text style={{color:'#263A96',fontSize:14,fontWeight:'500'}}>Issue Stats Inprogress</Text>
          <Text style={{color:'#353948',fontSize:14,fontWeight:'500'}}>See all</Text>
        </View>

        <Carouselpage1 />

        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
          <Text style={{color:'#263A96',fontSize:14,fontWeight:'500'}}>
          Upcoming Meetings</Text>
          <Text style={{color:'#353948',fontSize:14,fontWeight:'500'}}>See all</Text>
        </View>

        <Cardpage2 />

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
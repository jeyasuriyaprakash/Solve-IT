import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'

export default function PasswordLink() {
  return (
    <View style={styles.container}>

{/* <View style={{margin:20,justifyContent:'space-evenly'}}> */}
    <View style={{paddingTop:50}}>
        <Image style={{height:85,width:85,}} source={require('../assets/thankful1.png')}  />
   {/* <Ionicons name='chatbox-ellipses-outline' size={80} color={'#263A96'} /> */}
    </View>
    <View style={{margin:20}}>
        <Text style={{fontSize:20,fontWeight:500,color:'#373B4A',lineHeight:40}}>
            A password link has been sent your <Text style={{color:'#FF9800',fontSize:20,fontWeight:500}}> registered </Text> mail id.</Text>

    </View>
    <View>
    <Image style={{height:163,width:163}} source={require('../assets/gears_360.gif')} />
    </View>
    <View style={{margin:20}}>
        <Text style={{fontSize:20,fontWeight:500,color:'#373B4A',lineHeight:26}}>
        Please check you email to access the link.
        </Text>
    </View>
    
        <TouchableOpacity style={{height:38,width:295,backgroundColor:'#263A96',borderRadius:18,justifyContent:"center",alignItems:'center'}}>
            <Text style={{fontSize:14,fontWeight:'500',color:'#ffffff'}}>Ok</Text>
        </TouchableOpacity>
    

{/* </View> */}
      
    </View>
  )
}

const styles = StyleSheet.create({
 container:{
    flex:1,
    backgroundColor:'#FAFAFA',
    justifyContent:'space-evenly',
    alignItems:'center'

 }
})
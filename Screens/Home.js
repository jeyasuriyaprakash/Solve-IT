import { View, Text } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'

export default function Home({navigation}) {
  return (
    <View style={{flex:1,backgroundColor:'#ffffff'}}>
      <View style={{margin:20,marginTop:30}}>

        <View>
    <Ionicons name='menu' size={30} color={'#263a96'} onPress={()=>navigation.openDrawer()} />
        </View>

      <Text >Home</Text>

      </View>
     
    </View>
  )
}
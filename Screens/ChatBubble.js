import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image } from 'react-native';
import { Card } from 'react-native-paper';
// import {
//   Container,
//   Card,
//   UserInfo,
//   UserImgWrapper,
//   UserImg,
//   UserInfoText,
//   UserName,
//   PostTime,
//   MessageText,
//   TextSection,
// } from '../Screens/Styles/MessageStyles';

const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/profile1.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/profile2.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/profile3.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/profile4.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/Avather1.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my.',
  },
];

const ChatBubble = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View>
          
        </View>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <Card onPress={() => navigation.navigate('ChatScreen')}>
              <View style={styles.UserInfo}>
                <View style={styles.UserImgWrapper}>
                  <Image style={styles.UserImg} source={item.userImg} />
                </View>
                <View style={styles.TextSection}>
                  <View style={styles.UserInfoText}>
                    <Text style={styles.UserName}>{item.userName}</Text>
                    <Text style={styles.PostTime}>{item.messageTime}</Text>
                  </View>
                  <Text style={styles.MessageText}>{item.messageText}</Text>
                </View>
              </View>
            </Card>
          )}
        />
      </View>
    );
};

export default ChatBubble;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  UserInfo:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  UserImgWrapper:{
    paddingTop: 15,
    paddingBottom: 15,
  },
  UserImg:{
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  TextSection:{
    flexDirection: 'column',
  justifyContent: 'center',
  padding: 15,
  paddingLeft: 0,
  marginLeft: 10,
  width: 300,
  borderBottomWidth: 1,
  borderBottomColor: '#cccccc',
  },
  UserInfoText:{
    flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 5,
  },
  UserName:{
    fontSize: 14,
    fontWeight: 'bold',
    // fontFamily: 'Lato-Regular',
  },
  PostTime:{
    fontSize: 12,
  color: '#666',
  // fontFamily: 'Lato-Regular',
  },
  MessageText:{
    fontSize: 14,
    color: '#333333',
  }
});
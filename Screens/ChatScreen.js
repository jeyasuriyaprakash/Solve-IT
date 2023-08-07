import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  ScrollView,
  Text,
  Button,
  StyleSheet,
  TextInput,
} from "react-native";
import {
  Bubble,
  GiftedChat,
  Send,
  InputToolbar,
} from "react-native-gifted-chat";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {Ionicons} from "@expo/vector-icons"
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ChatHeader from "./ChatHeader";
import { color } from "react-native-reanimated";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "Hello world",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props} containerStyle={{borderWidth:1,borderColor:'rgba(255, 255, 255, 0.00)',}}>
        <Ionicons
          name="send-outline"
          style={{ marginBottom: 5, marginRight: 5 }}
          size={25}
          color="#263a96"
        />
        {/* <Text>Hello world</Text> */}
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#263a96",
            borderBottomEndRadius: 0,
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };

 
  function CustomInputToolbar(props) {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: '#ffffff',
        borderWidth:1,
        borderRadius:30,
        marginRight:10,
        marginLeft:10,
        marginTop:0,
        marginBottom:5,
        borderTopColor:'#1c1c1c',
        borderTopWidth:1,
        borderColor:'#1c1c1c',
       }}
       
        
      />
    );
  }
      
  return (
    <View style={{ flex: 1, backgroundColor: "#fafafa", }}>
      <ChatHeader />

      <GiftedChat 
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
        renderInputToolbar={CustomInputToolbar}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
  },
});

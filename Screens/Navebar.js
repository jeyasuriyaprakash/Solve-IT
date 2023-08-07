import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import Home from "./Home";
import ChatHistory from "./List of Service";
// import Helpus from "./Issue Tracker";
import Notification from "./Orders & Payment History";
import Orders from "./Chat History";
import Profile from "./Search Specialists";
import { color } from "react-native-reanimated";
import {Ionicons} from '@expo/vector-icons'
import Issue from "./Profile Settings";
import List from "./Help & Support";
import Chat from "./Chat";
import ListOfService from "./List of Service";

import OrdersPaymentHistory from "./Orders & Payment History";
import SearchSpecialists from "./Search Specialists";
import ProfileSettings from "./Profile Settings";
import HelpSupport from "./Help & Support";
import DashboardSpecial from "./DashboardSpecial";
import IssueTracker from "./IssueTracker";


const Drawer = createDrawerNavigator();

export default function Navebar() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
    
      // useLegacyImplementation
      initialRouteName="Home"
      screenOptions={{
        headerShown:false,
        drawerInactiveTintColor:'#FFFfff' ,
        drawerActiveBackgroundColor: "#FFFFFF",
        drawerActiveTintColor: "#263a96",
        
      }}
    >
      <Drawer.Screen name="Home" component={DashboardSpecial} options={{
        drawerIcon: ({color}) => (
          <Ionicons name="home-outline" size={20} color={color} />
        )
      }} />

    
      <Drawer.Screen name="List Of Service" component={ListOfService} options={{
        drawerIcon: ({color}) => (
          <Ionicons name="list-outline" size={20} color={color} />
        )
      }} />

      <Drawer.Screen name="IssueTracker" component={IssueTracker} options={{
        drawerIcon: ({color}) => (
          <Ionicons name="git-compare-outline" size={20} color={color} />
        )
      }} />

      <Drawer.Screen name="Orders & Payment History" component={OrdersPaymentHistory} options={{
        drawerIcon: ({color}) => (
          <Ionicons name="clipboard-outline" size={20} color={color} />
        )
      }} />

      <Drawer.Screen name="Chat History" component={ChatHistory} options={{
        drawerIcon: ({color}) => (
          <Ionicons name="chatbox-ellipses-outline" size={20} color={color} />
        )
      }} />

      <Drawer.Screen name="Search Specialists" component={SearchSpecialists} options={{
        drawerIcon: ({color}) => (
          <Ionicons name="search-outline" size={20} color={color} />
        )
      }} />

<Drawer.Screen name="Profile Settings" component={ProfileSettings} options={{
        drawerIcon: ({color}) => (
          <Ionicons name="person-outline" size={20} color={color} />
        )
      }} />

<Drawer.Screen name="Help & Support" component={HelpSupport} options={{
        drawerIcon: ({color}) => (
          <Ionicons name="help-circle-outline" size={20} color={color} />
        )
      }} />

{/* <Drawer.Screen name="Chat" component={Chat}  /> */}

    </Drawer.Navigator>
  );
}

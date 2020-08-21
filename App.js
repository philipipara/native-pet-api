import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import {Header, ListItem} from 'react-native-elements';
import { FontAwesome5, Octicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from "./components/Home";
import infoPage from "./components/Facts";

const App = () => {


  const Tab = createBottomTabNavigator();

  function MyTabs() {
    
    return (
      <Tab.Navigator 
      tabBarOptions={{showIcon: true, showLabel: false, inactiveBackgroundColor: 'slategray'}}>
        <Tab.Screen 
        name='Home' 
        component={HomePage} 
        options={{
          tabBarIcon: (tabInfo) => (
            <FontAwesome5 name="home" size={24} color='teal' />
          )
        }}
        />
        <Tab.Screen 
           name="Settings" 
           component={infoPage} 
           options={{
             tabBarIcon: (tabInfo) => (
              <Octicons name="info" size={24} color="teal" />
             )
           }}
           />
      </Tab.Navigator>
    );
  }



  return(
    <NavigationContainer>
    <MyTabs />
  </NavigationContainer>
);
}

export default App;


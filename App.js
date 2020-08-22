import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import {Header, ListItem} from 'react-native-elements';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from "./components/Pets";
import infoPage from "./components/Facts";

const App = () => {
  

  const Tab = createBottomTabNavigator();

  function MyTabs() {
    
    return (
      <Tab.Navigator 
      tabBarOptions={{showIcon: true, showLabel: false, activeBackgroundColor: 'slategray'}}>
        <Tab.Screen 
        name='Home' 
        component={infoPage} 
        options={{
          tabBarIcon: (tabInfo) => (
            <FontAwesome5 name="home" size={24} color='teal' />
          )
        }}
        />
        <Tab.Screen 
           name="Settings" 
           component={HomePage} 
           options={{
             tabBarIcon: (tabInfo) => (
              <Ionicons name="md-paw" size={24} color="teal" />
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


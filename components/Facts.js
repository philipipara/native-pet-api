import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import {Header} from 'react-native-elements';
import { Ionicons, Entypo} from '@expo/vector-icons';
import Constants from "expo-constants";

const infoPage = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Header
              containerStyle={{paddingTop: 5, marginTop: 2,  backgroundColor: 'slategray'}}
              centerComponent={{ text: 'Animal Facts', style: { color: 'white',fontSize: 15, fontWeight: 'bold'} }}
            />
            
        </SafeAreaView>
    )

}

export default infoPage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'teal',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight
      }
})
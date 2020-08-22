import React from 'react';
import { SafeAreaView, Text, StyleSheet, Image, Linking } from 'react-native';
import {Header, Tile, ListItem} from 'react-native-elements';
import { FontAwesome5, AntDesign, Entypo, Ionicons} from '@expo/vector-icons';
import Constants from "expo-constants";
import { ScrollView } from 'react-native-gesture-handler';


const infoPage = () => {

    const aspca = () => {
        Linking.openURL('https://google.com');
      };

    const peta = () => {
        Linking.openURL('https://peta.org')
    }

    const chewy = () => {
        Linking.openURL('https://chewy.com')
    }
    return(
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Header
              
              containerStyle={{paddingTop: 5, marginTop: 2,  backgroundColor: 'slategray'}}
              leftComponent={<Entypo name="shuffle" size={24} color="white" />}
              centerComponent={{ text: 'Welcome, Find some Animals', style: { color: 'white',fontSize: 15, fontWeight: 'bold'} }}
              rightComponent={<FontAwesome5 name="dog" size={24} color="white" />} 
            />
           

            <Tile
                imageSrc={require('../assets/puppy.jpeg')}
                title="Hello, we created a state of the art app that shows users random pets. Pets may include: Dogs, Cats, Bunnies, or a suprise from the sea "
                featured
                titleStyle={styles.title}
                />
            <Tile
                imageSrc={require('../assets/bunny.jpeg')}
                title="We have an appreciation for animals here. We have partnered with a couple foundations where you can donate to or if you need pet supplies can order from Chewy"
                featured
                titleStyle={styles.title}
                />
        <ListItem
        title="Donate to ASPCA"
        chevron
        bottomDivider
        onPress={aspca}
        containerStyle={styles.listCont}
        titleStyle={styles.title}
        leftAvatar={<FontAwesome5 name="money-bill-alt" size={24} color="white" />}
        />
        <ListItem
         title="Donate to PETA"
         chevron
         bottomDivider
         onPress={peta}
         containerStyle={styles.listCont}
        titleStyle={styles.title}
         leftAvatar={<FontAwesome5 name="donate" size={24} color="white" />}
        />
        <ListItem 
         title="Shop at Chewy"
         chevron
         onPress={chewy}
         containerStyle={styles.listCont}
         titleStyle={styles.title}
         leftAvatar={<AntDesign name="shoppingcart" size={24} color="white" />}
        />
        </ScrollView>
        </SafeAreaView>
    )

}

export default infoPage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'teal',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight
      },
    pic: {
        height: 500,
        width: 500
    },
    title: {
        color: 'white',
        fontWeight: 'bold'
      },
      listCont: {
        backgroundColor: 'slategray'
      }
})
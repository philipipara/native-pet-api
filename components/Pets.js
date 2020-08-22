import React, { useState, useEffect } from "react";
import {Linking, SafeAreaView, StyleSheet, ScrollView, Image, ActivityIndicator, RefreshControl} from 'react-native';
import Constants from 'expo-constants';
import {Header, ListItem} from 'react-native-elements';
import { AntDesign, FontAwesome5, Entypo} from '@expo/vector-icons';
import BlankSpacer from "react-native-blank-spacer";
 


const HomePage = () => {
    const [loading, setLoading] = useState(false);
    const [animal, setAnimal] = useState();
  
    const loadAnimal = async () => {
      setLoading(true);
      const res = await fetch('http://pet-library.moonhighway.com/api/randomPet')
      const data = await res.json();
      await Image.prefetch(data.photo.full)
      setAnimal(data)
      setLoading(false);
    }

  
    useEffect(() => {
      loadAnimal();
    }, [])
  
    if(!animal) return <ActivityIndicator size='large' />;
    return(
        <SafeAreaView style={styles.container}>
        <ScrollView
          refreshControl={<RefreshControl refreshing={loading} onRefresh={loadAnimal} />}
        >
          <Header
              
              containerStyle={{paddingTop: 5, marginTop: 2,  backgroundColor: 'slategray'}}
              leftComponent={<Entypo name="shuffle" size={24} color="white" />}
              centerComponent={{ text: 'Welcome, Find some Animals', style: { color: 'white',fontSize: 15, fontWeight: 'bold'} }}
              rightComponent={<FontAwesome5 name="dog" size={24} color="white" />} 
            />
         
          <Image style={styles.pic}source={{uri: animal.photo.full}}/>
          
          <ListItem 
             containerStyle={styles.listCont}
             leftAvatar={<AntDesign name="user" size={24} color="white" />}
             title={`This is ${animal.name}`}
             bottomDivider
             titleStyle={styles.title}
             
             
          />
          <ListItem 
            title={`${animal.name} is a ${animal.category}`}
            leftAvatar={<AntDesign name="tago" size={24} color="white" />}
            bottomDivider
            titleStyle={styles.title}
            containerStyle={styles.listCont}
            
            />
          <ListItem 
            title={`${animal.name} weighs ${animal.weight}lbs`}
            bottomDivider
            leftAvatar={<Entypo name="gauge" size={24} color="white" />}
            titleStyle={styles.title}
            containerStyle={styles.listCont}
          />
          
        <BlankSpacer height={12} />
        </ScrollView>
        
      </SafeAreaView>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'teal',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight
    },
    paragraph: {
      margin: 10,
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      
    },
    pic: {
      height: 500,
      width: 500
    },
    header: {
      paddingTop: 1,
      marginTop: 1,
      height: 150,
      fontSize: 50
    },
    title: {
      color: 'white',
      fontWeight: 'bold'
    },
    listCont: {
      backgroundColor: 'slategray'
    }
  })

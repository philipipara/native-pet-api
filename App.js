import React, { useState, useEffect } from "react";
import {SafeAreaView, FlatList, StyleSheet, ScrollView, Image, ActivityIndicator, RefreshControl} from 'react-native';
import Constants from 'expo-constants';
import {Header, List, ListItem} from 'react-native-elements'

const App = () => {
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
            containerStyle={{paddingTop: 1, marginTop: 2, fontSize: 45, backgroundColor: 'grey'}}
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ fontSize: 50, text: 'Welcome, Find some Animals', style: { color: 'white' } }}
            rightComponent={{ icon: 'refresh', color: '#fff' }} 
          />
       
        <Image style={styles.pic}source={{uri: animal.photo.full}}/>
        
        <ListItem 
           style={styles.title}
           title={`This is ${animal.name}`}
           bottomDivider
           style={{backgroundColor: 'grey'}}
           chevron
        />
        <ListItem 
          title={`${animal.name} is a ${animal.category}`}
          bottomDivider
          chevron
          />
        <ListItem 
          title={`${animal.name} weighs ${animal.weight}lbs`}
          bottomDivider
          chevron
        />
        
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 1,
    textAlign: 'center',
  }
})
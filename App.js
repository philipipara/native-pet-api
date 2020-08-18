import React, { useState, useEffect } from "react";
import {SafeAreaView, Text, StyleSheet, ScrollView, Image, ActivityIndicator, RefreshControl} from 'react-native';
import Constants from 'expo-constants';

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
        <Text style={styles.paragraph}>{animal.name}</Text>
        <Image style={styles.pic}source={{uri: animal.photo.full}}/>
        <Text style={styles.paragraph}>This animal is a {animal.category}</Text>
        
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
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  pic: {
    height: 500,
    width: 500
  }
})
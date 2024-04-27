import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useFonts, WorkSans_400Regular } from '@expo-google-fonts/work-sans';

export default function Start({ navigation }) {
  const [fontsLoaded] = useFonts({
    WorkSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>All set!</Text>
      <View style={styles.mainImageContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../assets/ls1.png')} />
          <Image style={styles.image} source={require('../assets/ls2.png')} />
          <Image style={styles.image} source={require('../assets/ls3.png')} />
        </View>

        <View style={styles.imageContainer2}>
          <Image style={styles.image2} source={require('../assets/ls4.png')} />
          <Image style={styles.image2} source={require('../assets/ls5.png')} />
        </View>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../assets/ls6.png')} />
          <Image style={styles.image} source={require('../assets/ls7.png')} />
          <Image style={styles.image} source={require('../assets/ls8.png')} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.beginBtn}
        onPress={() => navigation.navigate('Home Screen')}>
        <Text style={styles.beginText}>LET'S BEGIN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#F1C013',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'WorkSans_400Regular',
    marginBottom: 20,
  },
  mainImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  imageContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    height: 100,
  },
  image2: {
    width: 165,
    height: 100,
  },
  beginBtn: {
    backgroundColor: 'white',
    width: 170,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#F1C013',
  },
  beginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F1C013',
  },
});

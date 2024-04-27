import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, WorkSans_400Regular } from '@expo-google-fonts/work-sans';
import { Card } from 'react-native-paper';

export default function DietPreferences({ navigation }) {
  const [fontsLoaded] = useFonts({
    WorkSans_400Regular,
  });

  const [diet, setDiet] = useState([
    { dietTitle: 'I eat everything', dietDefinition: 'No specific dietary preferences' },
    { dietTitle: 'Pescatarian', dietDefinition: 'Plant-based diet, including seafood' },
    { dietTitle: 'Vegetarian', dietDefinition: 'No meat' },
    { dietTitle: 'Vegan', dietDefinition: 'Plant-based diet' },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Allergies Page')}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>{item.dietTitle}</Text>
          <Text>{item.dietDefinition}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.skip}
        onPress={() => navigation.navigate('Allergies Page')}>
        <Text style={styles.skipWord}>Skip  </Text>
        <Ionicons name="arrow-forward" size={25} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>What's your diet type?</Text>
      <View style={styles.contents}>
        <FlatList
          data={diet}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 30,
  },
  skip: {
    flexDirection: 'row',
    marginTop: 35,
    marginLeft: 'auto',
  },
  skipWord: {
    fontSize: 18,
  },
  title: {
    color: '#F1C013',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 40,
    fontFamily: 'WorkSans_400Regular',
  },
  contents: {
    alignItems: 'center',
    marginTop: 30,
  },
  card: {
    width: 250,
    marginBottom: 20,
  },
  cardTitle: {
    fontWeight: 'bold',
    color: 'black',
  },
});

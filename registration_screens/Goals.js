import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, WorkSans_400Regular } from '@expo-google-fonts/work-sans';
import { Card } from 'react-native-paper';

export default function Goals({ navigation }) {
  const [fontsLoaded] = useFonts({
    WorkSans_400Regular,
  });

  const [goal, setGoal] = useState([
    { goalTitle: 'Get Inspiration', goalDefinition: 'Challenge your taste buds' },
    { goalTitle: 'Eat healthy', goalDefinition: 'Have balanced diet and stay lean' },
    { goalTitle: 'Lose weight', goalDefinition: 'Get lean without struggle' },
    { goalTitle: 'Build muscles', goalDefinition: 'Stay active and get stronger' },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Diet Preferences')}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.cardTitle}>{item.goalTitle}</Text>
          <Text>{item.goalDefinition}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.skip}
        onPress={() => navigation.navigate('Diet Preferences')}>
        <Text style={styles.skipWord}>Skip  </Text>
        <Ionicons name="arrow-forward" size={25} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>What's your diet goal?</Text>
      <View style={styles.contents}>
        <FlatList
          data={goal}
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

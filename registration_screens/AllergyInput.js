import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AllergyInput({ navigation, route }) {
  const { selectedDiet } = route.params;

  const [allergies, setAllergies] = useState('');

  const handleContinue = () => {
    console.log(allergies);
    console.log(selectedDiet);
    console.log("Allergies");
    navigation.navigate('Risk Page', { allergies: allergies.split(','), selectedDiet: selectedDiet });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.skip}
        onPress={() => navigation.navigate('Risk Page', { allergies: null, selectedDiet: selectedDiet })}>
        <Text style={styles.skipWord}>Skip  </Text>
        <Ionicons name="arrow-forward" size={25} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Enter Your Allergies</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter allergies separated by commas'
        value={allergies}
        onChangeText={setAllergies}
      />
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    fontFamily: 'Arial',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#aaa',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  skip: {
    position: 'absolute',
    top: 40,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  skipWord: {
    fontSize: 18,
    fontFamily: 'Arial',
  },
});

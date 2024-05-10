import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function AllergyInput({ navigation, route }) {
  const {selectedDiet} = route.params;

 // const [diet, setDiet] = useState(selectedDiet);
  const [allergies, setAllergies] = useState('');

  const handleContinue = () => {
    console.log(allergies); 
    console.log(selectedDiet);
    console.log("Allegies");
    navigation.navigate('Risk Page', { allergies: allergies.split(','), selectedDiet: selectedDiet});
  };
  
  

  return (
    <View style={styles.container}>
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
    backgroundColor: '#FFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#888',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

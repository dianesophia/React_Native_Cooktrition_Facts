import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default function InputIngredients({ navigation }) {
  const [inputs, setInputs] = useState([]);

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handleSearch = () => {
    const ingredientsQuery = inputs.join(',');
    navigation.navigate('Display Recipes', { ingredientsQuery });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={30} color="#333" />
        </TouchableOpacity>

        <Text style={styles.title}>What's in your fridge?</Text>

        <TouchableOpacity style={styles.addButton} onPress={handleAddInput}>
          <Text style={styles.buttonText}>+ Add Ingredient</Text>
        </TouchableOpacity>
        {inputs.map((value, index) => (
          <TextInput
            key={index}
            style={styles.input}
            placeholder={`Ingredient ${index + 1}`}
            value={value}
            onChangeText={(text) => {
              const newInputs = [...inputs];
              newInputs[index] = text;
              setInputs(newInputs);
            }}
          />
        ))}
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search Recipes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFEFBF',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  content: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  addButton: {
    backgroundColor: '#F6B100',
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  searchButton: {
    backgroundColor: 'black',
    paddingVertical: 12,
    borderRadius: 5,
    color: 'white'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

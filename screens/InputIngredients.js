import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function InputIngredients({ navigation }) {
  const [inputs, setInputs] = useState([]);

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };
  const getRecipes = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/recipes/${query}`);
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleAddInput}>
        <Text>+ADD</Text>
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

      <TouchableOpacity>
        <Text>Search Recipe</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

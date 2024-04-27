import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

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
    <View>
      <TouchableOpacity onPress={handleAddInput}>
        <Text>+ ADD</Text>
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

      <TouchableOpacity onPress={handleSearch}>
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

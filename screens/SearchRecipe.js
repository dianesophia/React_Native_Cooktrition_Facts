import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import axios from 'axios';

export default function SearchRecipe({ navigation, route }) {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const { allergies } = route.params || {};

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/recipes/${query}`);
      const filteredRecipes = response.data.filter(recipe => !containsAllergens(recipe.recipe.ingredients, allergies));
      setRecipes(filteredRecipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const containsAllergens = (ingredients, allergies) => {
    if (!ingredients || !Array.isArray(ingredients) || !allergies || !Array.isArray(allergies)) {
      return false;
    }
    return allergies.some(allergen => ingredients.some(ingredient => ingredient.text.toLowerCase().includes(allergen.toLowerCase())));
  };

  const handleSearch = (text) => {
    setQuery(text); 
    setSearch(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Search Recipe / Ingredient'
        value={search}
        onChangeText={handleSearch} 
      />

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.recipe.label}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Recipe', { recipe: item.recipe })}
          >
            <View style={styles.recipeItem}>
              <Image source={{ uri: item.recipe.image }} style={styles.recipeImage} />
              <Text style={styles.recipeTitle}>{item.recipe.label}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFEFBF',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 15, 
  },
  recipeItem: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: "row",
    padding: 5,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'center'
  },
  recipeImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginRight: 20,

  },
});

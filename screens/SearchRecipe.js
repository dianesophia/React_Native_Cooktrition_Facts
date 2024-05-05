{/*import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import axios from 'axios';

export default function SearchRecipe({ navigation, route }) {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
 // const {selectedAllergens, additionalAllergens } = route.params;


  const getRecipes = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/recipes/${query}`);
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  const handleSearch = () => {
    setQuery(search);
    setSearch('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Search Recipe / Ingredient'
        value={search}
        onChangeText={setSearch}
      />

      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.recipe.label}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Recipe', { recipe: item.recipe })}
          >
            <View style={styles.recipeItem}>
              <Text style={styles.recipeTitle}>{item.recipe.label}</Text>
              <Image source={{ uri: item.recipe.image }} style={styles.recipeImage} />
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
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
  },
  recipeItem: {
    marginBottom: 20,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recipeImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});*/}


{/*
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import axios from 'axios';

export default function SearchRecipe({ navigation,route }) {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [allergies, setAllergies] = useState([]);
  const [query, setQuery] = useState('');

  const getRecipes = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/recipes`, {
        params: {
          ingredients: query,
          selectedAllergens: allergies, // Pass allergies to the backend
        },
      });
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, [query, allergies]);

  const handleSearch = () => {
    setQuery(search);
    setSearch('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Search Recipe / Ingredient'
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.allergyContainer}>
        <TextInput
          style={styles.allergyInput}
          placeholder='Enter Allergies (comma-separated)'
          value={allergies}
          onChangeText={setAllergies}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.recipe.label}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Recipe', { recipe: item.recipe })}
          >
            <View style={styles.recipeItem}>
              <Text style={styles.recipeTitle}>{item.recipe.label}</Text>
              <Image source={{ uri: item.recipe.image }} style={styles.recipeImage} />
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
  },
  allergyContainer: {
    marginBottom: 10,
  },
  allergyInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
  },
  recipeItem: {
    marginBottom: 20,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recipeImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});

*/}

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import axios from 'axios';

export default function SearchRecipe({ navigation, route }) {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const { allergies } = route.params || {};


  const getRecipes = async () => {
    console.log('Allergies:', allergies);
    try {
      const response = await axios.get(`http://localhost:5000/recipes/${query}`);
      const filteredRecipes = response.data.filter(recipe => !containsAllergens(recipe.recipe.ingredients, allergies));
      setRecipes(filteredRecipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  const containsAllergens = (ingredients, allergies) => {
  if (!ingredients || !Array.isArray(ingredients) || !allergies || !Array.isArray(allergies)) {
    // Handle case where ingredients or allergies are undefined or not arrays
    return false;
  }
  return allergies.some(allergen => ingredients.some(ingredient => ingredient.text.toLowerCase().includes(allergen.toLowerCase())));
};

  const handleSearch = () => {
    setQuery(search);
    setSearch('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Search Recipe / Ingredient'
        value={search}
        onChangeText={setSearch}
      />

      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.recipe.label}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Recipe', { recipe: item.recipe })}
          >
            <View style={styles.recipeItem}>
              <Text style={styles.recipeTitle}>{item.recipe.label}</Text>
              <Image source={{ uri: item.recipe.image }} style={styles.recipeImage} />
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
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
  },
  recipeItem: {
    marginBottom: 20,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recipeImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});

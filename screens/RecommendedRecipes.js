{/*import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default function RecommendedRecipes({ navigation, route }) {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const { allergies } = route.params || {};
  const { selectedRisk, selectedDiet } = route.params || {};

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        risk_category: selectedRisk,
        dietary_preference: selectedDiet,
      });
      if (response.data && response.data.predictions) {
        setRecipes(response.data.predictions);
      } else {
        console.log('No recommendations found');
      }
    } catch (error) {
      console.error('Error fetching recommended recipes:', error);
    }
  };



//reserve
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
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Recommended Recipes</Text>
      </View>

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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 40,
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 15, 
    marginLeft: 10,
    marginBottom: 15,
  },
  backButton: {
    marginRight: 10,
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
  title: {
    fontSize: 24,
    marginBottom: 10,
    marginLeft: 30,
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bold',
  },
});
*/}
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default function RecommendedRecipes({ navigation, route }) {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const { allergies } = route.params || {};
  const { risk, diet } = route.params || {};
  let risk1 = 1;
  console.log(risk);
  console.log(diet)

  useEffect(() => {
    handlePredict();
  }, [query]);

  const handlePredict = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          risk_category: risk1,
          dietary_preference: diet,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }

      const data = await response.json();
      console.log('API Response:', data); // Log the API response to see if it contains the recommended recipes

      setRecipes(data.predictions);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const handleSearch = (text) => {
    setQuery(text); 
  };


  const renderRecipe = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Recipe', { recipe: item})}
    >
      <View style={styles.recipeItem}>
        <Image source={{ uri: item.image }} style={styles.recipeImage} />
        <Text style={styles.recipeTitle}>{item.recipe_name}</Text>
      </View>
    </TouchableOpacity>
  );
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Recommended Recipes</Text>
      </View>

    {/*  <FlatList
  
  data={recipes}
  keyExtractor={(item, index) => index.toString()} // Change the keyExtractor
  renderItem={({renderRecipe}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Recipe', { recipe: item.recipe })}
    >
      <View style={styles.recipeItem}>
        <Image source={{ uri: item.recipe.image }} style={styles.recipeImage} />
        <Text style={styles.recipeTitle}>{item.recipe.label}</Text>
      </View>
    </TouchableOpacity>
  )}
/>*/}


<FlatList
  data={recipes}
  keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
  renderItem={renderRecipe}
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
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
  title: {
    fontSize: 24,
    marginBottom: 10,
    marginLeft: 30,
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bold',
  },
});

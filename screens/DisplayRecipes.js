import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import axios from 'axios';

export default function DisplayRecipes({ route }) {
  const [recipes, setRecipes] = useState([]);
  const { ingredientsQuery } = route.params;

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/recipes?ingredients=${ingredientsQuery}`);
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, [ingredientsQuery]);

  return (
    <View style={styles.container}>
    {recipes.map((recipe) => (
  <View key={recipe.recipe.label}>
    <Text>{recipe.recipe.label}</Text>
    <Image source={{ uri: recipe.recipe.image }} style={styles.recipeImage} />
  </View>
))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  recipeImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});

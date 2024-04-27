import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';

export default function DisplayRecipes({ route, navigation }) {
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


  const navigateToRecipe = (recipe) =>{
    navigation.navigate('Recipe', {recipe});
  };

  const renderItem = ({item}) => {
    return(
    <TouchableOpacity onPress={() => navigateToRecipe(item.recipe)}>
        <View>
        <Text>{item.recipe.label}</Text>
    <Image source={{ uri: item.recipe.image }} style={styles.recipeImage} />
        </View>
    </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
        <FlatList
        data={recipes}
        keyExtractor={(item,index) => index.toString()}
        renderItem={renderItem}
        />
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

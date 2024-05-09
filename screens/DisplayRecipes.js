import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

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
      <TouchableOpacity
      onPress={() => navigation.navigate('Recipe', { recipe: item.recipe })}
    >
      <View style={styles.recipeItem}>
        <Image source={{ uri: item.recipe.image }} style={styles.recipeImage} />
        <Text style={styles.recipeTitle}>{item.recipe.label}</Text>
      </View>
    </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={30} color="#333" />
        </TouchableOpacity>

        <Text style={styles.title}>Available Recipes</Text>
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
    backgroundColor: '#FFEFBF',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    marginLeft: 30, 
    textAlign: 'center',
    padding: 20,
    fontStyle: 'bold'
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

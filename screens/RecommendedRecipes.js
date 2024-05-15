import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const RecommendedRecipes = ({ navigation, route }) => {
  const { recipes } = route.params || {};

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Recipe', { recipe: item.recipe })}>
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
        <Ionicons name="arrow-back" size={30} color="#333" />
      </TouchableOpacity>

      <Text style={styles.title}>Recommended Recipes</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

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
    fontWeight: 'bold',
  },
  recipeItem: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 5,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'center',
  },
  recipeImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginRight: 20,
  },
});

export default RecommendedRecipes;

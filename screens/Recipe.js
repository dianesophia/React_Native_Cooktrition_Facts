import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function Recipe({ route }) {
  const { recipe } = route.params;

  const handleUrlPress = () => {
    Linking.openURL(recipe.url);
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{recipe.label}</Text>
          <Text style={styles.source}>Source: {recipe.source}</Text>
          <TouchableOpacity onPress={handleUrlPress}>
            <Text style={styles.url}>URL: {recipe.url}</Text>
          </TouchableOpacity>
          <Text style={styles.yield}>Yield: {recipe.yield}</Text>
          <Text style={styles.calories}>Calories: {recipe.calories.toFixed(2)}</Text>
          <Text style={styles.ingredientsTitle}>Ingredients:</Text>
          {recipe.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.ingredient}>
              - {ingredient.text}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEFBF',
    padding: 20,
  },
  recipeImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  source: {
    fontSize: 16,
    marginBottom: 5,
  },
  url: {
    fontSize: 16,
    marginBottom: 5,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  yield: {
    fontSize: 16,
    marginBottom: 5,
  },
  calories: {
    fontSize: 16,
    marginBottom: 10,
  },
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 5,
  },
});

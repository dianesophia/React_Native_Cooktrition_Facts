import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, FlatList, Image, ScrollView } from 'react-native';

export default function Try({ navigation }) {
  const [riskCategory, setRiskCategory] = useState('');
  const [dietaryPreference, setDietaryPreference] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handlePredict = async () => {
    if (isNaN(riskCategory) || riskCategory < 1 || riskCategory > 7) {
      Alert.alert('Invalid Input', 'Please enter a risk category between 1 and 7.');
      return;
    }
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          risk_category: riskCategory,
          dietary_preference: dietaryPreference,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }

      const data = await response.json();
      console.log('API Response:', data);

      setRecipes(data.predictions);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const renderRecipe = ({ item }) => (
    <View style={styles.recipeItem}>
      <Text style={styles.recipeName}>{item.recipe_name}</Text>
      <Image source={{ uri: item.image }} style={styles.recipeImage} />

      <View style={styles.nutritionCategory}>
        <Text style={styles.categoryTitle}>Micronutrients</Text>
        <Text style={styles.facts}>Cholesterol: {item.totalNutrients?.CHOLE?.quantity?.toFixed(2) ?? 'N/A'} mg</Text>
        <Text style={styles.facts}>Sodium: {item.totalNutrients?.NA?.quantity?.toFixed(2) ?? 'N/A'} mg</Text>
        <Text style={styles.facts}>Calcium: {item.totalNutrients?.CA?.quantity?.toFixed(2) ?? 'N/A'} mg</Text>
        <Text style={styles.facts}>Magnesium: {item.totalNutrients?.MG?.quantity?.toFixed(2) ?? 'N/A'} mg</Text>
        <Text style={styles.facts}>Potassium: {item.totalNutrients?.K?.quantity?.toFixed(2) ?? 'N/A'} mg</Text>
        <Text style={styles.facts}>Iron: {item.totalNutrients?.FE?.quantity?.toFixed(2) ?? 'N/A'} mg</Text>
        <Text style={styles.facts}>Zinc: {item.totalNutrients?.ZN?.quantity?.toFixed(2) ?? 'N/A'} mg</Text>
      </View>
      <View style={styles.nutritionCategory}>
        <Text style={styles.categoryTitle}>Vitamins</Text>
        <Text style={styles.facts}>Vitamin A: {item.totalNutrients?.VITA_RAE?.quantity?.toFixed(2) ?? 'N/A'} µg</Text>
        <Text style={styles.facts}>Vitamin C: {item.totalNutrients?.VITC?.quantity?.toFixed(2) ?? 'N/A'} mg</Text>
        <Text style={styles.facts}>Vitamin E: {item.totalNutrients?.TOCPHA?.quantity?.toFixed(2) ?? 'N/A'} mg</Text>
        <Text style={styles.facts}>Vitamin K: {item.totalNutrients?.VITK1?.quantity?.toFixed(2) ?? 'N/A'} µg</Text>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Risk Category (Enter a number 1-7):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={riskCategory}
        onChangeText={setRiskCategory}
      />
      <Text style={styles.label}>Dietary Preference (e.g., Vegan, Vegetarian, etc.):</Text>
      <TextInput
        style={styles.input}
        value={dietaryPreference}
        onChangeText={setDietaryPreference}
      />
      <Button title="Get Recommendations" onPress={handlePredict} />
      <FlatList
        data={recipes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderRecipe}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  recipeItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  recipeName: {
    fontSize: 16,
    marginBottom: 8,
  },
  recipeImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  nutritionCategory: {
    marginBottom: 8,
  },
  categoryTitle: {
    fontWeight: 'bold',
  },
  facts: {
    fontSize: 14,
  },
});

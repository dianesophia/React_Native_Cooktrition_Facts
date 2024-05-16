import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Linking, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Recipe({ navigation, route }) {
  const { recipe } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const handleUrlPress = () => {
    Linking.openURL(recipe.url);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>{recipe.label}</Text>
      </View>
      <Image source={{ uri: recipe.image }} style={styles.recipeImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.source}>Source: {recipe.source}</Text>
        <TouchableOpacity onPress={handleUrlPress}>
          <Text style={styles.url}>Instructions/ More Information</Text>
        </TouchableOpacity>
        <Text style={styles.yield}>Yield: {recipe.yield}</Text>
        <Text style={styles.sectionTitle}>Ingredients:</Text>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>{ingredient.text}</Text>
        ))}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.customButton}>
            <Text style={styles.buttonText}>View Nutrition Facts</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Nutrition Facts:</Text>
              <View style={styles.nutritionContainer}>
                <View style={styles.nutritionCategory}>
                  <Text style={styles.categoryTitle}>General</Text>
                  <Text style={styles.facts}>Calories: {recipe.calories.toFixed(2)}</Text>
                  <Text style={styles.facts}>Yield: {recipe.yield}</Text>
                </View>
                <View style={styles.nutritionCategory}>
                  <Text style={styles.categoryTitle}>Macronutrients</Text>
                  <Text style={styles.facts}>Fat: {recipe.totalNutrients.FAT.quantity.toFixed(2)}g</Text>
                  <Text style={styles.facts}>Carbs: {recipe.totalNutrients.CHOCDF.quantity.toFixed(2)}g</Text>
                  <Text style={styles.facts}>Protein: {recipe.totalNutrients.PROCNT.quantity.toFixed(2)}g</Text>
                  <Text style={styles.facts}>Fiber: {recipe.totalNutrients.FIBTG.quantity.toFixed(2)}g</Text>
                </View>
                <View style={styles.nutritionCategory}>
                  <Text style={styles.categoryTitle}>Micronutrients</Text>
                  <Text style={styles.facts}>Cholesterol: {recipe.totalNutrients.CHOLE.quantity.toFixed(2)}mg</Text>
                  <Text style={styles.facts}>Sodium: {recipe.totalNutrients.NA.quantity.toFixed(2)}mg</Text>
                  <Text style={styles.facts}>Calcium: {recipe.totalNutrients.CA.quantity.toFixed(2)}mg</Text>
                  <Text style={styles.facts}>Magnesium: {recipe.totalNutrients.MG.quantity.toFixed(2)}mg</Text>
                  <Text style={styles.facts}>Potassium: {recipe.totalNutrients.K.quantity.toFixed(2)}mg</Text>
                  <Text style={styles.facts}>Iron: {recipe.totalNutrients.FE.quantity.toFixed(2)}mg</Text>
                  <Text style={styles.facts}>Zinc: {recipe.totalNutrients.ZN.quantity.toFixed(2)}mg</Text>
                </View>
                <View style={styles.nutritionCategory}>
                  <Text style={styles.categoryTitle}>Vitamins</Text>
                  <Text style={styles.facts}>Vitamin A: {recipe.totalNutrients.VITA_RAE.quantity.toFixed(2)}µg</Text>
                  <Text style={styles.facts}>Vitamin C: {recipe.totalNutrients.VITC.quantity.toFixed(2)}mg</Text>
                  <Text style={styles.facts}>Vitamin E: {recipe.totalNutrients.TOCPHA.quantity.toFixed(2)}mg</Text>
                  <Text style={styles.facts}>Vitamin K: {recipe.totalNutrients.VITK1.quantity.toFixed(2)}µg</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF3E0',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  recipeImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Arial',
  },
  source: {
    fontSize: 16,
    color: '#555',
    fontFamily: 'Arial',
  },
  url: {
    fontSize: 16,
    color: '#007BFF',
    textDecorationLine: 'underline',
    fontFamily: 'Arial',
    marginBottom: 15,
  },
  yield: {
    fontSize: 16,
    color: '#555',
    fontFamily: 'Arial',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Arial',
    marginBottom: 10,
  },
  ingredient: {
    fontSize: 16,
    color: '#555',
    fontFamily: 'Arial',
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
  customButton: {
    backgroundColor: '#FFEFBF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    fontFamily: 'Arial',
    marginBottom: 20,
  },
  nutritionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  nutritionCategory: {
    width: '48%',
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Arial',
    marginBottom: 10,
  },
  facts: {
    fontSize: 16,
    color: '#555',
    fontFamily: 'Arial',
    marginBottom: 5,
  },
  closeButton: {
    backgroundColor: '#FFEFBF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

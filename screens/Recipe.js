import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Linking, Modal, Button } from 'react-native';

export default function Recipe({ route }) {
  const { recipe } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const handleUrlPress = () => {
    Linking.openURL(recipe.url);
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>{recipe.label}</Text>
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
            <Button title="View Nutrition Facts" onPress={() => setModalVisible(true)} />
          </View>
          
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Nutrition Facts:</Text>
              <Text style={styles.facts}>Calories: {recipe.calories.toFixed(2)}</Text>
              <Text style={styles.facts}>Fat: {recipe.totalNutrients.FAT.quantity.toFixed(2)}g</Text>
              <Text style={styles.facts}>Carbs: {recipe.totalNutrients.CHOCDF.quantity.toFixed(2)}g</Text>
              <Text style={styles.facts}>Protein: {recipe.totalNutrients.PROCNT.quantity.toFixed(2)}g</Text>
              <Text style={styles.facts}>Fiber: {recipe.totalNutrients.FIBTG.quantity.toFixed(2)}g</Text>
              <Text style={styles.facts}>Cholesterol: {recipe.totalNutrients.CHOLE.quantity.toFixed(2)}mg</Text>
              <Text style={styles.facts}>Sodium: {recipe.totalNutrients.NA.quantity.toFixed(2)}mg</Text>
              <Text style={styles.facts}>Calcium: {recipe.totalNutrients.CA.quantity.toFixed(2)}mg</Text>
              <Text style={styles.facts}>Magnesium: {recipe.totalNutrients.MG.quantity.toFixed(2)}mg</Text>
              <Text style={styles.facts}>Potassium: {recipe.totalNutrients.K.quantity.toFixed(2)}mg</Text>
              <Text style={styles.facts}>Iron: {recipe.totalNutrients.FE.quantity.toFixed(2)}mg</Text>
              <Text style={styles.facts}>Zinc: {recipe.totalNutrients.ZN.quantity.toFixed(2)}mg</Text>
              <Text style={styles.facts}>Vitamin A: {recipe.totalNutrients.VITA_RAE.quantity.toFixed(2)}µg</Text>
              <Text style={styles.facts}>Vitamin C: {recipe.totalNutrients.VITC.quantity.toFixed(2)}mg</Text>
              <Text style={styles.facts}>Vitamin E: {recipe.totalNutrients.TOCPHA.quantity.toFixed(2)}mg</Text>
              <Text style={styles.facts}>Vitamin K: {recipe.totalNutrients.VITK1.quantity.toFixed(2)}µg</Text>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </Modal>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  source: {
    fontSize: 16,
    marginBottom: 5,
  },
  url: {
    fontSize: 16,
    marginBottom: 10,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  yield: {
    fontSize: 16,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 5,
  },
  facts: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333', 
  },
});

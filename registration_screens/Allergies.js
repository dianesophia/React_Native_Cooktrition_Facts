import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, WorkSans_400Regular } from '@expo-google-fonts/work-sans';

export default function Allergies({ navigation }) {
  const [fontsLoaded] = useFonts({
    WorkSans_400Regular,
  });

  const [selectedAllergens, setSelectedAllergens] = useState([]);

  const toggleAllergen = (allergen) => {
    if (selectedAllergens.includes(allergen)) {
      setSelectedAllergens(selectedAllergens.filter(item => item !== allergen));
    } else {
      setSelectedAllergens([...selectedAllergens, allergen]);
    }
  };

  const isAllergenSelected = (allergen) => {
    return selectedAllergens.includes(allergen);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.skip}
        onPress={() => navigation.navigate('Risk Page')}>
        <Text style={styles.skipWord}>Skip  </Text>
        <Ionicons name="arrow-forward" size={25} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Any allergies?</Text>

      <View style={styles.cardContainer}>
        <View style={styles.cardRow}>
          <TouchableOpacity 
            style={[styles.card, isAllergenSelected('Egg') && styles.selectedCard]}
            onPress={() => toggleAllergen('Egg')}>
            <View style={[styles.imageContainer, isAllergenSelected('Egg') && styles.selectedImageContainer]}>
              <Image style={styles.image} source={require("../assets/egg.png")} />
            </View>
            <Text style={styles.cardText}>Egg</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.card, isAllergenSelected('Milk') && styles.selectedCard]}
            onPress={() => toggleAllergen('Milk')}>
            <View style={[styles.imageContainer, isAllergenSelected('Milk') && styles.selectedImageContainer]}>
              <Image style={styles.image} source={require("../assets/milk.png")} />
            </View>
            <Text style={styles.cardText}>Milk</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.card, isAllergenSelected('Nut') && styles.selectedCard]}
            onPress={() => toggleAllergen('Nut')}>
            <View style={[styles.imageContainer, isAllergenSelected('Nut') && styles.selectedImageContainer]}>
              <Image style={styles.image} source={require("../assets/nut.png")} />
            </View>
            <Text style={styles.cardText}>Nut</Text>
          </TouchableOpacity>
          </View>

        <View style={styles.cardRow}>
        <TouchableOpacity 
            style={[styles.card, isAllergenSelected('Soybean') && styles.selectedCard]}
            onPress={() => toggleAllergen('Soybean')}>
            <View style={[styles.imageContainer, isAllergenSelected('Soybean') && styles.selectedImageContainer]}>
              <Image style={styles.image} source={require("../assets/soybean.png")} />
            </View>
            <Text style={styles.cardText}>Soybean</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.card, isAllergenSelected('Shrimp') && styles.selectedCard]}
            onPress={() => toggleAllergen('Shrimp')}>
            <View style={[styles.imageContainer, isAllergenSelected('Shrimp') && styles.selectedImageContainer]}>
              <Image style={styles.image} source={require("../assets/shrimp.png")} />
            </View>
            <Text style={styles.cardText}>Shrimp</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.card, isAllergenSelected('Wheat') && styles.selectedCard]}
            onPress={() => toggleAllergen('Wheat')}>
            <View style={[styles.imageContainer, isAllergenSelected('Wheat') && styles.selectedImageContainer]}>
              <Image style={styles.image} source={require("../assets/wheat.png")} />
            </View>
            <Text style={styles.cardText}>Wheat</Text>
          </TouchableOpacity>
        </View>


        {/* Add more rows of allergen options */}
      </View>

      <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate('Risk Page')}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  skip: {
    flexDirection: 'row',
    marginTop: 35,
    marginLeft: 'auto',
    alignSelf: 'flex-end',
  },
  skipWord: {
    fontSize: 18,
  },
  title: {
    color: '#F1C013',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 40,
    fontFamily: 'WorkSans_400Regular',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardContainer: {
    alignItems: 'center',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    width: 80,
    height: 80,
    padding: 10,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 100,
    marginBottom: 50,
  },
  cardText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  image: { 
    width: 20, 
    height: 20, 
  },
  imageContainer: {
    backgroundColor:'#F8F8F8',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    overflow: 'hidden',
    borderColor: '#F5F5F5',
    borderWidth: 2, 
  },
  selectedImageContainer: {
    backgroundColor: '#FFEFBF',
  },
  continueBtn: {
    backgroundColor: '#FFFFFF',
    width: 125,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 5,
    marginTop: 20,
  },
  continueText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F1C013',
  },
});

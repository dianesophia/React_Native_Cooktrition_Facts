{/*import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

function Home({ navigation, route }) {
  const {selectedDiet, allergies, selectedRisk } = route.params || {};

  const handleGoToSearch = () => {
    navigation.navigate("Search Recipe", { allergies: allergies });
    console.log(allergies);
    console.log("Home");
  }


  const handleRecommendRecipes = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        risk_category: selectedRisk,
        dietary_preference: selectedDiet,
     //   allergies: allergies  // Pass the user's allergies to the server
      });
      // Assuming response.data.recommendations is an array of recommended recipes
      navigation.navigate("Recommended Recipes", { recipes: response.data.recommendations });
    } catch (error) {
      console.error('Error fetching recommended recipes:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
      <View style={styles.row}>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>Hello, User firstname</Text>
            <Text style={styles.userInfoSubText}>What do you want to cook today?</Text>
          </View>
          <View style={styles.ingredientTextContainer}>
            <Image
              source={require('../assets/egg.png')}
              style={styles.imageStyle}
            />
            </View>
        </View>
        <TouchableOpacity style={styles.searchButton} onPress={handleGoToSearch}>
          <Ionicons name="search" size={24} color="black" />
          <Text style={styles.searchText}>Search for Recipes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.row}>
          <View style={styles.ingredientTextContainer}>
            <Image
              source={require('../assets/pot.png')}
              style={styles.imageStyle}
            />
            <View style={styles.textContainer}>
              <Text style={styles.ingredientText}>Don’t have idea what to cook based</Text>
              <Text style={styles.ingredientText}>on the ingredients that you have? </Text>
              <Text style={styles.ingredientSubText}>We've got your back. List your ingredients.</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.inputButton} onPress={() => navigation.navigate("Input Ingredients")}>
          <Text style={styles.inputIngredientsButtonText}>Input Ingredients</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.seeAllButton} onPress={handleRecommendRecipes}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>

        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              source={require('../assets/img_1.png')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Spaghetti Bolognese</Text>
            <Text style={styles.cardSubText}>Pasta</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require('../assets/img.png')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Beef Chuck Steak</Text>
            <Text style={styles.cardSubText}>Meat</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: '#FFEFBF',
    paddingVertical: height * 0.0015,
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.05,
  },
  userInfo: {
    marginBottom: height * 0.025,
  },
  userInfoText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: 'black',
  },
  userInfoSubText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: 'black',
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1C013',
    borderRadius: width * 0.08,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02,
    marginTop: height * 0.02,
    elevation: 3,
  },
  inputButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1C013',
    borderRadius: width * 0.08,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02,
    marginTop: height * 0.02,
    elevation: 3,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  searchText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: width * 0.02,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: height * 0.05,
    paddingHorizontal: width * 0.05,
  },
  ingredientTextContainer: {
    flexDirection: 'row',
    marginBottom: height * 0.025,
  },
  imageStyle: {
    width: width * 0.15,
    height: width * 0.15,

  },
  textContainer: {
    marginLeft: width * 0.02,
  },
  ingredientText: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: 'black',
  },
  ingredientSubText: {
    fontSize: width * 0.035,
    color: 'black',
  },
  inputIngredientsButton: {
    width: width * 0.4,
    backgroundColor: '#F1C013',
    borderRadius: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height * 0.02,
    elevation: 3,
    marginBottom: height * 0.03,
    flexWrap: 'wrap',
  },
  inputIngredientsButtonText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: 'black',
  },
  seeAllButton: {
    alignSelf: 'flex-end',
    marginTop: height * 0.02,
  },
  seeAllText: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: 'black',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.02,
  },
  card: {
    width: width * 0.4,
    backgroundColor: 'white',
    borderRadius: width * 0.03,
    padding: width * 0.03,
    marginBottom: height * 0.02,
    elevation: 3,
    borderColor: 'black',
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: width * 0.03,
    marginBottom: height * 0.02,
  },
  cardText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: 'black',
  },
  cardSubText: {
    fontSize: width * 0.035,
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
});

export default Home;
*/}

{/*
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

function Home({ navigation, route }) {
  const { selectedDiet, allergies, selectedRisk } = route.params || {};
  const [recommendedRecipes, setRecommendedRecipes] = useState([]);

  useEffect(() => {
    // Fetch recommended recipes when the component mounts
    fetchRecommendedRecipes();
  }, []);

  const handleGoToSearch = () => {
    navigation.navigate("Search Recipe", { allergies: allergies });
    console.log(allergies);
    console.log("Home");
  }

  const fetchRecommendedRecipes = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8081/predict', {
        risk_category: selectedRisk,
        dietary_preference: selectedDiet,
      });
      if (response.data && response.data.recommendations) {
        setRecommendedRecipes(response.data.recommendations);
      } else {
        console.log('No recommendations found');
      }
    } catch (error) {
      console.error('Error fetching recommended recipes:', error);
    }
  };
  

  const handleRecommendRecipes = () => {
    navigation.navigate("Recommended Recipes", { recipes: recommendedRecipes });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.row}>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>Hello, User firstname</Text>
            <Text style={styles.userInfoSubText}>What do you want to cook today?</Text>
          </View>
          <View style={styles.ingredientTextContainer}>
            <Image
              source={require('../assets/egg.png')}
              style={styles.imageStyle}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.searchButton} onPress={handleGoToSearch}>
          <Ionicons name="search" size={24} color="black" />
          <Text style={styles.searchText}>Search for Recipes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.row}>
          <View style={styles.ingredientTextContainer}>
            <Image
              source={require('../assets/pot.png')}
              style={styles.imageStyle}
            />
            <View style={styles.textContainer}>
              <Text style={styles.ingredientText}>Don’t have idea what to cook based</Text>
              <Text style={styles.ingredientText}>on the ingredients that you have? </Text>
              <Text style={styles.ingredientSubText}>We've got your back. List your ingredients.</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.inputButton} onPress={() => navigation.navigate("Input Ingredients")}>
          <Text style={styles.inputIngredientsButtonText}>Input Ingredients</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.seeAllButton} onPress={handleRecommendRecipes}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>

        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              source={require('../assets/img_1.png')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Spaghetti Bolognese</Text>
            <Text style={styles.cardSubText}>Pasta</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require('../assets/img.png')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Beef Chuck Steak</Text>
            <Text style={styles.cardSubText}>Meat</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: '#FFEFBF',
    paddingVertical: height * 0.0015,
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.05,
  },
  userInfo: {
    marginBottom: height * 0.025,
  },
  userInfoText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: 'black',
  },
  userInfoSubText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: 'black',
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1C013',
    borderRadius: width * 0.08,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02,
    marginTop: height * 0.02,
    elevation: 3,
  },
  inputButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1C013',
    borderRadius: width * 0.08,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02,
    marginTop: height * 0.02,
    elevation: 3,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  searchText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: width * 0.02,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: height * 0.05,
    paddingHorizontal: width * 0.05,
  },
  ingredientTextContainer: {
    flexDirection: 'row',
    marginBottom: height * 0.025,
  },
  imageStyle: {
    width: width * 0.15,
    height: width * 0.15,

  },
  textContainer: {
    marginLeft: width * 0.02,
  },
  ingredientText: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: 'black',
  },
  ingredientSubText: {
    fontSize: width * 0.035,
    color: 'black',
  },
  inputIngredientsButton: {
    width: width * 0.4,
    backgroundColor: '#F1C013',
    borderRadius: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height * 0.02,
    elevation: 3,
    marginBottom: height * 0.03,
    flexWrap: 'wrap',
  },
  inputIngredientsButtonText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: 'black',
  },
  seeAllButton: {
    alignSelf: 'flex-end',
    marginTop: height * 0.02,
  },
  seeAllText: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: 'black',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.02,
  },
  card: {
    width: width * 0.4,
    backgroundColor: 'white',
    borderRadius: width * 0.03,
    padding: width * 0.03,
    marginBottom: height * 0.02,
    elevation: 3,
    borderColor: 'black',
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: width * 0.03,
    marginBottom: height * 0.02,
  },
  cardText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: 'black',
  },
  cardSubText: {
    fontSize: width * 0.035,
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
});

export default Home;

*/}


import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

function Home({ navigation, route }) {
  const { selectedDiet, allergies, selectedRisk } = route.params || {};
  const [recommendedRecipes, setRecommendedRecipes] = useState([]);

  let diet, risk;

  switch(selectedDiet){
    case "I eat everything" : diet = 4; break;
    case "Pescatarian" : diet = 3; break;
    case "Vegetarian" : diet = 2; break;
    case "Vegan" : diet = 1; break;
  }

  switch(selectedRisk){
    case "Diabete" : risk = 1; break;
    case "Cholesterol": risk = 2; break;
    case "Hypertension" :risk = 3; break;
    case "Osteoarthritis" : risk = 4; break;
    case "Kidney Disease" : risk = 5; break;
    case "Liver Disease" : risk = 6; break;
    case "Heart Disease" : risk = 7; break;

  }

  const handleGoToSearch = () => {
    navigation.navigate("Search Recipe", { allergies: allergies });
    console.log(allergies);
    console.log("Home");
  }

  const handleGoInputIngriedients = () => {
    navigation.navigate("Input Ingredients", { allergies: allergies });
    console.log(allergies);
  }

  const handleLogOut = () =>{
    navigation.navigate("Login Page")
  }

  
  
  const handleRecommendRecipes = () => {
    navigation.navigate("Recommended Recipes", { 
    risk : risk,
    diet: diet,
    allergies: allergies,
    });
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.row}>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>Hello, User firstname</Text>
            <Text style={styles.userInfoSubText}>What do you want to cook today?</Text>
          </View>
          <Image
            source={require('../assets/egg.png')}
            style={styles.userImage}
          />
        </View>
        <TouchableOpacity style={styles.searchButton} onPress={handleGoToSearch}>
          <Ionicons name="search" size={24} color="black" />
          <Text style={styles.searchText}>Search for Recipes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.cardContainer}>
          <Image
            source={require('../assets/pot.png')}
            style={styles.imageStyle}
          />
          <View style={styles.textContainer}>
            <Text style={styles.ingredientText}>Don’t have an idea what to cook based on the ingredients you have?</Text>
            <Text style={styles.ingredientSubText}>We've got your back. List your ingredients.</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.inputButton} onPress={handleGoInputIngriedients}>
          <Text style={styles.inputIngredientsButtonText}>Input Ingredients</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.seeAllButton} onPress={handleRecommendRecipes}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>

        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              source={require('../assets/img_1.png')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Spaghetti Bolognese</Text>
            <Text style={styles.cardSubText}>Pasta</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require('../assets/img.png')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Beef Chuck Steak</Text>
            <Text style={styles.cardSubText}>Meat</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.logOutButton} onPress={handleLogOut}>
        <Text style={styles.logOutText}>Log Out</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: '#F9F9F9',
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.05,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
  },
  userInfo: {
    flex: 1,
  },
  userInfoText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#333',
  },
  userInfoSubText: {
    fontSize: width * 0.045,
    color: '#666',
  },
  userImage: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: width * 0.075,
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1C40F',
    borderRadius: width * 0.05,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.015,
    marginTop: height * 0.02,
    elevation: 3,
  },
  searchText: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: width * 0.02,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.05,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.025,
    backgroundColor: '#FFF9E6',
    padding: width * 0.04,
    borderRadius: 15,
    elevation: 3,
  },
  imageStyle: {
    width: width * 0.15,
    height: width * 0.15,
    marginRight: width * 0.04,
  },
  textContainer: {
    flex: 1,
  },
  ingredientText: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: '#333',
  },
  ingredientSubText: {
    fontSize: width * 0.04,
    color: '#700',
  },
  inputButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1C40F',
    borderRadius: width * 0.05,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.015,
    marginTop: height * 0.02,
    justifyContent: 'center',
    elevation: 3,
  },
  inputIngredientsButtonText: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: 'black',
  },
  seeAllButton: {
    alignSelf: 'flex-end',
    marginTop: height * 0.02,
  },
  seeAllText: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15, 
  },
  card: {
    width: width * 0.4,
    backgroundColor: 'white',
    borderRadius: width * 0.03,
    padding: width * 0.03,
    marginBottom: height * 0.02,
    elevation: 3,
    borderColor: '#EEE',
    borderWidth: 1,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: width * 0.03,
    marginBottom: height * 0.02,
  },
  cardText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubText: {
    fontSize: width * 0.035,
    color: '#700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logOutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',   
    borderRadius: 100,
    padding: width * 0.04,
    elevation: 3,
    height: 10,
  },
  logOutText: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Home;

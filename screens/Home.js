import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

function Home({ navigation, route }) {
  const { allergies } = route.params || {};

  const handleGoToSearch = () => {
    navigation.navigate("Search Recipe", { allergies: allergies });
    console.log(allergies);
    console.log("Home");
  }

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

        <TouchableOpacity style={styles.seeAllButton} onPress={handleGoToSearch}>
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

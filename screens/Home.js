import React from 'react';
import { View, Text, Button, TouchableOpacity , StyleSheet} from 'react-native';  

function Home({ navigation, route }) {


  const { selectedDiet, allergies, selectedRisk } = route.params || {};

  const handleGoToSearch = () => {
    navigation.navigate("Search Recipe",{allergies: allergies});
    console.log(allergies);
    console.log("Home");
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <TouchableOpacity onPress={handleGoToSearch}>
        <Text>Search Recipe</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Input Ingredients")}>
        <Text>Input Ingredients</Text>
      </TouchableOpacity>


    </View>
  );
}


export default Home;

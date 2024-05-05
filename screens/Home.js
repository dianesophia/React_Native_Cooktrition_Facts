import React from 'react';
import { View, Text, Button, TouchableOpacity , StyleSheet} from 'react-native';  

function Home({ navigation, route }) {


  const {selectedDiet, allergies, selectedRisk} = route.params || {};

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

      <TouchableOpacity onPress={() => navigation.navigate("User Information", 
            { selectedRisk: selectedRisk, selectedDiet: selectedDiet, allergies: allergies})}>
        <Text>USER INFORMATION</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login Page")}>
        <Text>lOG OUT</Text>
      </TouchableOpacity>


    </View>
  );
}


export default Home;

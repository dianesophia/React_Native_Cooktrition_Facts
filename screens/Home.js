import React from 'react';
import { View, Text, Button, TouchableOpacity , StyleSheet} from 'react-native';  

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Search Recipe")}>
        <Text>Search Recipe</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Input Ingredients")}>
        <Text>Input Ingredients</Text>
      </TouchableOpacity>


    </View>
  );
}


export default Home;

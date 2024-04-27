import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GetStarted from './screens/getStarted';
import Login from './login_register_Screen/Login';
import Register from './login_register_Screen/Register';
import Goals from './registration_screens/Goals';
import DietPreferences from './registration_screens/DietPreferences';
import Allergies from './registration_screens/Allergies';
import Risk from './registration_screens/Risk';
import Start from './screens/Start';
import Home from './screens/Home';
import SearchRecipe from './screens/SearchRecipe';
import Recipe from './screens/Recipe'
import InputIngredients from './screens/InputIngredients';

import userInformation from './userInformation';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function homeScreen() {
  return (
    <Drawer.Navigator
    >
      <Drawer.Screen name="Home Page" component={Home} />
      <Drawer.Screen name="Log out" component={Login} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login Page"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name = "Get Started" component = {GetStarted} />
        <Stack.Screen name = "Login Page" component = {Login} />
        <Stack.Screen name = "Registration Page" component = {Register} />
        <Stack.Screen name = "Goal Page" component = {Goals} />
        <Stack.Screen name = "Diet Preferences" component = {DietPreferences} />
        <Stack.Screen name = "Allergies Page" component = {Allergies} />
        <Stack.Screen name = "Risk Page" component = {Risk} />
        <Stack.Screen name = "Home Screen" component = {homeScreen} />
        <Stack.Screen name = "Start Page" component = {Start} />
        <Stack.Screen name = "Search Recipe" component = {SearchRecipe}/>
        <Stack.Screen name = "User Imformation" component = {userInformation}/>
        <Stack.Screen name = "Recipe" component={Recipe}/>
        <Stack.Screen name = "Input Ingredients" component={InputIngredients}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

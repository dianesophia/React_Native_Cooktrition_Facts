import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import Recipe from './screens/Recipe';
import InputIngredients from './screens/InputIngredients';
import DisplayRecipes from './screens/DisplayRecipes';
import AllergyInput from './registration_screens/AllergyInput';

import userInformation from './userInformation';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";

import {auth} from './firebase';

WebBrowser.maybeCompleteAuthSession();

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Component for the Home screen with drawer navigation
function HomeScreen() {
  return (
    <Drawer.Navigator drawerContent={(props) => (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    )}>
      <Drawer.Screen name="Home Page" component={Home} />
      <Drawer.Screen name="Log out" component={Login} />
    </Drawer.Navigator>
  );
}

function App() {
  const [userInfo, setUserInfo] = React.useState();
  const [req, res, promptAsync] = Google.useAuthRequest({
    androidClientId: "741806464382-1astf3i0cn341ok1f1u718vjrp53iuvs.apps.googleusercontent.com",
    webClientId:"741806464382-266013294dur6bc27vkvengbafj6cclj.apps.googleusercontent.com" // Add your Android client ID
  });

  React.useEffect(() => {
    if(res?.type == "success"){
      const {id_token} = res.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [res])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Risk Page" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Get Started" component={GetStarted} />
        <Stack.Screen name="Login Page" component={Login} />
        <Stack.Screen name="Registration Page" component={Register} />
        <Stack.Screen name="Goal Page" component={Goals} />
        <Stack.Screen name="Diet Preferences" component={DietPreferences} />
        <Stack.Screen name="Allergies Page" component={Allergies} />
        <Stack.Screen name="Risk Page" component={Risk} />
        <Stack.Screen name="Home Screen" component={HomeScreen} />

        <Stack.Screen name="Start Page" component={Start} />
        <Stack.Screen name="Search Recipe" component={SearchRecipe} />
        <Stack.Screen name="User Information" component={userInformation} />
        <Stack.Screen name="Recipe" component={Recipe} />
        <Stack.Screen name="Input Ingredients" component={InputIngredients} />
        <Stack.Screen name="Display Recipes" component={DisplayRecipes} />
        <Stack.Screen name="userInformation" component={userInformation} />

        <Stack.Screen name="Allegies Input" component={AllergyInput} />
        <Stack.Screen name="Home" component={Home} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

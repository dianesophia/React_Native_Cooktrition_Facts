{/*import { useEffect} from "react"


export default function userInformation({route}){
     const {goalTitle, dietTitle} = route.params;

     const[goal, setGoal] = useState(goalTitle);
     const[diet, setDiet] = useState(dietTitle);

    useEffect(() => {
        db.collection('userInformation')
           .get()
           .then(result => result.docs)
           .then(docs => docs.map(doc => ({
             id: doc.id,
             name: doc.name,
             goal: doc.goal,
             dietPreferences: doc.dietPreferences,
             allergies: doc.allergies,
             risk: doc.risk,
           })))
     }, [])
}

*/}

{
/*import React, { useEffect, useState } from "react";
import { db } from "./firebase";

export default function userInformation({ route }) {
  const { selectedDiet, selectedAllergens, additionalAllergens, selectedRisk, firstName, lastName, email } = route.params;

  //const [goal, setGoal] = useState(goalTitle);
  const [diet, setDiet] = useState(selectedDiet);
  const [risk, setRisk] = useState(selectedRisk);


  useEffect(() => {
    // Here you can use the selectedAllergens and additionalAllergens
    console.log("Selected Allergens:", selectedAllergens);
    console.log("Additional Allergens:", additionalAllergens);

    // Example: Saving data to Firebase
    db.collection('userInformation')
      .add({
        //goal: goal,
        dietPreferences: diet,
        allergies: [...selectedAllergens, ...additionalAllergens],
        risk: selectedRisk,

      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }, [selectedAllergens, additionalAllergens, diet, risk]);

  // Your JSX for rendering the user information component
}*/
}
{/*
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { View, Text, Button, TouchableOpacity , StyleSheet} from 'react-native';  

export default function userInformation({ navigation, route }) {
  
  const {firstName, lastName, email, selectedDiet, allergies, selectedRisk} = route.params;

  useEffect(() => {
    db.collection('userInformation')
      .add({
        firstName: firstName,
        lastName: lastName,
        email: email,
        dietPreferences: selectedDiet,
        allergies: [...selectedAllergens, ...additionalAllergens],
        risk: selectedRisk,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }, [selectedDiet, selectedAllergens, additionalAllergens, selectedRisk, firstName, lastName, email]);

  // Your JSX for rendering the user information component

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>User Information</Text>
      <Text>First Name: {firstName}</Text>
      <Text>Last Name: {lastName}</Text>
      <Text>Email: {email}</Text>
      <Text>Selected Diet: {selectedDiet}</Text>
      <Text>Allergies: {allergies.join(', ')}</Text>
      <Text>Selected Risk: {selectedRisk}</Text>
    </View>
  );

}*/
}


import React from 'react';
import { View, Text } from 'react-native';

export default function UserInformation({ firstName, lastName, email, navigation, route }) {
  const { selectedDiet, allergies, selectedRisk } = route.params ?? {};

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>User Information</Text>
      <Text>First Name: {firstName}</Text>
      <Text>Last Name: {lastName}</Text>
      <Text>Email: {email}</Text> 
      <Text>Diet preferences: {selectedDiet}</Text>
      <Text>Allergies: {allergies}</Text>
      <Text>Risks: {selectedRisk}</Text>
    </View>
  );
}


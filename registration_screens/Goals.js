import {SafeAreaView,Text, StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import { Ionicons, Foundation } from '@expo/vector-icons';
import { useFonts, WorkSans_400Regular } from '@expo-google-fonts/work-sans';
import React, {useState} from 'react';

export default function Goals({navigation}){
  const [fontsLoaded] = useFonts({
    WorkSans_400Regular,
  });
  

   function handleGoalData(){

   }

   const [goal, setGoal] = useState([
    {goalTitle: 'Get Inspiration', goalDefinition: 'Challenge your taste buds'},
    {goalTitle: 'Eat healthy', goalDefinition: 'Have balanced diet and stay lean'},
    {goalTitle: 'Loose weight', goalDefinition: 'Get lean without struggle'},
    {goalTitle: 'Build muscles', goalDefinition: 'Stay active and get stronger'},

   ]) 

  return(
    <SafeAreaView style = {styles.container}>

     <TouchableOpacity
        style = {styles.skip}
        onPress = {() => navigation.navigate('Diet Preferences')}
        >
        <Text style = {styles.skipWord}>Skip  </Text>
         <Ionicons name="arrow-forward" size={25} color="black" />
      </TouchableOpacity>

     <Text style = {styles.title}>What's your diet goal?</Text>

     <View style = {styles.contents}>
     <FlatList 
        data={goal}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('User Information', item)}
          >
            <Text style={styles.boxTitle}>{item.goalTitle}</Text>
            <Text>{item.definition}</Text>
          </TouchableOpacity>
        )}
      />
    </View>

    </SafeAreaView>




  );
}

const styles = StyleSheet.create({
  container: {
     backgroundColor : 'white',
     flex: 1,
     padding: 30,
  },
  skip: {
    flexDirection : 'row',
    marginTop: 35,
    marginLeft: 'auto',
  },
  skipWord : {
    fontSize : 18,
  },
  title: {
    color: '#F1C013',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 40,
    fontFamily: 'WorkSans_400Regular',
  }, 
  box :{
    width: 250,
    height: 100,
    borderWidth: 0.2,
    borderColor:'white',
    elevation: 1.5,
    shadowColor: 'black',
    marginBottom: 20,
    padding: 10,

  }, 
  contents : {
    alignItems : 'center',
    marginTop: 30,
  },
  boxTitle: {
    fontWeight: 'bold',
    color: 'black',
  },
});
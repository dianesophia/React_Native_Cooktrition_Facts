import {SafeAreaView,Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { useFonts, WorkSans_400Regular } from '@expo-google-fonts/work-sans';

export default function Start({navigation}){
  
  const [fontsLoaded] = useFonts({
  WorkSans_400Regular,
   });

    if (!fontsLoaded) {
      return null; 
    }

  return(
    <SafeAreaView style = {styles.container}>

     <Text style = {styles.title}>All set!</Text>
     <TouchableOpacity 
      style = {styles.btn}
       onPress = {() => navigation.navigate('Home Page')}>
      <Text>LET'S BEGIN</Text>
     </TouchableOpacity>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
     backgroundColor : 'white',
     flex: 1,
     padding: 30,
  },
  title: {
    color: '#F1C013',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 40,
    fontFamily: 'WorkSans_400Regular',
  }, 
  btn: {
    borderWidth: 1,
    
  },
  
});
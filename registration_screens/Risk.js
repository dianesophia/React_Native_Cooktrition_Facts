import {SafeAreaView,
       Text,
       StyleSheet,
       View, 
       TouchableOpacity} from 'react-native';

import { Ionicons, Foundation } from '@expo/vector-icons';
import { useFonts, WorkSans_400Regular } from '@expo-google-fonts/work-sans';

export default function Risk({navigation}){
  
  const [fontsLoaded] = useFonts({
  WorkSans_400Regular,
   });

    if (!fontsLoaded) {
      return null; 
    }

  return(
    <SafeAreaView style = {styles.container}>

     <TouchableOpacity
        style = {styles.skip}
        onPress = {() => navigation.navigate('Start Page')}
        >
        <Text style = {styles.skipWord}>Skip  </Text>
         <Ionicons name="arrow-forward" size={25} color="black" />
      </TouchableOpacity>

     <Text style = {styles.title}>Are you at risk of any 
of the following</Text>
     
     <View>
      <TouchableOpacity>
        <Text>Diabetes</Text>
      </TouchableOpacity>
     </View>
      
     <View>
      <TouchableOpacity>
        <Text>Hypertension</Text>
      </TouchableOpacity>
     </View>

     <View>
      <TouchableOpacity>
        <Text>Osteoarthritis</Text>
      </TouchableOpacity>
     </View>

     <View>
      <TouchableOpacity>
        <Text>Kidney Disease</Text>
      </TouchableOpacity>
     </View>
      
     <View>
      <TouchableOpacity>
        <Text>Liver Disease</Text>
      </TouchableOpacity>
     </View>

     <View>
      <TouchableOpacity>
        <Text>Heart Disease</Text>
      </TouchableOpacity>
     </View>

      {/*Continue button*/}     
     <View style={styles.continueBtn}>
  <TouchableOpacity
      onPress = {() => navigation.navigate('Start Page')}
  >
    <Text style={styles.continueText}>Continue</Text>
  </TouchableOpacity>
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
  continueBtn:{
    alignItems: 'center',
    marginTop: 'auto',
    justifyContent: 'center',
    marginBottom: 200,
    borderWidth: 2,
  },
  continueText:{
    color: 'black',
  }
  
});
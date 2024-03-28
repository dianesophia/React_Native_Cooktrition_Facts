import { View, 
  ImageBackground,
  Text, 
  StyleSheet,
  TextInput,
   TouchableOpacity} from 'react-native';

export default function Register({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/backgroundPic.png')}
      style={styles.container}
      resizeMode="cover">
      
      <Text style = {styles.title}>Cooktrition Facts</Text>
      <Text>Cook Smart, Eat Right, Anytime, Anywhere!</Text>

      <Text style = {styles.loginText}>Register</Text>

       <TextInput 
        placeholder = 'First Name'
        style = {styles.textInputs}/>
        
      <TextInput 
        placeholder = 'Last Name'
        style = {styles.textInputs}/>
     
      
      <TextInput 
        placeholder = 'Email Address'
        style = {styles.textInputs}/>
        
      <TextInput 
        placeholder = 'Password'
        style = {styles.textInputs}/>

         <TextInput 
        placeholder = 'Confirm Password'
        style = {styles.textInputs}/>

         <TouchableOpacity style = {styles.btn}>
         <Text style = {styles.btnTitle}>Register</Text>
      </TouchableOpacity>

     <Text>or</Text>
       <View style = {styles.registration}>
       <Text>Don’t have an account?</Text>
       <Text 
          style = {styles.login}
           onPress={() => navigation.navigate('Login Page')}
          >Login Now</Text>
       </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEFBF',
    width: '100%',
    height: '100%',
  },
 
 btn: {
    backgroundColor : 'black',
    marginTop: 40,
    marginBottom : 30,
    width:330,
    height: 55,
    borderRadius: 15,
  },
  btnTitle:{
    color: 'white',
    textAlign : 'center',
    alignItems : 'center',
    marginTop: 15,

  },
  textInputs: {
    borderWidth:1,
    width: 330,
    padding: 7,
    marginTop: 15,
    height: 55,
    borderRadius: 10,
    paddingLeft: 20,
  },
  title: {
    fontSize: 25,
    fontStyle : 'bold',
    marginBottom: 5,
  },
  loginText : {
    fontSize: 30,
    marginTop: 35,
  },
  registration : {
    flexDirection : 'row',
    marginTop: 15,
  },
 login : {
    marginLeft: 10,
    fontStyle: 'bold',
  },
});

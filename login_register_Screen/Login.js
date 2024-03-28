import {  View, 
  ImageBackground,
   Text, 
   StyleSheet,
   TextInput, 
   TouchableOpacity} 
   from 'react-native';
   import React, { useState, useEffect } from 'react';

export default function Login({navigation}) {
  const defaultemail = "abcd"; 
  const defaultpassword ="123";

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if(email.trim() === defaultemail && password.trim() === defaultpassword)
    navigation.navigate('Home Screen');
  }
   
  return (
    <ImageBackground
      source={require('../assets/backgroundPic.png')}
      style={styles.container}
      resizeMode="cover">
      
      <Text style = {styles.title}>Cooktrition Facts</Text>
      <Text>Cook Smart, Eat Right, Anytime, Anywhere!</Text>

      <Text style = {styles.loginText}>Log in</Text>
      
      <TextInput 
        placeholder = 'Email Address'
        style = {styles.textInputs}
        value={email}
        onChangeText={(val) => setEmail(val)}
        />
        
      <TextInput 
        placeholder = 'Password'
        style = {styles.textInputs}
        value={password}
        onChangeText={(val) => setPassword(val)}

        />

         <TouchableOpacity 
           style = {styles.btn}
           onPress={handleLogin}
           >
         <Text style = {styles.btnTitle}>Log in</Text>

       
      </TouchableOpacity>

     <Text>or</Text>
     
       <View style = {styles.registration}>
       <Text>Don’t have an account?</Text>
       <Text 
         style = {styles.register}
         onPress={() => navigation.navigate('Registration Page')}
         >
         Register Now</Text>
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
    marginTop: 30,
    height: 50,
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
  register : {
    marginLeft: 10,
    fontStyle: 'bold',
  },
});

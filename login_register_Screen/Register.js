import React, { useState } from 'react';
import { View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../firebase';
import UserInformation from '../userInformation';

export default function Register({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registered, setRegistered] = useState(false); // State to track registration status

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
  
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email);
        setRegistered(true); // Update registration status
      })
      .catch(error => alert(error.message));
  }

  // Conditional rendering of UserInformation component if registered
  if (registered) {
    return (
      <UserInformation 
        firstName={firstName} 
        lastName={lastName} 
        email={email} 
        navigation={navigation} 
      />
    );
  }

  return (
    <ImageBackground
      source={require('../assets/backgroundPic.png')}
      style={styles.container}
      resizeMode="cover">

      <Text style={styles.title}>Cooktrition Facts</Text>
      <Text style={styles.loginText}>Register</Text>

      <TextInput
        placeholder='First Name'
        style={styles.textInputs}
        value={firstName}
        onChangeText={text => setFirstName(text)}
      />

      <TextInput
        placeholder='Last Name'
        style={styles.textInputs}
        value={lastName}
        onChangeText={text => setLastName(text)}
      />

      <TextInput
        placeholder='Email Address'
        style={styles.textInputs}
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        placeholder='Password'
        style={styles.textInputs}
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <TextInput
        placeholder='Confirm Password'
        style={styles.textInputs}
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={handleSignUp}>
        <Text style={styles.btnTitle}>Register</Text>
      </TouchableOpacity>

      <Text>or</Text>
      <View style={styles.registration}>
        <Text>Don’t have an account?</Text>
        <Text
          style={styles.login}
          onPress={() => navigation.navigate('Login Page')}>
          Login Now
        </Text>

       { /*<TouchableOpacity onPress={() => promptAsync()}>
          <Text>Sign up with google</Text>
        </TouchableOpacity>*/}

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
    backgroundColor: 'black',
    marginTop: 40,
    marginBottom: 30,
    width: 330,
    height: 55,
    borderRadius: 15,
  },
  btnTitle: {
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  textInputs: {
    borderWidth: 1,
    width: 330,
    padding: 7,
    marginTop: 15,
    height: 55,
    borderRadius: 10,
    paddingLeft: 20,
  },
  title: {
    fontSize: 25,
    fontStyle: 'bold',
    marginBottom: 5,
  },
  loginText: {
    fontSize: 30,
    marginTop: 35,
  },
  registration: {
    flexDirection: 'row',
    marginTop: 15,
  },
  login: {
    marginLeft: 10,
    fontStyle: 'bold',
  },
});

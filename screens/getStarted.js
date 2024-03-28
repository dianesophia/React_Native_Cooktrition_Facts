import { SafeAreaView, View, ImageBackground, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function getStarted({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/backgroundPic.png')}
      style={styles.container}
      resizeMode="cover">
      <View style = {styles.box}>
        <Image
          source={require('../assets/getStarted.png')}
          style={{ width: 274, height: 350,  marginTop: 30}}
        />
        <Text style = {styles.title}>Cooktrition Facts</Text>

        <Text style = {styles.subTitle}>Fuel your flavor, Nourish Your Health</Text>
        <Text style = {styles.subTitle}>Cook Smart, Eat Right</Text>
        <Text style = {styles.subTitle}>Anytime, Anywhere</Text>
  
      </View>

      <TouchableOpacity 
          style = {styles.btn}
            onPress={() => navigation.navigate('Login Page')}
          >
         <Text style = {styles.btnTitle}>get started</Text>
      </TouchableOpacity>
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
  box: {
    backgroundColor: 'white',
    width: 305,
    height: 530,
    padding: 10,
    alignItems: 'center',
    elevation: 15,
    shadowColor: 'black',

  },
  title: {
     marginRight: 'auto',
     fontStyle: 'bold',
      fontSize: 20,
      marginBottom: 10,
      padding: 10,
  },
  subTitle:{
    marginRight: 'auto',
    marginLeft: 10,
  },
  btn: {
    backgroundColor : 'black',
    marginTop: 30,
    width: 250,
    height: 40,
    borderRadius: 10,
  },
  btnTitle:{
    color: 'white',
    textAlign : 'center',
    alignItems : 'center',
    marginTop: 7,

  }
});

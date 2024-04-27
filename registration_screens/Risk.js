import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, WorkSans_400Regular } from '@expo-google-fonts/work-sans';

export default function Risk({ navigation }) {
  const [fontsLoaded] = useFonts({
    WorkSans_400Regular,
  });

  const [selectedRisk, setSelectedRisk] = useState([]);

  const toggleRisk = (risk) => {
    if (selectedRisk.includes(risk)) {
      setSelectedRisk(selectedRisk.filter(item => item !== risk));
    } else {
      setSelectedRisk([...selectedRisk, risk]);
    }
  };

  const isRiskSelected = (risk) => {
    return selectedRisk.includes(risk);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.skip}
        onPress={() => navigation.navigate('Start Page')}>
        <Text style={styles.skipWord}>Skip  </Text>
        <Ionicons name="arrow-forward" size={25} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Are you at risk of any of the following</Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={[styles.card, isRiskSelected('Diabetes') && styles.selectedCard]}
          onPress={() => toggleRisk('Diabetes')}>
          <Text style={styles.cardText}>Diabetes</Text>
          <Image style={styles.icon} source={require('../assets/risk1.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, isRiskSelected('Hypertension') && styles.selectedCard]}
          onPress={() => toggleRisk('Hypertension')}>
          <Text style={styles.cardText}>Hypertension</Text>
          <Image style={styles.icon} source={require('../assets/risk2.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, isRiskSelected('Osteoarthritis') && styles.selectedCard]}
          onPress={() => toggleRisk('Osteoarthritis')}>
          <Text style={styles.cardText}>Osteoarthritis</Text>
          <Image style={styles.icon} source={require('../assets/risk3.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, isRiskSelected('Kidney Disease') && styles.selectedCard]}
          onPress={() => toggleRisk('Kidney Disease')}>
          <Text style={styles.cardText}>Kidney Disease</Text>
          <Image style={styles.icon} source={require('../assets/risk4.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, isRiskSelected('Liver Disease') && styles.selectedCard]}
          onPress={() => toggleRisk('Liver Disease')}>
          <Text style={styles.cardText}>Liver Disease</Text>
          <Image style={styles.icon} source={require('../assets/risk5.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, isRiskSelected('Heart Disease') && styles.selectedCard]}
          onPress={() => toggleRisk('Heart Disease')}>
          <Text style={styles.cardText}>Heart Disease</Text>
          <Image style={styles.icon} source={require('../assets/risk6.png')} />
        </TouchableOpacity>

      </View>

      {/* Continue button */}
      <View style={styles.continueBtn}>
        <TouchableOpacity onPress={() => navigation.navigate('Start Page')}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  skip: {
    flexDirection: 'row',
    marginTop: 35,
    marginLeft: 'auto',
  },
  skipWord: {
    fontSize: 18,
  },
  title: {
    color: '#F1C013',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 40,
    fontFamily: 'WorkSans_400Regular',
    textAlign: 'center',
    marginBottom: 20,

  },
  cardContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  card: {
    width: 285,
    height: 50,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#F8F8F8'
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  icon: {
    width: 30,
    height: 30,
  },
  selectedCard: {
    backgroundColor: '#FFEFBF',
  },
  continueBtn: {
    backgroundColor: '#FFFFFF',
    width: 125,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 5,
    marginTop: 20,

  },
  continueText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F1C013',
  },
});

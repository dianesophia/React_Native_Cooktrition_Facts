import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, WorkSans_400Regular } from '@expo-google-fonts/work-sans';

export default function Goals({ navigation }) {
  const [fontsLoaded] = useFonts({ WorkSans_400Regular });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.skip}
        onPress={() => navigation.navigate('Diet Preferences')}>
        <Text style={styles.skipWord}>Skip  </Text>
        <Ionicons name="arrow-forward" size={25} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>What's your diet goal?</Text>

      <View style={styles.contents}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('SelectedGoal', { goal: 'Get inspiration' })}>
          <Text style={styles.boxTitle}>Get inspiration</Text>
          <Text>Challenge your taste buds</Text>
        </TouchableOpacity>

        {/* Add onPress handlers and accessibility labels for other diet goal options */}

        {/* Example: */}
        {/* <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('SelectedGoal', { goal: 'Eat healthy' })}
          accessibilityLabel="Eat healthy">
          <Text style={styles.boxTitle}>Eat healthy</Text>
          <Text>Have balanced diet and stay lean</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
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
  },
  box: {
    width: 250,
    height: 100,
    borderWidth: 0.2,
    borderColor: 'white',
    elevation: 1,
    shadowColor: 'black',
    marginBottom: 20,
    padding: 10,
  },
  contents: {
    alignItems: 'center',
    marginTop: 30,
  },
  boxTitle: {
    fontWeight: 'bold',
    color: 'black',
  },
});

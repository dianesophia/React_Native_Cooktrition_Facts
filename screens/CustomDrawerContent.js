import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

function CustomDrawerContent({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../path/to/arrowleft.png')} style={styles.backButton} />
        </TouchableOpacity>
      </View>
      <View style={styles.avatarContainer}>
        <Image source={require('../path/to/avatar.png')} style={styles.avatar} />
      </View>
      <Text style={styles.username}>User Name</Text>
      <ScrollView>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../path/to/home_icon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Favorites')}>
          <Image source={require('../path/to/favorite_icon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('History')}>
          <Image source={require('../path/to/history_icon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>History</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    height: 50,
    backgroundColor: 'yellow',
    marginBottom: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  backButton: {
    width: 42,
    height: 36,
    marginLeft: 15,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  menuIcon: {
    width: 39,
    height: 39,
    marginRight: 15,
  },
  menuText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: 'black',
    borderRadius: 12,
    paddingVertical: 10,
    marginBottom: 100,
  },
  logoutText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default CustomDrawerContent;

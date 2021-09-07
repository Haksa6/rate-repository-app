import React from 'react';
import { View, StyleSheet, Text, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15
  },
  text: {
    color: 'white',
    fontWeight: '700',
    paddingRight: 15
  },
  scrollView: {
    flexDirection: 'row',
  }
});

const AppBar = () => {
  return (
    <View style={styles.flexContainer}>
      <ScrollView style={styles.scrollView} horizontal>
        <Link to="/" component={TouchableOpacity}>
          <Text style={styles.text}>Repositories</Text>
        </Link>
        <Link to="/signin" component={TouchableOpacity}>
          <Text style={styles.text}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
    );
};

export default AppBar;
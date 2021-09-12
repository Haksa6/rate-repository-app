import React from 'react';
import { View, StyleSheet, Text, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

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
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const { authorizedUser } = useAuthorizedUser();
  
  const signOut = () => {
    authStorage.removeAccessToken();
    apolloClient.resetStore();
  };



  return (
    <View style={styles.flexContainer}>
      <ScrollView style={styles.scrollView} horizontal>
        <Link to="/" component={TouchableOpacity}>
          <Text style={styles.text}>Repositories</Text>
        </Link>
        {authorizedUser ?

        <Link to="/signin" component={TouchableOpacity} onPress={signOut}>
          <Text style={styles.text}>Sign out</Text>
        </Link>
        :
        <Link to="/signin" component={TouchableOpacity}>
          <Text style={styles.text}>Sign in</Text>
        </Link>
        }
      </ScrollView>
    </View>
    );
};

export default AppBar;
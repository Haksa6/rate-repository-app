import React from 'react';
import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import { View, StyleSheet } from 'react-native';
import AppBar from './AppBar';
import { Route, Switch, Redirect } from 'react-router-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e1e4e8',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
      </Switch>
    </View>
    );
};

export default Main;
import React from 'react';
import RepositoryList from './RepositoryList'
import SingleRepository from './SingleRepository';
import SignIn from './SignIn'
import { View, StyleSheet } from 'react-native';
import AppBar from './AppBar';
import { Route, Switch } from 'react-router-native';
import CreateRevíew from './CreateReview';
import SignUp from './SignUp';


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
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/createreview" exact>
          <CreateRevíew />
        </Route>
        <Route path="/:id" exact>
          <SingleRepository />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
      </Switch>
    </View>
    );
};

export default Main;
import React from 'react';
import { View,Image, StyleSheet } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  tinyLogo: {
    margin: 13,
    width: 50,
    height: 50,
    borderRadius: 5
  },
  logo: {
    width: 66,
    height: 58,
  },
  flexContainerA: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-around',
    alignItems: 'flex-start',
    paddingTop: 18,
    flex: 0.8
  },
  flexContainerB : {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingBottom: 10
  },
  language: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    padding: 4,
    color: 'white'
  },
  flexContainerC: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 18
  },
  flexItem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

function nFormatter(num) {
  if (num >= 1000000000) {
     return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
  }
  if (num >= 1000000) {
     return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
     return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num;
}

const RepositoryItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainerB}>
      <Image 
      style={styles.tinyLogo}
      source={{
        uri: props.ownerAvatarUrl
      }}
      />
        <View style={styles.flexContainerA}>
          <Text color='textPrimary' fontWeight='bold' style={{paddingBottom: 5}}>{props.fullName}</Text>
          <Text style={{paddingBottom: 5}}>{props.description}</Text>
          <Text style={styles.language}>{props.language}</Text>
        </View>
      </View>
      <View style={styles.flexContainerC}>
        <View style={styles.flexItem}>
          <Text fontWeight='bold'>{nFormatter(props.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.flexItem}>
          <Text fontWeight='bold'>{nFormatter(props.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.flexItem}>
          <Text fontWeight='bold'>{props.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.flexItem}>
          <Text fontWeight='bold'>{props.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );


};


export default RepositoryItem;
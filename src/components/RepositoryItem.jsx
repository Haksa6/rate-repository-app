import React from 'react';
import { View,Image, StyleSheet, Pressable } from 'react-native';
import theme from '../theme';
import Text from './Text';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 3,
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
    paddingTop: 15,
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
    borderRadius: 4,
    padding: 4,
    color: 'white'
  },
  flexContainerC: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 12
  },
  flexItem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  githubButton: {
    backgroundColor: theme.colors.primary,
    textAlign:'center',
    color: 'white',
    borderRadius: 3,
    padding: 10,
    fontWeight: theme.fontWeights.bold,
    marginRight: 11,
    marginLeft: 11,
  }
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

const handleClick = (url) => {
  Linking.openURL(url);
}


const RepositoryItem = ({ item, singleView }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainerB}>
      <Image 
      testID="ownerAvatarUrl"
      style={styles.tinyLogo}
      source={{
        uri: item?.ownerAvatarUrl
      }}/>
        <View style={styles.flexContainerA}>
          <Text testID="fullName" color='textPrimary' fontWeight='bold' style={{paddingBottom: 5}}>{item?.fullName}</Text>
          <Text testID="description" style={{paddingBottom: 5}}>{item?.description}</Text>
          <Text testID="language" style={styles.language}>{item?.language}</Text>
        </View>
      </View>
      <View style={styles.flexContainerC}>
        <View style={styles.flexItem}>
          <Text testID="stargazersCount" fontWeight='bold'>{nFormatter(item?.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.flexItem}>
          <Text testID="forksCount" fontWeight='bold'>{nFormatter(item?.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.flexItem}>
          <Text testID="reviewCount" fontWeight='bold'>{item?.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.flexItem}>
          <Text testID="ratingAverage" fontWeight='bold'>{item?.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
      {singleView ?  
        <Pressable onPress={() => handleClick(item?.url)}>
          <Text 
          style={styles.githubButton}>Open in GitHub
          </Text>
        </Pressable>
        : undefined}
    </View>
  );
};


export default RepositoryItem;
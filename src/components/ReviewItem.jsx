import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import theme from '../theme'
import { format } from 'date-fns'


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    backgroundColor: 'white',
  },
  flexContainerB : {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  flexContainerA: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 5,
  },
  rating: {
    width: 45,
    height: 45,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 45/2,
    color: theme.colors.primary,
    borderColor: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
    borderWidth: 2,
    margin: 5,
    marginRight: 12,
    paddingLeft: 2
  
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainerB}>
        <Text style={styles.rating}>{review.rating} </Text>
        <View style={styles.flexContainerA}>
          <Text fontWeight='bold' color='textPrimary'>{review.user.username}</Text>
          <Text>{format(new Date(review.createdAt), "dd.MM.yy")}</Text>
        </View>
      </View>
      <Text style={{marginLeft: 63}}>{review.text}</Text>
    </View>
  );

};

export default ReviewItem;
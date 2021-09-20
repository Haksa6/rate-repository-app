import React from 'react';
import { FlatList, StyleSheet, View} from 'react-native';
import Text from './Text';
import RepositoryItem from './RepositoryItem';
import { useParams } from 'react-router-native';
import useSingleRepository from '../hooks/useSingleRepository';
import ReviewItem from './ReviewItem';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
const ItemSeparator = () => <View style={styles.separator}/>;

const RepositoryInfo = ({ repository }) => {
  return (<RepositoryItem item={repository} singleView={true}/>);
};

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, fetchMore } = useSingleRepository({id, first: 2});
  const reviews = repository ? repository.reviews.edges.map(edge => edge.node) : [];
  const onEndReach = () => {
    fetchMore();
  };
  
//<RepositoryItem item={repository} singleView={true}/>
  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      // ...
    />
  );
};


export default SingleRepository;
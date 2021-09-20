import React, {useState}  from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories';
import { useHistory } from "react-router-dom";
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});



const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListHeader = ({setOrderBy, orderMode, setSearchKeyword, searchKeyword}) => {
  
    
  return(
      <>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchKeyword}
        value={searchKeyword}
        style={{margin: 17}}
      />

    <Picker
        selectedValue={orderMode}
        prompt="Select an item"
        onValueChange={(value, itemIndex) =>
          setOrderBy(value)
        
      }>
      <Picker.Item label="Latest repositories" value={{orderBy: 'CREATED_AT', orderDirection: 'DESC'}} />
      <Picker.Item label="Highest rated repositories" value={{orderBy: 'RATING_AVERAGE', orderDirection: 'DESC'}} />
      <Picker.Item label="Lowest rated repositories" value={{orderBy: 'RATING_AVERAGE', orderDirection: 'ASC'}} />
      
    </Picker>
    </>
  );
}


export class RepositoryListContainer extends React.Component {

  renderHeader = () => {
    // this.props contains the component's props
    const { orderMode, setOrderBy, searchKeyword, setSearchKeyword } = this.props;

    // ...

    return (
      <RepositoryListHeader
        orderMode={orderMode}
        setOrderBy={setOrderBy}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
    );
  };

  render() {
    const { repositories, handleClick, onEndReach } = this.props;

    // Get the nodes from the edges array
    const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    
    const renderItem = ({ item }) => (
      <Pressable onPress={() => handleClick(item)}>
        <RepositoryItem 
        item={item}
        singleView={false}
        />
      </Pressable>
    );

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={this.renderHeader}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
  

};

const RepositoryList = () => {
  const [orderMode, setOrderBy] = useState({orderBy: 'CREATED_AT', orderDirection: 'DESC'})

  const [searchKeyword, setSearchKeyword] = useState('');
  const [value] = useDebounce(searchKeyword, 500);
  const history = useHistory();

  const handleClick = (item) => {
    history.push(`${item.id}`)
  }
  
  const { repositories, fetchMore } = useRepositories({ ...orderMode, searchKeyword: value, first: 10});

  const onEndReach = () => {
    fetchMore();
  };
  return <RepositoryListContainer repositories={repositories} setOrderBy={setOrderBy} orderMode={orderMode}  searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} handleClick={handleClick} onEndReach={onEndReach}/>;
};

export default RepositoryList;
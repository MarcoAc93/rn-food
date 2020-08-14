import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [restaurantsRequest, restaurants, error] = useRestaurants();

  return (
    <View style={styles.mainContainer}>
      <SearchBar
        search={search}
        onSearchChange={setSearch}
        onSearchSubmit={() => restaurantsRequest(search)}
      />
      {error.error
        ? <Text>{error.message}</Text>
        : <Text>We have found {restaurants.length} restaurants</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    height: '100%',
  }
})

export default SearchScreen;

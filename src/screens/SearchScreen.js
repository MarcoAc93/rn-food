import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [error, setErrorMessage] = useState({ error: false, message: '' });

  const restaurantsRequest = async () => {
    try {
      const { data: { businesses } } = await yelp.get('/search', { params: { limit: 50, term: search, location: 'san jose' }});
      setErrorMessage({ error: false, message: '' })
      setRestaurants(businesses);
    } catch (errorRequest) {
      const { response: { data: { error: { code } } } } = errorRequest;
      if (code === "BUSINESS_NOT_FOUND") setErrorMessage({ error: true, message: 'Business not found' });
    }
  }

  return (
    <View style={styles.mainContainer}>
      <SearchBar
        search={search}
        onSearchChange={setSearch}
        onSearchSubmit={restaurantsRequest}
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

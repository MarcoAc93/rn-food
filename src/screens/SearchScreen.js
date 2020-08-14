import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import RestaurantsList from '../components/RestaurantsList';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [restaurantsRequest, restaurants, error] = useRestaurants();

  const filterRestaurantsByPrice = price => restaurants.filter(restaurant => restaurant.price === price);

  return (
    <View style={styles.mainContainer}>
      <SearchBar
        search={search}
        onSearchChange={setSearch}
        onSearchSubmit={() => restaurantsRequest(search)}
      />
      {error.error
        ? <Text style={styles.subText}>{error.message}</Text>
        : <Text style={styles.subText}>We have found {restaurants.length} restaurants</Text>
      }
      <ScrollView>
        <RestaurantsList header="Cost Effective" restaurants={filterRestaurantsByPrice("$")} />
        <RestaurantsList header="Bit Pricier" restaurants={filterRestaurantsByPrice("$$")} />
        <RestaurantsList header="Big Spender" restaurants={filterRestaurantsByPrice("$$$")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  subText: {
    marginLeft: 15,
    marginBottom: 15
  }
})

export default SearchScreen;

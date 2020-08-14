import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const RestaurantScreen = ({ navigation }) => {
  const restaurantId = navigation.getParam('id');
  const [restaurant, setRestaurant] = useState(null);
  
  const getRestaurant = async (restaurantId) => {
    try {
      const response = await yelp.get(`/${restaurantId}`);
      setRestaurant(response.data)
    } catch(error) {
      console.log(error.response);
    }
  }
  
  useEffect(() => { getRestaurant(restaurantId); }, []);

  if (!restaurant) return null;

  return (
    <View>
      <Text>{restaurant.name}</Text>
      <FlatList
        data={restaurant.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return (
            <Image source={{ uri: item }} style={styles.image} />
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default RestaurantScreen;

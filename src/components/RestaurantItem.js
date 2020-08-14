import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: restaurant.image_url }} style={styles.image} />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.moreInfo}>{restaurant.rating} Stars, {restaurant.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 15,
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4
  },
  title: {
    marginTop: 5,
    fontWeight: "bold"
  },
  moreInfo: {
    color: 'gray'
  }
});

export default RestaurantItem;

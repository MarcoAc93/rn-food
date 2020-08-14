import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import RestaurantCard from '../components/RestaurantItem';

const RestaurantsList = ({ header, restaurants, navigation }) => {
  if (!restaurants.length) return null;
  return (
    <View>
      <Text style={styles.title}>{header}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={element => element.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('RestaurantScreen', { id: item.id })}>
            <RestaurantCard restaurant={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "bold"
  },
});

export default withNavigation(RestaurantsList);

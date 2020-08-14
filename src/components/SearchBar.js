import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ search, onSearchChange, onSearchSubmit }) => {
  return (
    <View style={styles.backgroudStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        autoCapitalize="none"
        style={styles.inputStyle}
        value={search}
        autoCorrect={false}
        onChangeText={onSearchChange}
        onEndEditing={onSearchSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroudStyle: {
    height: 50,
    borderRadius: 5,
    margin: 15,
    marginBottom: 10,
    backgroundColor: '#F0EEEE',
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 20
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;

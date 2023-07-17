import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {THEME} from '../../../constants';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Icon name="search" size={20} color={THEME.colors.searchIcon} />
        <TextInput style={styles.input} placeholder="Search contacts" />
      </View>
    </View>
  );
};

export default Search;

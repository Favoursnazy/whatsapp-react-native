import {View, Text} from 'react-native';
import React from 'react';

const Header = ({icon, title}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;
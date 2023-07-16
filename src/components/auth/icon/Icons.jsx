import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './style';

const Icons = ({icon, size, color}) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.imageContainer}>
        <Icon name={icon} size={size} color={color} />
      </View>
    </View>
  );
};

export default Icons;

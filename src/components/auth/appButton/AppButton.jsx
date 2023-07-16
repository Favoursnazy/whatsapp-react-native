import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import style from './style';

const AppButton = ({onPress, title, color}) => {
  return (
    <View style={style.buttonContainer}>
      <TouchableOpacity onPress={onPress} style={style.container}>
        <Text style={style.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppButton;

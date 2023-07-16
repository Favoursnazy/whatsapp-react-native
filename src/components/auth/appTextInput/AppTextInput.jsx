import {View, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GLOBAL_STYLES, THEME} from '../../../constants';
import style from './style';

const AppTextInput = ({icon, placeholder, size, ...otherProps}) => {
  return (
    <View style={GLOBAL_STYLES.mainContainer}>
      <View style={style.icon}>
        <Icon name={icon} size={size} color={THEME.colors.primary} />
      </View>
      <TextInput
        placeholder={placeholder}
        style={style.input}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;

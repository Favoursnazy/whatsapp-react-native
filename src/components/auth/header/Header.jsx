import {View, Text} from 'react-native';
import React from 'react';
import style from './style';
import {Icons} from '../icon';
import {THEME} from '../../../constants';

const Header = ({icon, title}) => {
  return (
    <View style={style.container}>
      <Icons icon={icon} size={150} color={THEME.colors.white} />
      <Text style={style.title}>{title}</Text>
    </View>
  );
};

export default Header;

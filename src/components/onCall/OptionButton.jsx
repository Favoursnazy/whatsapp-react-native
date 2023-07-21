import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const OptionButton = ({size, name, color, onPress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={[
          [
            styles.iconContainer,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: color,
            },
          ],
        ]}>
        <Icon name={name} size={size - 30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: 'red',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OptionButton;

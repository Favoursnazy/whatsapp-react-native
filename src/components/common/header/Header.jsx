import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './style';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity style={styles.imageContainer} onPress={() => {}}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=940',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

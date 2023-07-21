import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {FONTS, THEME} from '../../constants';

const AddStory = () => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <FastImage
            style={styles.image}
            source={{
              uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=940',
              priority: FastImage.priority.high,
            }}
          />
          <View style={styles.iconContainer}>
            <Icon
              name="plus"
              color="white"
              size={15}
              style={styles.iconStyle}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Add a story</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: 10,
  },
  innerContainer: {
    paddingRight: 20,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  imageContainer: {
    marginRight: 15,
    overflow: 'hidden',
    paddingVertical: 10,
  },
  iconStyle: {},
  iconContainer: {
    position: 'absolute',
    backgroundColor: THEME.colors.primary,
    borderRadius: 12.5,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    top: 45,
  },
  textContainer: {
    justifyContent: 'center',
  },
  text: {
    color: THEME.colors.primary,
    fontSize: THEME.fontSize.title,
    fontFamily: FONTS.YSABEAU_OFFICE_BOLD,
  },
});

export default AddStory;

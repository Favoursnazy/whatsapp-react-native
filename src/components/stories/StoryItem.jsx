import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {FONTS, THEME} from '../../constants';

const StoryItem = ({username, picture, time, stories}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <View style={styles.imageContainer}>
          <FastImage source={{uri: picture}} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.username}>
            {username}
          </Text>
          <Text numberOfLines={1} style={styles.time}>
            {time}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    flexDirection: 'row',
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
  },
  imageContainer: {
    marginRight: 15,
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: 'hidden',
    borderColor: THEME.colors.primary,
    borderWidth: 2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    height: 50,
    width: 50,
  },
  textContainer: {
    justifyContent: 'center',
  },
  username: {
    color: THEME.colors.title,
    fontFamily: FONTS.YSABEAU_OFFICE_BOLD,
  },
  time: {
    color: THEME.colors.subTitle,
    fontSize: THEME.fontSize.subTitle,
    fontFamily: FONTS.YSABEAU_OFFICE_REGULAR,
  },
});

export default StoryItem;

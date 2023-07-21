import {View, StyleSheet} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

const ProfilePicture = ({picture}) => {
  return (
    <View>
      <FastImage source={{uri: picture, priority: FastImage.priority.high}} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
});

export default ProfilePicture;

import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './style';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome';
import {THEME} from '../../../constants';

const ChatHeader = ({username, bio, picture, onlineStatus, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Icon name="angle-left" size={30} color={THEME.colors.white} />
      </TouchableOpacity>
      <View style={styles.profileOptions}>
        <TouchableOpacity style={styles.profile}>
          <FastImage
            style={styles.image}
            source={{uri: picture, priority: FastImage.priority.high}}
          />
          <View style={styles.usernameAndOnlineStatus}>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.onlineStatus}>{onlineStatus}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.options}>
          <TouchableOpacity style={{paddingHorizontal: 5}}>
            <Icon name="phone" size={30} color={THEME.colors.white} />
          </TouchableOpacity>
          <TouchableOpacity style={{paddingHorizontal: 5}}>
            <Icon name="ellipsis-v" size={30} color={THEME.colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatHeader;

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {FONTS, THEME} from '../../constants';
import {AppModal} from '../common/modal';
import {Profile} from '../profile';
import {useNavigation} from '@react-navigation/native';

const ConversationItem = ({
  picture,
  username,
  bio,
  time,
  notification,
  isBlocked,
  hasStory,
  isMuted,
  lasteMessage,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const showStoryCircle = () => {
    if (hasStory) {
      return {
        borderColor: THEME.colors.storyBorder,
        borderWidth: 2,
      };
    }
  };

  const showNotification = type => {
    if (notification && type === 'number') {
      return (
        <View style={styles.notificationCircle}>
          <Text style={styles.notification}>{notification}</Text>
        </View>
      );
    } else if (notification && type === 'imageCircle') {
      return (
        <View>
          <Text></Text>
        </View>
      );
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.conversation}
        onPress={() =>
          navigation.navigate('ChatScreen', {
            username,
            bio,
            picture,
            isBlocked,
            isMuted,
          })
        }>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={[styles.imageContainer, showStoryCircle]}>
          <FastImage
            style={styles.image}
            source={{uri: picture, priority: FastImage.priority.high}}
          />
        </TouchableOpacity>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text numberOfLines={1} style={styles.username}>
              {username}
            </Text>
            <Text style={styles.time}>{time}</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={styles.lasteMessage}>{lasteMessage}</Text>
            {showNotification('number')}
          </View>
        </View>
      </TouchableOpacity>
      <AppModal animationType="slide" visible={modalVisible}>
        <Profile
          username={username}
          picture={picture}
          bio={bio}
          isBlocked={isBlocked}
          isMuted={isMuted}
          hide={() => setModalVisible(false)}
        />
      </AppModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  conversation: {
    flexDirection: 'row',
    paddingBottom: 25,
    paddingRight: 20,
    paddingLeft: 10,
  },
  imageContainer: {
    marginRight: 15,
    borderRadius: 25,
    height: 50,
    width: 50,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    height: 55,
    width: 55,
  },
  username: {
    fontSize: THEME.fontSize.title,
    color: THEME.colors.title,
    width: 210,
    fontFamily: FONTS.YSABEAU_OFFICE_BOLD,
  },
  lasteMessage: {
    fontSize: THEME.fontSize.message,
    width: 240,
    color: THEME.colors.subTitle,
    fontFamily: FONTS.YSABEAU_OFFICE_BOLD,
  },
  time: {
    fontSize: THEME.fontSize.subTitle,
    color: THEME.colors.subTitle,
    fontFamily: FONTS.YSABEAU_OFFICE_BOLD,
  },
  notificationCircle: {
    backgroundColor: THEME.colors.primary,
    borderRadius: 50,
    height: 20,
    width: 20,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notification: {
    color: THEME.colors.white,
    fontSize: 10,
  },
});
export default ConversationItem;

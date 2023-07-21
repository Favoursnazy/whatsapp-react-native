import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {THEME} from '../../constants';

const CallItem = ({picture, username, time, callStatus}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage source={{uri: picture, priority: FastImage.priority.high}} />
      </View>
      <View style={styles.usernameAndCall}>
        <View style={styles.usernameAndStatus}>
          <Text style={styles.username}>{username}</Text>
          <View style={styles.callStatusConatiner}>
            <FAIcon
              name={
                callStatus === 0 || callStatus === 1
                  ? 'arrow-right'
                  : 'arrow-left'
              }
              style={styles.iconStyle}
              color={
                callStatus === 0 || callStatus === 2
                  ? THEME.colors.danger
                  : THEME.colors.success
              }
            />
            <Text style={styles.time}>{time}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ChatScreen', {
                username,
                picture,
              })
            }
            style={{padding: 10}}>
            <MCIcon name="chat" size={25} color={THEME.colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('OnCallScreen', {
                username,
                picture,
              })
            }
            style={{padding: 10}}>
            <FAIcon name="phone" size={25} color={THEME.colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingRight: 20,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  imageContainer: {
    borderRadius: 25,
    height: 50,
    width: 50,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  usernameAndCall: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },
  usernameAndStatus: {
    paddingHorizontal: 10,
    fontSize: 18,
  },
  callStatusConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    alignSelf: 'center',
  },
  time: {
    color: THEME.colors.description,
    paddingHorizontal: 5,
  },
});

export default CallItem;

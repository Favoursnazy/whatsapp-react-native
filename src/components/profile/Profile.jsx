import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {THEME} from '../../constants';
import FastImage from 'react-native-fast-image';

const Profile = ({username, bio, isMuted, isBlocked, hide, picture}) => {
  return (
    <TouchableOpacity
      style={styles.profileMomodalContainer}
      onPress={hide}
      activeOpacity={1}>
      <View style={styles.profileModalInnerContainer}>
        <TouchableOpacity activeOpacity={1}>
          <FastImage
            style={styles.profileImage}
            source={{uri: picture, priority: FastImage.priority.high}}
          />
          <View style={styles.profileUsernameContainer}>
            <Text style={styles.profileUsername}>{username}</Text>
          </View>
          <View style={styles.profileModalOptionsContainer}>
            <TouchableOpacity style={styles.profileModalIconContainer}>
              <Icon name="align-left" size={25} color={THEME.colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileModalIconContainer}>
              <Icon name="phone" size={25} color={THEME.colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileModalIconContainer}>
              <Icon name="info-circle" size={25} color={THEME.colors.primary} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Profile;

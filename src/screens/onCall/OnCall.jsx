import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {OptionButton, ProfilePicture} from '../../components/onCall';
import {THEME} from '../../constants';
import styles from './style';

const OnCall = ({navigation, route}) => {
  const {username, picture} = route.params;
  const [speakerOn, setSpeakerOn] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  return (
    <View style={{backgroundColor: THEME.colors.primary, flex: 1}}>
      <View style={styles.profileContainer}>
        <View style={styles.usernameAndTime}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.time}>00:45</Text>
        </View>
        <ProfilePicture picture={picture} />
      </View>
      <View style={styles.optionContainer}>
        <OptionButton
          onPress={() => setIsMuted(value => !value)}
          name="microphone-slash"
          size={60}
          color={
            isMuted ? THEME.colors.secondary : THEME.colors.halfOpacitySecondary
          }
        />
        <OptionButton
          onPress={() => setSpeakerOn(value => !value)}
          name="volume-up"
          size={60}
          color={
            speakerOn ? THEME.colors.primary : THEME.colors.halfOpacityPrimary
          }
        />
      </View>
      <View style={styles.endCallContainer}>
        <OptionButton
          onPress={() => navigation.goBack()}
          name="phone"
          size={60}
          color={THEME.colors.danger}
        />
      </View>
    </View>
  );
};

export default OnCall;

import {
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  Animated,
} from 'react-native';
import React, {useState, memo, useEffect} from 'react';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {THEME} from '../../../constants';
import {EmojiPicker} from '../emoji';

const ChatInput = () => {
  const [message, setMessage] = useState();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [heighValue, setHeightValue] = useState(new Animated.Value(70));

  useEffect(() => {
    showEmojis();
  }, [showEmojiPicker]);

  const showEmojis = () => {
    Animated.timing(heighValue, {
      toValue: showEmojiPicker ? 400 : 70,
      duration: 50,
      useNativeDriver: false,
    }).start();
  };
  return (
    <Animated.View style={[{height: heighValue}, styles.container]}>
      <View style={styles.innerContainer}>
        <View style={styles.inputAndMicroPhone}>
          <TouchableOpacity
            onPress={() => setShowEmojiPicker(value => !value)}
            style={styles.emoticonButton}>
            <Icon
              name={showEmojiPicker ? 'close' : 'emoticon-outline'}
              size={20}
              color={THEME.colors.description}
            />
          </TouchableOpacity>
          <TextInput
            multiline
            placeholder="Type something..."
            style={styles.input}
            onChangeText={text => {
              setMessage(text);
            }}
          />
          <TouchableOpacity style={styles.rightIconButtonStyle}>
            <Icon name="paperclip" color={THEME.colors.description} size={20} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightIconButtonStyle}>
            <Icon name="camera" color={THEME.colors.description} size={20} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.sendButton}>
          <Icon
            name={message ? 'send' : 'microphone'}
            color={THEME.colors.white}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <EmojiPicker />
    </Animated.View>
  );
};

export default memo(ChatInput);

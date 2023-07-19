import {View, TouchableOpacity, TextInput, Text} from 'react-native';
import React, {useState, memo, useEffect} from 'react';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {THEME} from '../../../constants';
import {EmojiPicker} from '../emoji';
import EmojiModal from 'react-native-emoji-modal';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const ChatInput = ({reply, isLeft, closeReply, username}) => {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const height = useSharedValue(70);

  useEffect(() => {
    if (showEmojiPicker) {
      height.value = withTiming(400);
    } else {
      height.value = reply ? withSpring(130) : withSpring(70);
    }
  }, [showEmojiPicker]);

  useEffect(() => {
    if (reply) {
      height.value = showEmojiPicker ? withTiming(450) : withTiming(130);
    } else {
      height.value = showEmojiPicker ? withSpring(400) : withSpring(70);
    }
  }, [reply]);

  const heightAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  return (
    <Animated.View style={[styles.container, heightAnimatedStyle]}>
      {reply ? (
        <View style={styles.replyContainer}>
          <TouchableOpacity
            onPress={() => closeReply()}
            style={styles.closeReply}>
            <Icon name="close" color="#000" size={20} />
          </TouchableOpacity>
          <Text style={styles.replyTitle}>
            Response to {isLeft ? username : 'Me'}
          </Text>
          <Text style={styles.reply}>{reply}</Text>
        </View>
      ) : null}
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
      {showEmojiPicker && (
        <EmojiModal
          onEmojiSelected={emoji => setMessage(emoji)}
          backgroundStyle={{backgroundColor: 'white', width: '100%'}}
          columns={8}
        />
      )}
    </Animated.View>
  );
};

export default memo(ChatInput);

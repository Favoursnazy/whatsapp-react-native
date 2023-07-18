import {View, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {THEME} from '../../../constants';

const ChatInput = () => {
  const [message, setMessage] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.inputAndMicroPhone}>
          <TouchableOpacity style={styles.emoticonButton}>
            <Icon
              name="emoticon-outline"
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
    </View>
  );
};

export default ChatInput;

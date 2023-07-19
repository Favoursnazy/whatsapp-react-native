import {View} from 'react-native';
import {ChatHeader, ChatInput, ChatList} from '../../components/chat';
import {useState} from 'react';

const Chat = ({navigation, route}) => {
  const {username, bio, picture, isBlocked, isMuted} = route.params;
  const [reply, setReply] = useState('');
  const [isLeft, setIsLeft] = useState();

  const swipeToReply = (message, isLeft) => {
    setReply(message.length > 50 ? message.slice(0, 50) + '...' : message);
    setIsLeft(isLeft);
  };

  const closeReply = () => {
    setReply('');
  };

  return (
    <View style={{flex: 1}}>
      <ChatHeader
        onpPress={() => {}}
        username={username}
        picture={picture}
        onlineStatus={'Online'}
      />
      <ChatList onSwipeToReply={swipeToReply} />
      <ChatInput
        reply={reply}
        isLeft={isLeft}
        closeReply={closeReply}
        username={username}
      />
    </View>
  );
};

export default Chat;

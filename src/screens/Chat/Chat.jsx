import {View} from 'react-native';
import {ChatHeader, ChatInput, ChatList} from '../../components/chat';

const Chat = ({navigation, route}) => {
  const {username, bio, picture, isBlocked, isMuted} = route.params;
  return (
    <View style={{flex: 1}}>
      <ChatHeader
        onpPress={() => {}}
        username={username}
        picture={picture}
        onlineStatus={'Online'}
      />
      <ChatList />
      <ChatInput />
    </View>
  );
};

export default Chat;

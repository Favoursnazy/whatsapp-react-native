import {View, Text, ScrollView} from 'react-native';
import {Message} from './message';
import {message} from '../../../data/users';
import {useRef, useState} from 'react';
import {THEME} from '../../../constants';

const ChatList = () => {
  const [allMessage, setAllMessage] = useState(message);
  const user = useRef(0);
  const scrollView = useRef();
  return (
    <ScrollView
      style={{backgroundColor: THEME.colors.white}}
      ref={ref => (scrollView.current = ref)}
      onContentSizeChange={() => {
        scrollView.current.scrollToEnd({animated: true});
      }}>
      {allMessage.map((m, index) => {
        return (
          <Message
            key={index}
            time={m.time}
            isLeft={m.user !== user.current}
            message={m.content}
          />
        );
      })}
    </ScrollView>
  );
};

export default ChatList;

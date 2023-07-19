import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import {
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';
import Animated, {
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  useSharedValue,
} from 'react-native-reanimated';

const Message = ({time, isLeft, message, onSwipe}) => {
  const startingPostion = 0;
  const x = useSharedValue(startingPostion);
  const isOnLeft = type => {
    if (isLeft && type === 'messageContainer') {
      return {
        alignSelf: 'flex-start',
        backgroundColor: '#f0f0f0',
        borderTopLeftRadius: 0,
      };
    } else if (isLeft && type === 'message') {
      return {
        color: '#000',
      };
    } else if (isLeft && type === 'time') {
      return {
        color: 'darkgray',
      };
    } else {
      return {};
    }
  };

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {},
    onActive: (event, ctx) => {
      x.value = isLeft ? 50 : -50;
    },
    onEnd: (event, ctx) => {
      x.value = withSpring(startingPostion);
    },
  });

  const uas = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}],
    };
  });

  return (
    <FlingGestureHandler
      onGestureEvent={eventHandler}
      onHandlerStateChange={({nativeEvent}) => {
        if (nativeEvent.state === State.ACTIVE) {
          onSwipe(message, isLeft);
        }
      }}
      direction={isLeft ? Directions.RIGHT : Directions.LEFT}>
      <Animated.View style={[styles.container, uas]}>
        <View style={[styles.messageContainer, isOnLeft('messageContainer')]}>
          <View style={styles.messageView}>
            <Text style={[styles.message, isOnLeft('message')]}>{message}</Text>
          </View>
          <View style={styles.timeView}>
            <Text style={[styles.time, isOnLeft('time')]}>{time}</Text>
          </View>
        </View>
      </Animated.View>
    </FlingGestureHandler>
  );
};

export default Message;

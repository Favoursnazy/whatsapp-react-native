import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Conversations} from '../../components/conversations';
import {GLOBAL_STYLES, THEME} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SearchInput} from '../../components/common/search';

const Converstion = () => {
  return (
    <View style={{backgroundColor: THEME.colors.white, flex: 1}}>
      <Conversations>
        <SearchInput />
      </Conversations>
      <TouchableOpacity onPress={() => {}} style={GLOBAL_STYLES.style}>
        <Icon name="chat" size={30} color={THEME.colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default Converstion;

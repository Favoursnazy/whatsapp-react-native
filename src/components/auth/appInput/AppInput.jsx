import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import {GLOBAL_STYLES} from '../../../constants';
import PhoneInput from 'react-native-phone-number-input';
import style from './style';

const AppInput = () => {
  const phoneInputRef = useRef();
  return (
    <View style={GLOBAL_STYLES.mainContainer}>
      <PhoneInput
        ref={phoneInputRef}
        defaultCode="NG"
        withDarkTheme
        withShadow
        textInputStyle={style.input}
      />
    </View>
  );
};

export default AppInput;

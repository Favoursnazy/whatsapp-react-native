import {View, Text, Pressable} from 'react-native';
import React from 'react';

import style from './style';
import {Header} from '../../components/auth/header';
import {AppInput} from '../../components/auth/appInput';
import {AppButton} from '../../components/auth/appButton';
import {THEME} from '../../constants';

const Login = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.form}>
        <Header title="Login" icon="whatsapp" />
        <AppInput />
        <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={style.sigUp}>Don't have an account? Sinup</Text>
        </Pressable>
      </View>
      <AppButton
        onPress={() => navigation.navigate('VerificationScreen')}
        color={THEME.colors.primary}
        title="Log In"
      />
    </View>
  );
};

export default Login;

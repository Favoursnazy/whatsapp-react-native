import {View, Text, Pressable} from 'react-native';
import style from './style';
import {Header} from '../../components/auth/header';
import {AppInput} from '../../components/auth/appInput';
import {AppButton} from '../../components/auth/appButton';
import {THEME} from '../../constants';
import {AppTextInput} from '../../components/auth/appTextInput';

const Register = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.form}>
        <Header title="Sign Up" icon="whatsapp" />
        <AppInput />
        <AppTextInput placeholder="Username" icon="user" size={30} />
        <Pressable onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={style.sigUp}>AlreadY have an account? Sign in</Text>
        </Pressable>
      </View>
      <AppButton
        onPress={() => navigation.navigate('VerificationScreen')}
        color={THEME.colors.primary}
        title="Sign Up"
      />
    </View>
  );
};

export default Register;

import {View, Text, Pressable} from 'react-native';
import style from './style';
import {Header} from '../../components/auth/header';
import {AppButton} from '../../components/auth/appButton';
import {THEME} from '../../constants';
import {AppTextInput} from '../../components/auth/appTextInput';

const Verification = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.form}>
        <Header title="Verification" icon="check-circle" />
        <AppTextInput placeholder="OTP code" icon="lock" size={30} />
      </View>
      <AppButton
        onPress={() => navigation.navigate('HomeScreen')}
        color={THEME.colors.primary}
        title="Verify"
      />
    </View>
  );
};

export default Verification;

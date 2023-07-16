import {StyleSheet} from 'react-native';
import {FONTS, THEME} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: THEME.colors.primary,
  },
  form: {
    flex: 2,
  },
  sigUp: {
    alignSelf: 'center',
    color: THEME.colors.darkgray,
    fontFamily: FONTS.YSABEAU_OFFICE_REGULAR,
    fontSize: 17,
  },
});

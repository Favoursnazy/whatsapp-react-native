import {StyleSheet} from 'react-native';
import {FONTS, THEME} from '../../../constants';

export default StyleSheet.create({
  input: {
    backgroundColor: THEME.colors.white,
    color: THEME.colors.black,
    width: '100%',
    flex: 1,
    height: 50,
    fontFamily: FONTS.YSABEAU_OFFICE_SEMI_BOLD,
  },
});

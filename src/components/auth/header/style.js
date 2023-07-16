import {StyleSheet} from 'react-native';
import {FONTS, THEME} from '../../../constants';

export default StyleSheet.create({
  container: {
    paddingVertical: 50,
    backgroundColor: THEME.colors.primary,
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: THEME.colors.white,
    fontSize: 24,
    fontFamily: FONTS.YSABEAU_OFFICE_BOLD,
    alignSelf: 'center',
  },
});

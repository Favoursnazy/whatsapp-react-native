import {StyleSheet} from 'react-native';
import {FONTS, THEME} from '../../../constants';

export default StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  container: {
    backgroundColor: THEME.colors.white,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  title: {
    fontSize: 20,
    fontFamily: FONTS.YSABEAU_OFFICE_BOLD,
    color: THEME.colors.primary,
  },
});

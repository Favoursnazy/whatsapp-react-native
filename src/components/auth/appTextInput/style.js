import {StyleSheet} from 'react-native';
import {FONTS, THEME} from '../../../constants';

export default StyleSheet.create({
  icon: {
    alignSelf: 'center',
    fontWeight: '500',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: THEME.colors.primary,
  },
  input: {
    borderLeftWidth: 4,
    borderLeftColor: THEME.colors.primary,
    flex: 3,
    backgroundColor: THEME.colors.white,
    color: THEME.colors.black,
    fontSize: 15,
    width: '100%',
    paddingLeft: 10,
    fontFamily: FONTS.YSABEAU_OFFICE_SEMI_BOLD,
  },
});

import {StyleSheet} from 'react-native';
import {FONTS, THEME} from '../../constants';

export default StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 50,
  },
  usernameAndTime: {
    paddingVertical: 50,
    alignItems: 'center',
  },
  username: {
    fontSize: THEME.fontSize.title,
    color: THEME.colors.white,
    fontFamily: FONTS.YSABEAU_OFFICE_BOLD,
  },
  time: {
    fontSize: 15,
    color: THEME.colors.searchBackgound,
    fontFamily: FONTS.YSABEAU_OFFICE_REGULAR,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 50,
    paddingBottom: 90,
  },
  endCallContainer: {
    alignItems: 'center',
  },
});

import {StyleSheet} from 'react-native';
import {FONTS, THEME} from '../../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: THEME.colors.primary,
    paddingTop: 10,
    paddingBottom: 10,
  },
  backButton: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  profileOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 4,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 32.5,
  },
  usernameAndOnlineStatus: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  username: {
    color: THEME.colors.white,
    fontSize: 18,
    fontFamily: FONTS.YSABEAU_OFFICE_BOLD,
  },
  onlineStatus: {
    color: THEME.colors.white,
    fontSize: 16,
    fontFamily: FONTS.YSABEAU_OFFICE_SEMI_BOLD,
  },
  options: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

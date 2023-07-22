import {StyleSheet} from 'react-native';
import {FONTS} from '../../../../constants';

export default StyleSheet.create({
  contactContainer: {
    marginVertical: 5,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  usernameAndBio: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    paddingVertical: 10,
    flex: 1,
  },
  username: {
    fontSize: 15,
    fontFamily: FONTS.YSABEAU_OFFICE_BOLD,
  },
  bio: {
    fontSize: 14,
    fontFamily: FONTS.YSABEAU_OFFICE_SEMI_BOLD,
  },
});

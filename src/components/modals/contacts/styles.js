import {StyleSheet} from 'react-native';
import {THEME, FONTS} from '../../../constants';

export default StyleSheet.create({
  modalContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  input: {
    paddingHorizontal: 15,
    fontSize: 15,
    flex: 1,
    color: THEME.colors.searchText,
    fontFamily: FONTS.YSABEAU_OFFICE_REGULAR,
    alignItems: 'center',
    justifyContent: 'center',
    color: THEME.colors.black,
  },
  row: {
    backgroundColor: THEME.colors.searchBackgound,
    flexDirection: 'row',
    borderRadius: 5,
    height: 45,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontFamily: FONTS.YSABEAU_OFFICE_BOLD,
    alignSelf: 'center',
    paddingBottom: 10,
  },
});

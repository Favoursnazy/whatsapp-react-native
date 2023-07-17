import {StyleSheet} from 'react-native';
import {FONTS, THEME} from '../../../constants';

export default StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  row: {
    backgroundColor: THEME.colors.searchBackgound,
    flexDirection: 'row',
    borderRadius: 5,
    height: 45,
    alignItems: 'center',
    paddingHorizontal: 10,
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
});

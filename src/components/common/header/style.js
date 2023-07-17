import {StyleSheet} from 'react-native';
import {FONTS, THEME} from '../../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: THEME.colors.primary,
    paddingBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    position: 'relative',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    color: THEME.colors.white,
    alignSelf: 'center',
    fontFamily: FONTS.YSABEAU_OFFICE_BOLD,
  },
  imageContainer: {
    borderRadius: 20,
    height: 40,
    width: 40,
    overflow: 'hidden',
  },
  imageStyle: {
    height: 40,
    width: 40,
  },
});

import {StyleSheet} from 'react-native';
import {THEME} from './theme';

export default StyleSheet.create({
  mainContainer: {
    alignSelf: 'center',
    height: 50,
    backgroundColor: THEME.colors.white,
    flexDirection: 'row',
    marginHorizontal: 30,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  style: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: THEME.colors.white,
    borderRadius: 100,
    shadowColor: THEME.colors.primary,
    elevation: 5,
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
  },
});

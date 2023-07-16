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
});

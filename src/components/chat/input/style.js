import {StyleSheet} from 'react-native';
import {FONTS, THEME} from '../../../constants';
import {Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: THEME.colors.white,
  },
  innerContainer: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  inputAndMicroPhone: {
    flexDirection: 'row',
    backgroundColor: THEME.colors.inputBackground,
    flex: 3,
    marginRight: 10,
    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'transparent',
    paddingLeft: 20,
    color: THEME.colors.input,
    flex: 3,
    fontSize: 15,
    height: 50,
    alignSelf: 'center',
    fontFamily: FONTS.YSABEAU_OFFICE_SEMI_BOLD,
  },
  rightIconButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 10,
    borderRadius: 1,
    borderLeftWidth: 1,
    borderLeftColor: '#FFF',
  },
  emoticonButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  sendButton: {
    backgroundColor: THEME.colors.primary,
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

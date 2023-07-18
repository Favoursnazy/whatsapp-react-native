import {StyleSheet} from 'react-native';
import {FONTS, THEME} from '../../constants';

export default StyleSheet.create({
  profileMomodalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.5)',
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  profileModalInnerContainer: {
    backgroundColor: THEME.colors.white,
    borderRadius: 20,
    elevation: 3,
    overflow: 'hidden,',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  profileUsernameContainer: {
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#5557',
    width: '100%',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  profileUsername: {
    color: THEME.colors.white,
    backgroundColor: 'transparent',
    fontFamily: FONTS.YSABEAU_OFFICE_BOLD,
  },
  profileModalOptionsContainer: {
    backgroundColor: THEME.colors.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  profileModalIconContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

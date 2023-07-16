import {Platform} from 'react-native';

const FONTS = {
  ...Platform.select({
    ios: {
      YSABEAU_OFFICE_BOLD: 'YsabeauOffice-Bold',
      YSABEAU_OFFICE_ITALIC: 'YsabeauOffice-Italic',
      YSABEAU_OFFICE_REGULAR: 'YsabeauOffice-Regular',
      YSABEAU_OFFICE_SEMI_BOLD: 'YsabeauOffice-SemiBold',
    },
    android: {
      YSABEAU_OFFICE_BOLD: 'YsabeauOfficeBold',
      YSABEAU_OFFICE_ITALIC: 'YsabeauOfficeItalic',
      YSABEAU_OFFICE_REGULAR: 'YsabeauOfficeRegular',
      YSABEAU_OFFICE_SEMI_BOLD: 'YsabeauOfficeSemiBold',
    },
  }),
};

export default FONTS;

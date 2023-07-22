import {View, Text} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

const AppBottomSheetModal = ({
  children,
  reference,
  index,
  snapPoints,
  setIsOpen,
}) => {
  return (
    <BottomSheetModal
      ref={reference}
      snapPoints={snapPoints}
      index={index}
      onDismiss={() => setIsOpen(false)}>
      {children}
    </BottomSheetModal>
  );
};

export default AppBottomSheetModal;

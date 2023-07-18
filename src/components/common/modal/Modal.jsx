import {Modal} from 'react-native';

const AppModal = ({children, visible, animationType}) => {
  return (
    <Modal animationType={animationType} visible={visible} transparent>
      {children}
    </Modal>
  );
};

export default AppModal;

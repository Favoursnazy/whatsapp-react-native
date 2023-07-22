import {View, Text, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import {Conversations} from '../../components/conversations';
import {GLOBAL_STYLES, THEME} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SearchInput} from '../../components/common/search';
import {AppBottomSheetModal} from '../../components/common/bottomSheetModal';
import styles from './style';
import {Contacts} from '../../components/modals/contacts';

const Converstion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const snapPoints = ['90%'];
  const bottomSheet = useRef();
  const handleOpenBottomSheetModal = () => {
    bottomSheet?.current?.present();
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <View style={{backgroundColor: THEME.colors.white, flex: 1}}>
      <Conversations>
        <SearchInput />
      </Conversations>
      <TouchableOpacity
        onPress={() => handleOpenBottomSheetModal()}
        style={GLOBAL_STYLES.style}>
        <Icon name="chat" size={30} color={THEME.colors.primary} />
      </TouchableOpacity>
      {isOpen && (
        <>
          <View style={styles.modalContainerStyle} />
        </>
      )}
      <AppBottomSheetModal
        snapPoints={snapPoints}
        index={0}
        reference={bottomSheet}
        setIsOpen={setIsOpen}>
        <Contacts />
      </AppBottomSheetModal>
    </View>
  );
};

export default Converstion;

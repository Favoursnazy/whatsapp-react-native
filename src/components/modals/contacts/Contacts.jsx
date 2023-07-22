import {View, Text} from 'react-native';
import {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import {ContactItem} from './contactItem';
import styles from './styles';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const Contacts = () => {
  return (
    <View style={styles.modalContainer}>
      <Text style={styles.heading}>New Chat</Text>
      <View style={styles.row}>
        <FAIcon name="search" color="gray" size={18} />
        <BottomSheetTextInput
          placeholder="Search username"
          style={styles.input}
        />
      </View>
      <ContactItem />
    </View>
  );
};

export default Contacts;

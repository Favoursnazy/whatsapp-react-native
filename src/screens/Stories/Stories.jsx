import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {MyStories} from '../../components/stories';
import styles from '../../constants/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {THEME} from '../../constants';

const Stories = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <MyStories />
      </ScrollView>
      <TouchableOpacity style={styles.style}>
        <Icon name="camera" size={25} color={THEME.colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default Stories;

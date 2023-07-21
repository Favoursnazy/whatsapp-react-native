import {View, ScrollView, TouchableOpacity} from 'react-native';
import {CallItem, AllCalls} from '../../components/calls';
import Icon from 'react-native-vector-icons/FontAwesome5';
import globalStyles from '../../constants/styles';
import {THEME} from '../../constants';

const Call = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <AllCalls />
      </ScrollView>
      <TouchableOpacity style={globalStyles.style}>
        <Icon name="phone" size={25} color={THEME.colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default Call;

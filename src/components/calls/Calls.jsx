import {ScrollView} from 'react-native';
import CallItem from './CallItem';

const Calls = () => {
  return (
    <ScrollView>
      <CallItem
        picture="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        username="Bobby Fowler"
        callStatus={0}
        time="12:00 PM Today"
      />
      <CallItem
        picture="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        username="John Doe"
        callStatus={2}
        time="12:00 PM Today"
      />
      <CallItem
        picture="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        username="Mira Morah"
        callStatus={1}
        time="12:00 PM Today"
      />
      <CallItem
        picture="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        username="Benson Ben"
        callStatus={1}
        time="12:00 PM Today"
      />
    </ScrollView>
  );
};

export default Calls;

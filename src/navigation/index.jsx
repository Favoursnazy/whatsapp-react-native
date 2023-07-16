import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default AppContainer;

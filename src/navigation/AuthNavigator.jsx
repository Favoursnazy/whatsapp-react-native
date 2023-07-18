import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/Login';
import {RegisterScreen} from '../screens/Register';
import {VerificationScreen} from '../screens/Verification';
import HomeNavigator from './HomeNavigator';
import {Header} from '../components/common/header';
import Chat from '../screens/Chat/Chat';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={LoginScreen} name="LoginScreen" />
      <Stack.Screen component={RegisterScreen} name="RegisterScreen" />
      <Stack.Screen component={VerificationScreen} name="VerificationScreen" />
      <Stack.Screen
        component={HomeNavigator}
        name="HomeScreen"
        options={{
          headerShown: true,
          header: () => <Header title="Chat" />,
        }}
      />
      <Stack.Screen component={Chat} name="ChatScreen" />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

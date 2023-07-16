import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/Login';
import {RegisterScreen} from '../screens/Register';
import {VerificationScreen} from '../screens/Verification';
import {HomeScreen} from '../screens/Home';

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
      <Stack.Screen component={HomeScreen} name="HomeScreen" />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

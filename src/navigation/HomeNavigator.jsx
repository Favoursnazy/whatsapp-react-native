import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {FONTS, THEME} from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import {ConversationScreen} from '../screens/Conversation';
import {CallScreen} from '../screens/Call';
import {StoriesScreen} from '../screens/Stories';
import {CameraScreen} from '../screens/Camera';

const TopTab = createMaterialTopTabNavigator();

const HomeNavigator = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Conversations"
      screenOptions={{
        tabBarInactiveTintColor: THEME.colors.white,
        tabBarInactiveTintColor: THEME.colors.white,
        tabBarStyle: {
          backgroundColor: 'transparent',
        },
        tabBarLabelStyle: {
          fontFamily: FONTS.YSABEAU_OFFICE_BOLD,
        },
        tabBarIndicatorStyle: {
          backgroundColor: THEME.colors.white,
        },
      }}
      style={{
        backgroundColor: THEME.colors.primary,
      }}>
      <TopTab.Screen
        component={CameraScreen}
        name="Camera"
        options={{
          tabBarShowLabel: false,
          tabBarShowIcon: true,
          tabBarIcon: ({color}) => (
            <Icon name="camera" size={25} color={color} />
          ),
        }}
      />
      <TopTab.Screen
        component={ConversationScreen}
        name="Conversations"
        options={{
          tabBarLabel: 'Chats',
        }}
      />
      <TopTab.Screen component={CallScreen} name="Calls" />
      <TopTab.Screen component={StoriesScreen} name="Stories" />
    </TopTab.Navigator>
  );
};

export default HomeNavigator;

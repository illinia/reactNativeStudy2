import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Mail, Meet, Settings } from '../screens/TabScreens';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const TabIconIonicons = ({ name, size, color }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Settings"
      tabBarOptions={{
        labelPosition: 'beside-icon',
        showLabel: false,
        style: {
          backgroundColor: '#54b7f9',
          borderTopColor: '#fff',
          borderTopWidth: 2,
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#cfcfcf'
      }}
    >
      <Tab.Screen
        name="Mail"
        component={Mail}
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: props => TabIcon({
            ...props,
            name: props.focused ? 'email' : 'email-outline',
          })
        }}
      />
      <Tab.Screen
        name="Meet"
        component={Meet}
        options={{
          tabBarIcon: props => TabIcon({
            ...props,
            name: props.focused ? 'video' : 'video-outline'
          })
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: props => TabIconIonicons({
            ...props,
            name: props.focused ? 'settings-sharp' : 'settings-outline'
          })
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
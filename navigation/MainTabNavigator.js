import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { create } from 'react-test-renderer';
import CreateScreen from '../screens/CreateScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);
HomeStack.navigationOptions = {
<<<<<<< HEAD
  tabBarLabel: 'Home',
  tabBarIcon:({tintColor})=>(  
    <Ionicons name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} color={tintColor} size={25}/>  
) 
=======
  tabBarLabel: 'Home'
>>>>>>> parent of 111888ff... added icons to the bottomtabnavigator
};

HomeStack.path = '';

const CreateStack = createStackNavigator(
  {
    Create: CreateScreen,
  },
  config
);
CreateStack.navigationOptions = {
  tabBarLabel: 'Create',
  tabBarIcon: ({ tintColor }) => (
    <Ionicons name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} color={tintColor} size={Platform.OS === 'ios' ? 40 : 30}/>
  ),
};

CreateStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings'
};

SettingsStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
<<<<<<< HEAD
  CreateStack,
  SettingsStack,
=======
  SettingsStack
>>>>>>> parent of 111888ff... added icons to the bottomtabnavigator
});

tabNavigator.path = '';

export default tabNavigator;

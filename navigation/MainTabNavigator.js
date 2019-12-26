import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

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
  tabBarLabel: 'Home',
  tabBarIcon:({tintColor})=>(  
    <Ionicons name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} color={tintColor} size={25}/>  
) 
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
  tabBarLabel: 'Settings',
  tabBarIcon: ({ tintColor }) => (
    <Ionicons name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} color={tintColor} size={25}/>
  ),
};

SettingsStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  CreateStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;

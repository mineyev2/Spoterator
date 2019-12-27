import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';


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
    <Ionicons name="ios-home" color={tintColor} size={25}/>  
) 
=======
  tabBarLabel: 'Home'
>>>>>>> parent of 111888ff... added icons to the bottomtabnavigator
};

HomeStack.path = '';


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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  CreateStack,
=======
>>>>>>> parent of a24c78bd... made a create screen for the playlist to be created
=======
>>>>>>> parent of a24c78bd... made a create screen for the playlist to be created
=======
>>>>>>> parent of a24c78bd... made a create screen for the playlist to be created
  SettingsStack,
=======
  SettingsStack
>>>>>>> parent of 111888ff... added icons to the bottomtabnavigator
});

tabNavigator.path = '';

export default tabNavigator;

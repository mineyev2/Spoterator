import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { output } from './screens/SpotifyAPI'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loginButton: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    //image: require('./assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    //image: require('./assets/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    //image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  }
];

export default class App extends Component {
  //for some reason this.state doesn't work here
  state = {
    showRealApp: false,
    result: null,
  }

  //shape of the spotifyLogin button
  /*
  _renderDoneButton = () => {
    return (
      <View style={styles.loginButton}>
        <Text>Login to Spotify</Text>
      </View>
    );
  };
  */

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ result: output.componentDidMount() })
    this.setState({ showRealApp: true })

  }
  render() {
    if (this.state.showRealApp) {
      
      return <AppNavigator/>
    } else {
     return (
       <AppIntroSlider
       slides={slides}
       renderDoneButton={this._renderDoneButton}
       renderNextButton={this._renderNextButton}
       onDone = {this._onDone}
       bottomButton
       doneLabel = 'Login to Spotify'
       />
     )
    }
  }
 
}




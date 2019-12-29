import React, { Component, useState } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
//import * as ImagePicker from 'expo-image-picker';
import { Permissions, Constants } from 'react-native-unimodules';
import ImagePicker from 'react-native-image-picker';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    //no console.log stuff if this is true
    noData: true
  };


  
//selectImage();

export default class CreateScreen extends Component {

    //const [value, onChangeText] = React.useState("idk")

    state = {
        avatarSource: null,
        text: '',
    }

    _onPress = () => {
        console.log("running function")
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
    
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
    
                // You can also display the image using data:
                //const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity onPress={this._onPress} style={{width:150, height:150}}>
                    <ImageToDisplay default={this.state.avatarSource}/>
                </TouchableOpacity>
                <TextInput
                    style={{height: 30, width:200}}
                    margin={10}
                    mode={'outlined'}
                    label='Enter Playlist Name:'
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                />
            </View>
        );
        
        
    }

  }
  
const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
},
welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    flex: 1,
},
instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
},
});

function ImageToDisplay(input) {
    console.log(input);
    if (input.default == null) {
        return (<Image source={require('../images/default.jpeg')} style={{width:150, height:150}} />);
    } else {
        return(<Image source={input.default} style={{width: 150, height: 150}} />);
    }
}
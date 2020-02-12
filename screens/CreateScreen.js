import React, { Component, useState } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
//import * as ImagePicker from 'expo-image-picker';
import { Permissions, Constants } from 'react-native-unimodules';
import ImagePicker from 'react-native-image-picker';
import { authorize } from 'react-native-app-auth'

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
    title: 'Select Avatar',
    //customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
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
            <View style={styles.container}>
                <TouchableOpacity onPress={this._onPress} style={{flex: 1, alignSelf: 'center'}}>
                    <View>
                        {this.state.avatarSource === null ? (
                            <Image source={require('../images/default.jpeg')} style={{ flex: 1, aspectRatio: 1}}/>
                        ) : (
                            <Image source={this.state.avatarSource} style={{ flex: 1, aspectRatio: 1}}/>
                        )}
                    </View>
                </TouchableOpacity>
                <TextInput
                    style={{flex: 1}}
                    mode={'flat'}
                    label='Enter Playlist Name:'
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                />
                <View style={{ flex: 1, alignSelf: 'center'}}>
                    <Button
                        color='rgb(100, 100, 255)'
                        //onPress={() => Alert.alert('Cannot press this one')}
                    >
                        Create Playlist
                    </Button>
                </View>
                
            </View>
        );
        
        
    }

  }
  
const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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
avatarContainer: {
    width: 10
}
});

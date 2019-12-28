import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
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

    state = {
        avatarSource: null
    }

    /*
    getPermissionAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            }
    }
    */

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
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    /*
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
    };

    */
    render() {
        if (this.state.avatarSource == null) {
            return (
                <View style={styles.container}>
                  <Text style={styles.welcome}>This is the CreateScreen</Text>
                  <TouchableOpacity onPress={this._onPress}>
                    <Image source={require('../images/default.jpeg')} />
                  </TouchableOpacity>
                  <Text style={styles.instructions}>this is where the user will create their playlists</Text>
                </View>
            );
        } else {
            console.log("function finished running")
            return (
                <View style={styles.container}>
                  <Text style={styles.welcome}>This is the new CreateScreen</Text>
                  <Image source={this.state.avatarSource} style={{width: 200, height: 200}} />
                  <Text style={styles.instructions}>this is where the user will create their playlists</Text>
                </View>
            ); 
        }
        
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
},
instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
},
});

/*
function selectImage() {
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
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };

            this.setState({
                avatarSource: source
            });
        }
        ran = true;
    });
}
*/

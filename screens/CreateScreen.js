import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

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
let ran = false;

export default class CreateScreen extends Component {

    state = {
        avatarSource: false
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
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
                this.setState({
                    avatarSource: source
                });
            }
            ran = true;
        });
    }


    render() {
        if (!this.state.avatarSource) {
            return (
                <View style={styles.container}>
                  <Text style={styles.welcome}>This is the CreateScreen</Text>
                  <TouchableOpacity onPress={this._onPress}>
                    <View style={{ alignItems: "center", justifyContent: "center", height: 200 }}>
                        <Image source={require('../images/default.jpeg')} />
                    </View>
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

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import ImagePicker from 'react-native-image-picker'

export default function CreateScreen() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>This is the CreateScreen</Text>
          <Text style={styles.instructions}>this is where the user will create their playlists</Text>
        </View>
      );
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
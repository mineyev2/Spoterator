import React, {Component} from 'react'
import { authorize } from 'react-native-app-auth'


const config = {
    clientId: '0e574c577b4247858bbb6730d14ac72f', // available on the app page
    clientSecret: '2795c1cd8939436fb4f842dd82ff64e8', // click "show client secret" to see this
    redirectUrl: 'com.spoterator:/oauth', // the redirect you defined after creating the app
    scopes: ['user-read-email', 'playlist-modify-public', 'user-read-private'], // the scopes you need to access
    serviceConfiguration: {
      authorizationEndpoint: 'https://accounts.spotify.com/authorize',
      tokenEndpoint: 'https://accounts.spotify.com/api/token',
    },
};


export default class LoginScreen extends Component {
    async componentDidMount() {
        try {
            const result = await authorize(config);
            console.log(result.accessToken);
            // result includes accessToken, accessTokenExpirationDate and refreshToken
        } catch (error) {
          console.log(error);
        };
    }

    render() {
        return null;
    }

  }
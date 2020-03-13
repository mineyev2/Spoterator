import React, {Component} from 'react'
import { authorize } from 'react-native-app-auth'
import SpotifyWebApi from 'spotify-web-api-js';


const config = {
    clientId: '0e574c577b4247858bbb6730d14ac72f', // available on the app page
    clientSecret: '2795c1cd8939436fb4f842dd82ff64e8', // click "show client secret" to see this
    redirectUrl: 'com.spoterator:/oauth', // the redirect you defined after creating the app
    scopes: ["user-read-private", "playlist-read", "streaming", "playlist-read-private", "playlist-modify-private", "playlist-modify-public"], // the scopes you need to access
    serviceConfiguration: {
      authorizationEndpoint: 'https://accounts.spotify.com/authorize',
      tokenEndpoint: 'https://accounts.spotify.com/api/token',
    },
};

var result = null;

export const output = {
  async componentDidMount() {
    try {
        const result = await authorize(config);
        //console.log("access token: ", result.accessToken);
        //console.log("access token expiration: ", result.accessTokenExpirationDate);
        //console.log("refresh token: ", result.refreshToken);
        return result;
        // result includes accessToken, accessTokenExpirationDate and refreshToken
    } catch (error) {
      console.log(error);
      return null;
    };
  }
}

export function createPlaylist() {
  console.log('running createPlaylist');
  var spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(result.accessToken);
  spotifyApi.searchTracks('Love')
  .then(function(data) {
    console.log(data.tracks);
  }, function(err) {
    console.error(err);
  });
}
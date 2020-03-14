import React, {Component} from 'react'
import { authorize } from 'react-native-app-auth'
import SpotifyWebApi from 'spotify-web-api-js';
import { processImage } from '../Firebase'



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
        result = await authorize(config);
        console.log(result);
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

export async function createPlaylist(source) {
  //dont really understand async functions that well
  //but have to do await for labels or else theres not enough time for the code to process in all the detected objects in the image

  /*creating playlist is working
  https://developer.spotify.com/documentation/web-api/reference/playlists/create-playlist/
  */

  var songIds = [];

  const playlistOptions = {
    "name": "howdy-doo",
    "description": "New playlist description",
    "public": false
  }

  labels = await processImage(source);
  var spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(result.accessToken);

  

  //have to figure out how to run all of these at once but make it so it waits for all of them to finish before continuing
  for (i = 0; i < labels.length; i++) {
    console.log(labels[i].text);
    await spotifyApi.searchTracks(labels[i].text, {limit: 5})
    .then(function(data) {
      console.log(data);
      for(i = 0; i < data.tracks.items.length; i++) {
        songIds.push(data.tracks.items[i].uri);
      }
      
    }, function(err) {
      console.error(err);
    });
  }
  var userId = (await spotifyApi.getMe()).id;

  var playlistId;

  await spotifyApi.createPlaylist(userId, playlistOptions)
  .then(function(data) {
    console.log("playlist id: " + data.id);
    playlistId = data.id
  }, function(err) {
    console.log(err);
  });

  console.log("track ids: " + songIds);
  spotifyApi.addTracksToPlaylist(playlistId, songIds);
}

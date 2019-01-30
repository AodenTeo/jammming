import React from 'react';
import ReactDOM from 'react-dom';
import queryString from 'query-string';



export const UserDetails = {
  getUserId(apiKey, name, playlist) {
    return fetch('https://api.spotify.com/v1/me',{
      headers: {
        Authorization: 'Bearer ' + apiKey
      }
    }).then(response => {
      return response.json()
    }).then(jsonResponse => {return jsonResponse.id}).then(userId => {console.log(userId); return userId;}).then(userId =>{
        return fetch('https://api.spotify.com/v1/users/' + userId + '/playlists',{
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + apiKey,
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            public: false
          })
        }).then(response => {
          return response.json()
        }).then(jsonResponse => {console.log(jsonResponse); return jsonResponse.id}).then(playlistId => {
          
          return fetch("https://api.spotify.com/v1/playlists/" + playlistId+ "/tracks", {
            method: 'POST',
            headers: {
              Authorization: 'Bearer ' + apiKey,
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
              uris: playlist.map(song => {return song.uri})
            })
          })
        });


    });
  }
}

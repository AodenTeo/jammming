import React from 'react';
import ReactDOM from 'react-dom';
import queryString from 'query-string';



const Spotify = {
  Search(term, apiKey) {
    return fetch('https://api.spotify.com/v1/search?q='+term+'&type=track',{
      headers: {
        Authorization: 'Bearer ' + apiKey
      }
    }).then(response => {
      return response.json()
    }).then(jsonResponse => {
      if (jsonResponse.tracks) {
        return jsonResponse.tracks.items.map(item => ({
          id: item.id,
          name: item.name,
          album: item.album.name,
          artist: item.artists.map(artist => {return artist.name}).join(', '),
          uri: item.uri
        }))
      }
    }).then(formatResponse=> {console.log(formatResponse)
    return formatResponse})
      }
    }

export default Spotify;

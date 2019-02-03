import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar.js';
import SongList from './SongList/SongList.js';
import Playlist from './Playlist/Playlist.js';
import queryString from 'query-string';
import Spotify from './util/searchSpotify.js';
import { UserDetails } from './util/makePlaylist.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { songs: [], playlist: [], playlistname: 'New Playlist' };
    this.searchSpotify = this.searchSpotify.bind(this);
    this.addSong = this.addSong.bind(this);
    this.removeSong = this.removeSong.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickSpotify = this.handleClickSpotify.bind(this);
  }


  searchSpotify(term) {
    const parsed = queryString.parse(window.location.search);
    console.log(parsed);
    if (!parsed.access_token) {
      window.location = 'http://localhost:8888/login'
      console.log(parsed);
    } else {
      let apiKey = parsed.access_token;
      Spotify.Search(term, apiKey).then(songs => {
        this.setState({ songs: songs });
      })
      console.log(this.state.songs);
      console.log('Search Spotify is working!')
      console.log(parsed);
    }


  }

  handleChange(event) {
    let name = event.target.value;
    this.setState({ playlistname: name });
  }

  addSong(song) {
    this.setState({ playlist: [...this.state.playlist, song] });
    console.log(this.state.playlist)
  }
  removeSong(index) {
    this.setState((prevState) => (
      { playlist: prevState.playlist.filter((_, i) => i !== index) }

    ))
    console.log(this.state.playlist);
    console.log('The song has been removed.')
  }
  handleClickSpotify() {
    alert("This playlist has been saved to spotify!")
    const parsed = queryString.parse(window.location.search);
    let apiKey = parsed.access_token;
    let userId = UserDetails.getUserId(apiKey);
    UserDetails.getUserId(apiKey, this.state.playlistname, this.state.playlist);
    console.log(this.state.playlist);
    console.log(this.state.playlistname);
  }
  


  render() {
    return (

      <body>
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar handleClick={this.searchSpotify} />
            <div className="App-playlist">
              <div className="SearchResults">
                <h2>Results</h2>
                <SongList songs={this.state.songs} addSong={this.addSong} />
              </div>
              <div className="Playlist">

                <input
                  className="form-control"
                  type="text" value={this.state.playlistname}
                  onChange={this.handleChange}
                />
                <div className="TrackList">
                  <Playlist playlist={this.state.playlist} removeSong={this.removeSong} />
                </div>
                <a className="Playlist-save" onClick={this.handleClickSpotify}>SAVE TO SPOTIFY</a>
              </div>
            </div>
          </div>
        </div>
      </body>

    );
  }
}

export default App;

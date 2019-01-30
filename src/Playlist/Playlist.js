import React from 'react';
import PlaylistSong from '../PlaylistSongs/PlaylistSongs.js';

class Playlist extends React.Component {
	constructor(props) {
		super(props);


	}
	render() {
    let playlist = [...new Set(this.props.playlist)]

		return (<div className="TrackList">
		{
			playlist.map(song => {
				return <PlaylistSong key = {song.id}song = {song} removeSong = {this.props.removeSong} playlist = {playlist}/>
			}

			)
		}
			</div>)
	}
}
export default Playlist;

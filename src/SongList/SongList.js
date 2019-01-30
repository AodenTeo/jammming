import React from 'react';
import Song from '../Song/Song.js';

class SongList extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (<div className="TrackList">
		{
			this.props.songs.map(song => {
				return <Song key = {song.id} song = {song} addSong = {this.props.addSong} />
			}

			)
		}
			</div>)
	}
}
export default SongList;

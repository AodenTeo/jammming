import React from 'react';


class PlaylistSong extends React.Component {
	constructor(props) {
		super(props)
    this.removeSong = this.removeSong.bind(this);

	}
  removeSong() {
    let index = this.props.playlist.indexOf(this.props.song)
    this.props.removeSong(index)
  }
	render() {
		return (<div className="Track-for-playlist">
                <div className="Track-information">
                  <h3>{this.props.song.name}</h3>
                  <p>{`${this.props.song.artist} | ${this.props.song.album}`}</p>
                </div>
								<a className="Track-action" onClick = {this.removeSong}>-</a>


              </div>)
	}
}
export default PlaylistSong;

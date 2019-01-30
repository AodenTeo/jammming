import React from 'react';


class Song extends React.Component {
	constructor(props) {
		super(props)
		this.addSong = this.addSong.bind(this);
	}
	addSong() {
		this.props.addSong(this.props.song);
		console.log('The Song has been added!')
	}
	render() {
		return (<div className="Track">
                <div className="Track-information">
                  <h3 className="Track-name">{this.props.song.name}</h3>
                  <p>{`${this.props.song.artist} | ${this.props.song.album}`}</p>
                </div>
                <a className="Track-action" onClick={this.addSong}>+</a>
              </div>)
	}
}
export default Song;

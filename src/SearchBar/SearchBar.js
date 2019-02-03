import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { term: 'StringThatWillNotReturnAnyResult' };
		this.handleSearch = this.handleSearch.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.enterPressed = this.enterPressed.bind(this);
	}
	handleSearch(event) {
		this.props.handleClick(this.state.term)

		event.preventDefault();
	}
	enterPressed(event) {
		const code = event.keyCode || event.which;
		if(code === 13) { 
			this.handleSearch();
		}
		
	}
	handleChange(event) {
		let query;
		let safeString;
		safeString = event.target.value.split(" ").map(word => {
			return word.replace(/\W/g, '')
		}).join("%20")
		if (safeString === "" || event.target.value == undefined) {
			query = 'StringThatWillNotReturnAnyResult'
		} else {
			query = safeString
		}

		this.setState({ term: query })
	}

	render() {
		return (<div className="SearchBar">
			<input placeholder="Enter A Song Title" onChange={this.handleChange} onKeyDown={this.enterPressed} />
			<a onClick={this.handleSearch} onKeyUp={this.enterPressed}>SEARCH</a>
		</div>);
	}
}
export default SearchBar;

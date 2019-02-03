import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { term: 'StringThatWillNotReturnAnyResult' };
		this.handleSearch = this.handleSearch.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleSearch(event) {
		this.props.handleClick(this.state.term)

		event.preventDefault();
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
			<input placeholder="Enter A Song Title" onChange={this.handleChange} />
			<a onClick={this.handleSearch}>SEARCH</a>
		</div>);
	}
}
export default SearchBar;

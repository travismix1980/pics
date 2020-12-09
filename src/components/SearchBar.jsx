import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		return (
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>
							<h2>Image Search</h2>
						</label>
						<input type="text" />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;

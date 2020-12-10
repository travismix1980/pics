import React, {Component} from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  }

  onFormSubmit = event => {
    event.preventDefault();
    // submit search value to the app component
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>
              <h2>Image Search</h2>
            </label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({term: e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

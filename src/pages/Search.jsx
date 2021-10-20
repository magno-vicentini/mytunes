import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      nameSearch: '',
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { nameSearch } = this.state;
    const MINLENGTH = 1;
    return (
      <div data-testid="page-search">
        <Header />
        <div>
          <input
            type="text"
            data-testid="search-artist-input"
            name="nameSearch"
            value={ nameSearch }
            onChange={ this.onInputChange }
          />
          <button
            type="submit"
            data-testid="search-artist-button"
            disabled={ nameSearch.length <= MINLENGTH }
          >
            Procurar
          </button>
        </div>
      </div>
    );
  }
}

export default Search;

import React, { Component } from 'react';
import Header from '../components/Header';

class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        <div>Favorites</div>
      </div>
    );
  }
}

export default Favorites;

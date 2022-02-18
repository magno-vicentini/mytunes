import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';
import '../styles/Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      loadingUser: true,
    };
  }

  componentDidMount() {
    this.user();
  }

  user = async () => {
    const user = await getUser();
    this.setState({ user: user.name, loadingUser: false });
  };

  render() {
    const { loadingUser, user } = this.state;
    if (loadingUser) return <Loading />;

    return (
      <header data-testid="header-component" className="header-container">
        <div className="header-card">
          <div className="login-card">
            <h1>Mytunes</h1>
            <div>
              <span>Bem vindo: </span>
              <span data-testid="header-user-name">{user}</span>
            </div>
          </div>
          <div className="links-header">
            <Link
              to="/search"
              data-testid="link-to-search"
              className="link-button"
            >
              Search
              {' '}
            </Link>
            <Link to="/favorites" data-testid="link-to-favorites" className="link-button">
              Favorites
              {' '}
            </Link>
            <Link to="/profile" data-testid="link-to-profile" className="link-button">
              Profile
              {' '}
            </Link>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;

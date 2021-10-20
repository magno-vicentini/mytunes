import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      loadingUser: false,
    };
  }

  componentDidMount() {
    this.user();
  }

  user = async () => {
    this.setState({ loadingUser: true });
    const user = await getUser();
    this.setState({ user: user.name, loadingUser: false });
  }

  render() {
    const { loadingUser, user } = this.state;
    if (loadingUser) return <Loading />;

    return (
      <header data-testid="header-component">
        <div>
          <h1>TrybeTunes</h1>
          <p data-testid="header-user-name">{`Bem Vindo: ${user}`}</p>
          <div>
            <Link to="/search" data-testid="link-to-search">Search </Link>
            <Link to="/favorites" data-testid="link-to-favorites">Favorites </Link>
            <Link to="/profile" data-testid="link-to-profile">Profile </Link>

          </div>
        </div>

      </header>
    );
  }
}
export default Header;

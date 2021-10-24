import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loadingProfile: false,
      profile: [],
    };
  }

  componentDidMount() {
    this.getUserProfile();
  }

  getUserProfile = async () => {
    this.setState({ loadingProfile: true });
    const user = await getUser();
    this.setState({ loadingProfile: false, profile: user });
  }

  render() {
    const { loadingProfile, profile: { name, image } } = this.state;
    if (loadingProfile) return <Loading />;
    return (
      <div data-testid="page-profile">
        <Header />
        <div>
          <div>
            <img data-testid="profile-image" src={ image } alt="" />
            <Link to="/profile/edit">
              <button type="submit">Editar Perfil</button>
            </Link>
          </div>
          <label htmlFor="name">
            Nome:
            <p id="name">{name}</p>
          </label>
          <label htmlFor="email">
            E-mail:
            <p>{`${name}@trybetunes.com`}</p>
          </label>
        </div>
      </div>
    );
  }
}

export default Profile;

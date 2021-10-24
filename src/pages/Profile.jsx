import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loadingProfile: true,
      profile: [],
    };
  }

  componentDidMount() {
    this.getUserProfile();
  }

  getUserProfile = async () => {
    const user = await getUser();
    this.setState({ loadingProfile: false, profile: user });
    console.log(user);
  }

  render() {
    const { loadingProfile, profile: { name, image, description, email } } = this.state;
    if (loadingProfile) {
      return (
        <div>
          <Header />
          <Loading />
        </div>
      );
    }
    return (
      <div data-testid="page-profile">
        <Header />
        <div>
          <div>
            <img data-testid="profile-image" src={ image } alt="" />
            <Link to="/profile/edit">
              <button type="button">Editar perfil</button>
            </Link>
          </div>
          <label htmlFor="name">
            Nome:
            <p id="name">{name}</p>
          </label>
          <label htmlFor="email">
            E-mail:
            <p>{`${email}@trybetunes.com`}</p>
          </label>
          <label htmlFor="description">
            Descrição:
            <p id="description">{`Descrição: ${description}`}</p>
          </label>
        </div>
      </div>
    );
  }
}

export default Profile;

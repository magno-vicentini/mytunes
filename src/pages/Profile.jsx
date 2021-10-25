import React, { Component } from 'react';
// import PropTypes from 'prop-types';
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
    const { loadingProfile,
      profile: { name, image, description, email },
      profile } = this.state;
    if (!profile) return <Loading />;
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
        <div className="profile-card">
          <label htmlFor="nameUser">
            Nome
            <span>{ name }</span>
          </label>
          <label htmlFor="email">
            E-mail:
            <p>{email}</p>
          </label>
          <label htmlFor="description">
            Descrição:
            <p id="description">{description}</p>
          </label>
          <div>
            <img data-testid="profile-image" src={ image } alt="" />
            <Link to="/profile/edit">
              <button type="button">Editar perfil</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

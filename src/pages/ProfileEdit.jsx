import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';
import Loading from './Loading';
import '../styles/ProfileEdit.css';

class ProfileEdit extends Component {
  constructor() {
    super();
    this.state = {
      loadingPorfileEdit: true,
      nameUser: '',
      emailUser: '',
      descriptionUser: '',
      imageUser: '',
      redirect: false,
    };
  }

  componentDidMount() {
    this.getUserProfileEdit();
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  getUserProfileEdit = async () => {
    const user = await getUser();
    this.setState(
      {
        loadingPorfileEdit: false,
        nameUser: user.name,
        emailUser: user.email,
        descriptionUser: user.description,
        imageUser: user.image,
      },
    );
  }

  updateUserProfile = async () => {
    const {
      nameUser,
      emailUser,
      descriptionUser,
      imageUser,
    } = this.state;
    this.setState({ loadingPorfileEdit: true });
    await updateUser(
      {
        name: nameUser,
        email: emailUser,
        image: imageUser,
        description: descriptionUser,
      },
    );
    this.setState({ loadingPorfileEdit: false, redirect: true });
  }

  formValidation = () => {
    const {
      nameUser,
      emailUser,
      descriptionUser,
      imageUser,
    } = this.state;
    if (!nameUser || !descriptionUser || !imageUser) return true;
    if (/^[a-z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(emailUser)) return false;
    return true;
  };

  render() {
    const {
      redirect,
      loadingPorfileEdit,
      nameUser,
      emailUser,
      descriptionUser,
      imageUser,
    } = this.state;
    if (redirect) return <Redirect to="/profile" />;

    if (loadingPorfileEdit) {
      return (
        <div>
          <Header />
          <Loading />
        </div>
      );
    }
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <form className="profile-edit-card">
          <label htmlFor="nameUser">
            <p>Fique à vontade para usar seu nome social!</p>
            Nome
            <input
              data-testid="edit-input-name"
              id="nameUser"
              name="nameUser"
              value={ nameUser }
              required
              type="text"
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="emailUser">
            Email
            <input
              data-testid="edit-input-email"
              placeholder="example@example.com"
              type="email"
              required
              name="emailUser"
              id="emailUser"
              value={ emailUser }
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="descriptionUser">
            Descrição
            <textarea
              data-testid="edit-input-description"
              name="descriptionUser"
              id="descriptionUser"
              required
              cols="20"
              rows="10"
              value={ descriptionUser }
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="imageUser">
            Link imagem
            <input
              data-testid="edit-input-image"
              type="text"
              name="imageUser"
              required
              id="imageeUser"
              value={ imageUser }
              onChange={ this.onInputChange }
            />
          </label>
          <button
            type="button"
            disabled={ this.formValidation() }
            data-testid="edit-button-save"
            onClick={ this.updateUserProfile }
          >
            Editar perfil
          </button>
        </form>
      </div>
    );
  }
}

export default ProfileEdit;

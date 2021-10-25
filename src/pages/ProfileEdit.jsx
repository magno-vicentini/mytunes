import React, { Component } from 'react';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class ProfileEdit extends Component {
  constructor() {
    super();
    this.state = {
      loadingPorfileEdit: false,
      userEdit: [],
      nameUser: '',
      emailUser: '',
      descriptionUser: '',
      imageUser: '',
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
    this.setState({ loadingPorfileEdit: true });
    const user = await getUser();
    this.setState({ loadingPorfileEdit: false, userEdit: user });
  }

  formValidation = () => {
    const {
      nameUser,
      emailUser,
      descriptionUser,
      imageUser,
    } = this.state;
    if (!nameUser && !descriptionUser && !imageUser) return true;
    if (emailUser !== /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/) return true;
    return false;
  };

  render() {
    const {
      loadingPorfileEdit,
      userEdit: { name },
      nameUser,
      emailUser,
      descriptionUser,
      imageUser,
    } = this.state;
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
        <form>
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
              placeholder={ name }
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="emailUser">
            Email
            <input
              data-testid="edit-input-email"
              placeholder="test@test.com"
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
            type="submit"
            disabled={ this.formValidation() }
            data-testid="edit-button-save"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default ProfileEdit;

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';
import '../styles/Login.css';
import playMusic from '../images/gif-play-music.gif';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      loading: false,
      redirect: false,
    };
  }

onInputChange = ({ target }) => {
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  this.setState({
    [name]: value,
  });
}

onInputLogin = async () => {
  const { name } = this.state;
  this.setState({ loading: true });
  await createUser({ name });
  this.setState({ redirect: true, loading: false });
}

render() {
  const { name, redirect, loading } = this.state;
  const MINLENGTH = 2;
  if (redirect) return <Redirect to="/search" />;

  if (loading) return <Loading />;

  return (
    <div data-testid="page-login" className="login">

      <div className="login-container">
        <p>Mytunes</p>
        <img src={ playMusic } alt="gif escutando musica" className="image-music" />
        <p>Sing in </p>
        <form>
          <input
            type="text"
            name="name"
            data-testid="login-name-input"
            value={ name }
            onChange={ this.onInputChange }
          />
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ name.length <= MINLENGTH }
            onClick={ this.onInputLogin }
          >
            Entrar
          </button>
        </form>
      </div>

    </div>
  );
}
}

export default Login;

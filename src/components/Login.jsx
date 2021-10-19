import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends Component {
  render() {
    const { name, onInputChange } = this.props;
    const MINLENGTH = 3;
    return (
      <div data-testid="page-login">
        <p>TrybeTunes</p>
        <form>
          <input
            type="text"
            name="name"
            data-testid="login-name-input"
            value={ name }
            onChange={ onInputChange }
          />
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ name.length <= MINLENGTH }
            onClick={ async () => {
              await createUser({ name });
            } }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  name: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
export default Login;
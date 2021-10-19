import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends Component {
  render() {
    const { name, onInputChange } = this.props;
    const MINLENGTH = 2;
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
              <Loading />;
              await createUser({ name });

              return <Redirect to="/search" />;
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

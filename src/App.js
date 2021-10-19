import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Search from './components/Search';
import Album from './components/Album';
import Favorites from './components/Favorites';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';
import NotFound from './components/NotFound';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
    };
  }

onInputChange = ({ target }) => {
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  this.setState({
    [name]: value,
  });
}

render() {
  const { name } = this.state;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login name={ name } onInputChange={ this.onInputChange } />
        </Route>
        <Route path="/search"><Search /></Route>
        <Route path="/album/:id"><Album /></Route>
        <Route path="/favorites"><Favorites /></Route>
        <Route exact path="/profile"><Profile /></Route>
        <Route path="/profile/edit"><ProfileEdit /></Route>
        <Route path="*"><NotFound /></Route>
      </Switch>
    </BrowserRouter>
  );
}
}

export default App;
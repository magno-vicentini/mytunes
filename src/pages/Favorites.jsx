import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import MusicCard from '../components/MusicCard';
import Loading from './Loading';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      tracks: [],
      loadingSongs: false,
    };
  }

  componentDidMount() {
    this.allFavoriteSongs();
  }

  allFavoriteSongs = async () => {
    this.setState({ loadingSongs: true });
    const favSongs = await getFavoriteSongs();
    this.setState({
      tracks: [...favSongs],
      loadingSongs: false,
    });
  }

  render() {
    const { loadingSongs, tracks } = this.state;
    const { location: { pathname } } = this.props;
    if (loadingSongs) return <Loading />;
    return (
      <div data-testid="page-favorites">
        <Header />
        <label htmlFor="favorita">
          Favorita
          <div id="favorita">

            {
              tracks.map((track) => (
                <MusicCard
                  key={ track.trackId }
                  track={ track }
                  savedTracks={ tracks }
                  pathname={ pathname }
                  callbackParent={ () => this.allFavoriteSongs() }
                />
              ))
            }
          </div>

        </label>
      </div>
    );
  }
}

Favorites.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Favorites;

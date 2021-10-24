import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../pages/Loading';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      loadingFavorite: false,
      checked: false,
    };
  }

  componentDidMount() {
    const { track, savedTracks } = this.props;
    if (savedTracks.find((song) => song.trackName === track.trackName)) {
      this.turnChecked();
    }
    console.log(this.props);
  }

addFavoriteSong = async () => {
  const { track } = this.props;
  this.setState({ loadingFavorite: true });
  await addSong(track);
  this.setState({ loadingFavorite: false });
}

turnChecked = async () => {
  const { checked } = this.state;
  const { track } = this.props;
  if (checked) {
    await removeSong(track);
    const { callbackParent, pathname } = this.props;
    if (pathname === '/favorites') callbackParent();
    return this.setState({ checked: false });
  }
  this.setState({ checked: true });
}

render() {
  const { loadingFavorite, checked } = this.state;
  const { track: { trackName, previewUrl, trackId } } = this.props;
  if (loadingFavorite) return <Loading />;
  return (
    <div>
      <div className="track-example">
        <p>{trackName}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>

        <label htmlFor={ trackName }>
          Favorita
          <input
            data-testid={ `checkbox-music-${trackId}` }
            type="checkbox"
            name={ trackName }
            checked={ checked }
            onChange={ this.turnChecked }
            id={ trackName }
            onClick={ this.addFavoriteSong }
          />

        </label>

      </div>
    </div>
  );
}
}

MusicCard.propTypes = {
  track: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number])).isRequired,
  savedTracks: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
    PropTypes.number])).isRequired,
  pathname: PropTypes.string.isRequired,
  callbackParent: PropTypes.func.isRequired,
};

export default MusicCard;

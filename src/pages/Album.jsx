import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      tracks: [],
      savedTracks: [],
      loadingTracks: false,
    };
  }

  componentDidMount() {
    this.getMusicsId();
  }

  getMusicsId = async () => {
    const { match: { params: { id } } } = this.props;
    // console.log(id);
    this.setState({ loadingTracks: true });
    const musics = await getMusics(id);
    const savedMusics = await getFavoriteSongs();
    this.setState({
      tracks: [...musics],
      savedTracks: [...savedMusics],
      loadingTracks: false });
    const { tracks } = this.state;
    console.log(tracks[0].artistName);
  }

  render() {
    const { tracks, loadingTracks, savedTracks } = this.state;
    if (tracks.length === 0) return <Loading />;
    if (loadingTracks) return <Loading />;
    // console.log(tracks);
    // console.log(savedTracks);
    return (
      <div data-testid="page-album">
        <Header />
        <div className="card-music">
          <div className="card-artist" key={ tracks[0].amgArtistId }>
            <div className="card-image">
              <img className="image-artist" src={ tracks[0].artworkUrl100 } alt="" />
            </div>
            <h3 data-testid="album-name">{ tracks[0].collectionName }</h3>
            <h4 data-testid="artist-name">{ tracks[0].artistName }</h4>
          </div>
          <div>
            {
              tracks.slice(1).map((track) => (
                <MusicCard
                  key={ track.trackId }
                  track={ track }
                  savedTracks={ savedTracks }
                />
              ))
            }
          </div>

        </div>

      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.string),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Album;

import React, { Component } from 'react';
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
      savedTracks: [],
    };
  }

  componentDidMount() {
    this.allFavoriteSongs();
  }

  componentDidUpdate() {
    console.log('carregou novamente');
  }

  allFavoriteSongs = async () => {
    this.setState({ loadingSongs: true });
    const favSongs = await getFavoriteSongs();
    this.setState({
      tracks: [...favSongs],
      loadingSongs: false,
      savedTracks: [...favSongs],
    });
  }

  render() {
    const { loadingSongs, tracks, savedTracks } = this.state;
    if (loadingSongs) return <Loading />;
    console.log(tracks);
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
                  savedTracks={ savedTracks }
                  deleteSavedSong={ this.allFavoriteSongs }
                />
              ))
            }
          </div>

        </label>
      </div>
    );
  }
}

export default Favorites;

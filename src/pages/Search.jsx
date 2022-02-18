import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from './Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import '../styles/Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      nameSearch: '',
      nameSaved: '',
      loadingSearch: false,
      allAlbums: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSearchAlbuns = async () => {
    const { nameSearch } = this.state;
    this.setState({ loadingSearch: true, nameSaved: nameSearch });
    const albums = await searchAlbumsAPI(nameSearch);
    this.setState({ loadingSearch: false, allAlbums: albums, nameSearch: '' });
    console.log(albums);
  };

  createAlbum = () => {
    const { allAlbums, loadingSearch } = this.state;
    if (allAlbums.length === 0) return <h2>Nenhum álbum foi encontrado</h2>;
    if (loadingSearch) return <Loading />;
    return (
      <div>
        <div className="container-albums">

          {
            allAlbums.map((element) => (
              <Link
                data-testid={ `link-to-album-${element.collectionId}` }
                key={ element.collectionId }
                to={ `/album/${element.collectionId}` }
              >
                <div className="card-album">
                  <p>{element.collectionName}</p>
                  <img src={ element.artworkUrl100 } alt="" />
                </div>

              </Link>
            ))
          }
        </div>
      </div>
    );
  }

  render() {
    const { nameSearch, loadingSearch, nameSaved } = this.state;
    const MINLENGTH = 1;
    if (loadingSearch) return <Loading />;
    return (
      <div data-testid="page-search">
        <Header />
        <div className="search-card">
          <div>
            <input
              type="text"
              data-testid="search-artist-input"
              name="nameSearch"
              value={ nameSearch }
              onChange={ this.onInputChange }
            />
            <button
              type="submit"
              data-testid="search-artist-button"
              disabled={ nameSearch.length <= MINLENGTH }
              onClick={ this.onSearchAlbuns }
            >
              Procurar
            </button>
          </div>
          <h1>{`Resultado de álbuns de: ${nameSaved}`}</h1>
          <div>{ this.createAlbum() }</div>
        </div>
      </div>
    );
  }
}

export default Search;

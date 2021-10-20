import React, { Component } from 'react';
import Header from '../components/Header';
// import getMusics from '../services/musicsAPI';

class Album extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     id: '',
  //   };
  // }

  // getMusicsId = () => {
  //   const { match } = this.props;
  //   const { id } = match.params;
  //   this.setState({ id });
  //   // const musics = await getMusics(id);
  //   // console.log(musics);
  //   console.log(id);
  // }

  render() {
    return (
      <div data-testid="page-album">
        <Header />
        <div>alou</div>
      </div>
    );
  }
}

export default Album;

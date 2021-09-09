import React, { Component } from 'react';
import { findCharacters } from '../services/heyArnoldApi';
import Character from '../components/characters/Character';

export default class HeyArnoldDetailContainer extends Component {
  state = {
    loading: true,
    character: {}
  };

  componentDidMount() {
    findCharacters().then((character) =>
      this.setState({ character, loading: false })
    );
  }

  render() {
    const { loading, character } = this.state;

    if (loading) {
      return (
        <img src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
          alt="loading spinner"
        />
      );
    }
    return <Character character={character} />
  }
}

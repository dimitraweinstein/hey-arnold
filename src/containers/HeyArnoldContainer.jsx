import React, { Component } from 'react';
import { findCharacters } from '../services/heyArnoldApi';
import CharacterList from '../components/characters/CharacterList';

export default class HeyArnoldContainer extends Component {
  state = {
    loading: true,
    characters: [],
  };

  async componentDidMount() {
    const characters = await findCharacters();
    this.setState({ characters, loading: false });
  }

  render() {
    const { loading, characters } = this.state;
    if(loading) {
      return (
        <img
          // eslint-disable-next-line max-len
          src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
          alt="loading spinner"
        />
      );
    }
    return (
      <CharacterList
        characters={characters} />
    );
  }
}

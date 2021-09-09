import React, { Component } from 'react';
import CharacterList from '../components/characters/CharacterList';

export default class HeyArnoldContainer extends Component {
  state = {
    loading: true,
    characters: []
  };

  render() {
    const { loading, characters } = this.state;

    if(loading) return <h1>Loading...</h1>;
    return <CharacterList characters={this.characters} />;
  }
}

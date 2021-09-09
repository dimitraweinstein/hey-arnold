import React, { Component } from 'react';
import { findCharacterById } from '../services/heyArnoldApi';
import Character from '../components/characters/Character';

export default class HeyArnoldDetailContainer extends Component {
  state = {
    loading: true,
    character: {}
  };

  componentDidMount() {
    findCharacterById().then((character) =>
      this.setState({ character, loading: false })
    );
  }

  render() {
    const { loading, character } = this.state;
    console.log(character);
    if(loading) {
      return (
        <img src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
          alt="loading spinner"
        />
      );
    }
    return <Character name={character.name} image={character.image} />;
  }
}

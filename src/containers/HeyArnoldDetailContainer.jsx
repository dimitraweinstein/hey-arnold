import React, { Component } from 'react';
import { findCharacterById } from '../services/heyArnoldApi';
import CharacterDetail from '../components/characters/CharacterDetail';

export default class HeyArnoldDetailContainer extends Component {
  state = {
    loading: true,
    character: {},
  };

  componentDidMount() {
    // eslint-disable-next-line max-len
    findCharacterById(this.props.match.params.id)
      .then((character) =>
        this.setState({ character, loading: false })
      );
  }

  render() {
    const { loading, character } = this.state;
    if(loading) {
      return (
        // eslint-disable-next-line max-len
        <img src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
          alt="loading spinner"
        />
      );
    }
    return (
      <CharacterDetail
        id={character.id}
        image={character.image}
        name={character.name}
      />
    );
  }
}

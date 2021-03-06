import React, { Component } from 'react';
import { findOneCharacter } from '../services/heyArnoldApi';
import CharacterDetail from '../components/characters/CharacterDetail';

export default class HeyArnoldDetailContainer extends Component {
  state = {
    loading: true,
    character: {},
  };

  async componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const character = await findOneCharacter(this.props.match.params.id);
    this.setState({ character, loading: false });
  }

  render() {
    const { loading, character } = this.state;
    if(loading) {
      return (
        <img
          // eslint-disable-next-line max-len
          src="https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
          alt="loading spinner"
        />
      );
    }
    return <CharacterDetail
      id={character.id}
      image={character.image}
      name={character.name}
    />;
  }
}

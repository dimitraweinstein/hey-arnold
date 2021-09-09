import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterDetails = ({ character, name }) => (
  <ul aria-label="character">
    <li key={character.id}>
      <Character
        name={chracter.name}
        image={character.image}
      />
    </li>
  </ul>
);

CharacterDetails.propTypes = {
  character: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CharacterDetails;

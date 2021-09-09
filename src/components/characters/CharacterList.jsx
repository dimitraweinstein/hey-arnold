import React from 'react';
import PropTypes from 'prop-types';

const CharacterList = () => ();

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired
}

export default CharacterList;

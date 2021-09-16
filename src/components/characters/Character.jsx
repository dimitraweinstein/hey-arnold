import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ id, name, image }) => (
  <>
    <img src={image} alt={name, id} />
    <h2>{name}</h2>
  </>
);

Character.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;

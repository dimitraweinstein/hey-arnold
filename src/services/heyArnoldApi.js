export const findCharacters = async () => {
  // eslint-disable-next-line max-len
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
  const json = await res.json();
    
  return json.results.map((character) => ({
    id: character.id,
    name: character.name,
    image: character.image
  }));
};

export const findCharacterById = async (id) => {
  // eslint-disable-next-line max-len
  const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`);
  const json = await res.json();
      
  const character = {
    id: json._id,
    name: json.name,
    image: json.image
  };

  return character;
};

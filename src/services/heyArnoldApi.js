export const findCharacters = () => {
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
    .then((res) => res.json())
    .then((json) =>
      json.map((character) => ({
        id: character.id,
        name: character.name,
        image: character.image
      }))
    );
};

export const findCharacterById = (id) => {
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`)
    .then((res) => res.json())
    .then((json) => ({
      id: json._id,
      name: json.name,
      image: json.image
    }));
};

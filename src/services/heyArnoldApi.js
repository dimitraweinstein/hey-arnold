export const findCharacters = () => {
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
    .then((res) => res.json())
    .then((json) =>
      json.map((character) => ({
        name: character.name,
        image: character.image
      }))
    );
};

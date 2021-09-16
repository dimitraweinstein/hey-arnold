export const findCharacters = () => {
  // eslint-disable-next-line max-len
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
    .then((res) => res.json())
    .then((json) =>
      json.map((character) => ({
        id: character._id,
        name: character.name,
        image: character.image,
      }))
    );
};


export const findOneCharacter = (id) => {
  // eslint-disable-next-line max-len
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`)
    .then((res) => res.json())
    .then((json) => ({
      id: json._id,
      name: json.name,
      image: json.image,
    }));
};

// export const findCharacterById = async (id) => {
//   // eslint-disable-next-line max-len
// eslint-disable-next-line max-len
//   const res = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`);
//   const json = await res.json();
      
//   const character = {
//     id: json.id,
//     name: json.name,
//     image: json.image,
//   };

//   return character;
// };

import React from 'react';
import { GlobalContext } from '../PageInfoPokemon';


const InfosPokemon = ({pokemon})=>{
  const {height, weight} = pokemon;
  const abilitis = pokemon.abilities.map((abilitie)=>{
    return abilitie.ability.name;
  });
  const [species, setSpecies] = React.useState(null);
  
  
  React.useEffect(()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon-species/' + pokemon.id;
    async function fetchSpecie(){
    const json = await (await fetch(url)).json();
    setSpecies(json);
  }
  return fetchSpecie();
  }, []);

  if(species === null) return null;
  console.log(species)
  return(
    <>
    <div>
      <ul>
        <li><b>Height:</b> {height}</li>
        <li><b>Weight:</b> {weight}</li>
        <li><b>Abilities: </b>{abilitis.join(', ')}</li>
        <li><b>Capture Rate: </b>{species.capture_rate}</li>
        {species.habitat === null ? (<li><b>Habitat:</b> null</li>) : (<li><b>Habitat:</b> {species.habitat.name}</li>)}
      </ul>
    </div>
    <div>
      <p>{(species.flavor_text_entries[2].flavor_text).replace('', ' ')}</p>
    </div>
    </>
  )
};


const InfoPokemon = ()=>{
  const pokemon = React.useContext(GlobalContext);
  
  return(
    <div>
      <h1>{pokemon.id}# {pokemon.name}</h1>
      <ul>
          {pokemon.types.map((type)=>(
            <li key={type.type.name}>{type.type.name}</li>
          ))}
      </ul>
      <InfosPokemon pokemon={pokemon} />
    </div>
  )
}

export default InfoPokemon;
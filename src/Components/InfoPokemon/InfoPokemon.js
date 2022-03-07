import React from 'react';
import { GlobalContext } from '../PageInfoPokemon';
import styles from './InfoPokemon.module.css';

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
    <div className={styles.divInfos}>
      <ul className={styles.infos}>
        <li><b>Height:</b> {height}</li>
        <li><b>Weight:</b> {weight}</li>
        <li><b>Abilities: </b>{abilitis.join(', ')}</li>
        <li><b>Capture Rate: </b>{species.capture_rate}</li>
        {species.habitat === null ? (<li><b>Habitat:</b> null</li>) : (<li><b>Habitat:</b> {species.habitat.name}</li>)}
      </ul>
    </div>
    <div className={styles.blockquete}>
      <p >{(species.flavor_text_entries[2].flavor_text).replace('', ' ')}</p>
    </div>
    </>
  )
};


const InfoPokemon = ()=>{
  const pokemon = React.useContext(GlobalContext);
  
  return(
    <div className={styles.InfoPokemon}> 
      <h1 className={styles.title}>{pokemon.id}# {pokemon.name}</h1>
      <ul className={styles.types}>
          {pokemon.types.map((type)=>(
            <li key={type.type.name}>{type.type.name}</li>
          ))}
      </ul>
      <InfosPokemon pokemon={pokemon} />
    </div>
  )
}

export default InfoPokemon;
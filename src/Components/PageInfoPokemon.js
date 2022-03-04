import React from 'react';
import { useParams } from 'react-router-dom';
import Head from './Head';

const PageInfoPokemon = ()=>{
  const [pokemon, setPokemon] = React.useState(null);
  const {id} = useParams();

  React.useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response)=> response.json()).then((json)=> setPokemon(json));
  }, [id])

  if(pokemon === null) return null;
  return(
    <div>
      <Head title={pokemon.name.toUpperCase()} description={pokemon.name}/>
      {pokemon.name + ' ' + pokemon.height}
    </div>
  )
}

export default PageInfoPokemon;
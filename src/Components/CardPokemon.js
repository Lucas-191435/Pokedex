import React from 'react';


const CardPokemon = ({pokemon})=>{
  const imgSVG = pokemon.sprites.other.dream_world.front_default;
  const imgPNG =  pokemon.sprites.other["official-artwork"].front_default;

  console.log(pokemon)
  return(
    <div>
      <img src={imgPNG} alt='{}' />
      <div className='{}'>
        <h1>{pokemon.name}</h1>
        <ul>
          {pokemon.types.map((type)=>(
            <li key={type.type.name}>{type.type.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}


export default CardPokemon;
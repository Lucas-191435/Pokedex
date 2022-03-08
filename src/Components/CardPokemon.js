import React from 'react';
import styles from './CardPokemon.module.css';
import '../App.css';

const CardPokemon = ({pokemon})=>{
  const imgSVG = pokemon.sprites.other.dream_world.front_default;
  const imgPNG =  pokemon.sprites.other["official-artwork"].front_default;

  

  return(
    <div className={styles.card}>
      <img src={imgPNG} alt='{}' />
      <div className={styles.content}>
        <h1>{pokemon.name}</h1>
        <ul>
          {pokemon.types.map((type)=>(
             <li className={`${type.type.name}`}  key={type.type.name}>{type.type.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}


export default CardPokemon;
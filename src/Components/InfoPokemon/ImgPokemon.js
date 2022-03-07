import React from 'react';
import { GlobalContext } from '../PageInfoPokemon';
import styles from './InfoPokemon.module.css';



const ImgPokemon  = ()=>{
  const pokemon = React.useContext(GlobalContext);
  console.log(pokemon)
  return(
    <div className={styles.imgPokemon}>
      <div>
      <img src={pokemon.sprites.other["official-artwork"].front_default} />
      </div>
    </div>
  )
}

export default ImgPokemon;
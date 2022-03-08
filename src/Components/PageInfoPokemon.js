import React from 'react';
import { useParams } from 'react-router-dom';
import Head from './Head';
import Evolution from './InfoPokemon/Evolution';
import InfoPokemon from './InfoPokemon/InfoPokemon';
import Moves from './InfoPokemon/Moves';
import ImgPokemon from './InfoPokemon/ImgPokemon';
import Status from './InfoPokemon/Status';
import styles from './PageInfoPokemon.module.css';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children})=>{
  const [pokemon, setPokemon] = React.useState(null);
  const {id} = useParams();
  
  React.useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response)=> response.json()).then((json)=> setPokemon(json));
  }, [id]);



  if(pokemon === null) return null;
  return(<GlobalContext.Provider value={pokemon}>{children}</GlobalContext.Provider>)
}




const PageInfoPokemon = ()=>{
  return(
    <GlobalStorage>
     <section className={styles.container + ' animation2'}>
       <ImgPokemon />
       <InfoPokemon />
       <Status />
       <Evolution />
       <Moves />
     </section>     
    </GlobalStorage>
  )
}

export default PageInfoPokemon;


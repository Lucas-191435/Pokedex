import React, { useCallback } from 'react';
import { GlobalContext } from '../PageInfoPokemon';
import styles from './InfoPokemon.module.css';

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/3.png

const Evolution  = ()=>{
  const [evolutions, setEvolutions] = React.useState([]);
  const urSpecie = React.useContext(GlobalContext).species.url;
  const [cadeia, setCadeia] = React.useState(null);
  React.useEffect(()=> {
    async function pegaCadeia(){
      const urlCadeia = await fetch(urSpecie).then((response)=> response.json()).then((json)=> { return json.evolution_chain.url} );
      const jsonCadeia = await (await fetch(urlCadeia)).json();
      console.log(jsonCadeia.chain)
      setCadeia(jsonCadeia.chain);
    }
    pegaCadeia();
  }, []);

  let arrayPokemon = []
  React.useEffect(() => {
    if(cadeia){
        async function addPokemon(pokemon){
          try{
            const jsonPokemon = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)).json();
            const {name} = jsonPokemon;
            const img = jsonPokemon.sprites.versions["generation-v"]["black-white"].front_default;
            const imgGif =  jsonPokemon.sprites.versions["generation-v"]["black-white"].animated.front_default;
            arrayPokemon = [...arrayPokemon,{name: name, img: img}];
            setEvolutions(arrayPokemon);
          }catch(err){
            console.log('algum erro');
          }finally{
          }
      }
      try{ if(cadeia.species.name) addPokemon(cadeia.species.name);}catch(err){ console.log('')}
      try{ if(cadeia.evolves_to || cadeia.evolves_to) addPokemon(cadeia.evolves_to[0].species.name);}catch(err){ console.log('')}
      try{ if(cadeia.evolves_to[0].evolves_to || cadeia.evolves_to[0].evolves_to === []) addPokemon(cadeia.evolves_to[0].evolves_to[0].species.name);}catch(err){ console.log('')} 
    }
  }, [cadeia]);

  if(cadeia===null)return null;
  return(
    <div className='animation2'>
       <p className={styles.infoComponent}>Evolutions</p>
      <div className={styles.evolution}>
        <ul>
          {evolutions.map((evolution)=>(
            <li key={evolution.name}>
              <img src={evolution.img} />
              <h4>{evolution.name}</h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Evolution;
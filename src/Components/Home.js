import React from 'react';
import { Link } from 'react-router-dom';
import CardPokemon from './CardPokemon';
import Head from './Head';
import styles from './Home.module.css';

const Home = ()=>{
  const [pokemons, setPokemons] = React.useState(null);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(null);
  
  React.useEffect(()=>{
    if(pokemons === null){
      async function fetchPokemons(){
        let arryPokemon = []
        for(let i = 1; i <= 60; i++ ){
          try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const json = await response.json();
            arryPokemon = [...arryPokemon, json]
            setPokemons(arryPokemon);
          }catch(err){
            setError('Aconteceu algum erro');
          }finally{
           
          }
        }
      }
      fetchPokemons()
    }
  },[])

  if(pokemons === null) return null;

  return (
    <div className={styles.home}> 
    <Head title='Home' description='Home'/>
      {pokemons.map((pokemon)=>(
        <Link pokemon={pokemon} to={`infoPokemon/${pokemon.name}`} key={pokemon.id}>
          <CardPokemon pokemon={pokemon}/>
        </Link>
      ))}
    </div>
  );
}
export default Home;
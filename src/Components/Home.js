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



// Para as imagens dos cards
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg
// op 1 - https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png


// IMG elovutions https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/3.png


// URL para puxar informações dos pokemons
//  op 1 - https://pokeapi.co/api/v2/pokemon/1
//  op 2 - https://pokeapi.co/api/v2/pokemon-species/2/

// URL para os item com img
// op1 - https://pokeapi.co/api/v2/item/1/



// Home: Ela vai fazer a requisição e guardar o json no localStorage, E para cada item, vai ser criado o json.
// A requisição para criar o Array de Json, vai ser pra cada um dos pokemons.

// A pessoa vai clicar no card e ser mandada para outra página. 


// Página do pokemon: 
// - nome 
// - Descricao - https://pokeapi.co/api/v2/pokemon-species/{id do pokemon}/
// - 
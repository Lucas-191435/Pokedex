import React from 'react';
import { GlobalContext } from '../PageInfoPokemon';
import styles from './InfoPokemon.module.css';


const Moves = ()=>{
  const urlMoves = React.useContext(GlobalContext).moves.map((move)=>{ return move.move.url});
  const [movesPokemon, setMoves] = React.useState([{}]);

  let arrayMoves = [];
  React.useEffect(() => {
    urlMoves.map((URL)=>{
      async function fetchMove(url){
        try{
          const response = await (await fetch(url)).json();
          const {name, pp, power} = response;
          const type = response.type.name;
          const obj = {name, pp, power, type};
          arrayMoves = [...arrayMoves, obj];
          setMoves(arrayMoves);
        }catch(err){console.log(err)}finally{}
      }
      fetchMove(URL);
    })
  }, []);


  if(movesPokemon === []) return null;
  console.log(movesPokemon)
  return(
    <div className={styles.moves}>
      <ul>
        {movesPokemon.map(({name, type, pp, power})=>(
          <li key={name}><b>{name}</b> <span><p>{type}</p><p>{pp}</p></span></li>
        ))}
      </ul>
    </div>
  )
}

export default Moves;
import React from 'react';
import { GlobalContext } from '../PageInfoPokemon';
import styles from './InfoPokemon.module.css';

const Status = ()=>{
  const pokemon = React.useContext(GlobalContext);
  const {stats} = pokemon;
  return(
    <div className={styles.status}>
      <ul>
        {stats.map((status,index)=>(
          <li key={status.stat.name}><b>{status.stat.name}: <div><span style={{width: `${(status.base_stat * 1)}%`}}>{status.base_stat}</span></div></b></li>
        ))}
      </ul>
    </div>
  )
}

export default Status;
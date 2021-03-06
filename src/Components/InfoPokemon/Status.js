import React from 'react';
import { GlobalContext } from '../PageInfoPokemon';
import styles from './InfoPokemon.module.css';

const Status = ()=>{
  const pokemon = React.useContext(GlobalContext);
  const {stats} = pokemon;
  return(
    <div>
      <p className={styles.infoComponent}>Status</p>
      <div className={styles.status}>
        <ul>
          {stats.map((status)=>(
            <li key={status.stat.name}><b>{status.stat.name}: </b><div><span className={`${status.stat.name}`} style={{width: `${(status.base_stat * 100 / 200)}%`}}>{status.base_stat}</span></div></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Status;
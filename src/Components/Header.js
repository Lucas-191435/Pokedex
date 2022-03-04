import React from 'react';
import styles from './Header.module.css';
import logo from '../img/logoPokemon.svg';
const Header = ()=>{
  return(
   <header className={styles.header}>
     <img src={logo} alt='logo Pokemon' />
   </header>
  )
}

export default Header;
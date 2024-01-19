import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.appHeader}>
      <h1 className='glow'>Beats Dating App</h1>
    </header>
  );
}
 
export default Header;
import React from 'react';

import styles from './header.module.css';

const Header = ({ logo }) => (
  <header className={styles.header}>
    <img src={logo} alt="product logo" />
  </header>
)

export default Header;

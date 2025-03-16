'use client';

import Link from 'next/link';
import MatrixLogo from './MatrixLogo';
import styles from '../styles/Header.module.css';
import MenuToggle from '../components/MenuToggle';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          {/* Logo */}
          <h1 className={styles.logo}>
            <MatrixLogo />
          </h1>

          {/* Menu Toggle Component (Handles Nav & Overlay) */}
          <MenuToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;

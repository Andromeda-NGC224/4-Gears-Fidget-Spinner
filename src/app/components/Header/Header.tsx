import React from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import LanguageToggle from '../LanguageToggle/LanguageToggle';

import css from './Header.module.css';

export interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className={css.header}>
      <Link href="/" className={css.logoContainer}>
        <h1 className={css.logoText}>FLEXIFUN</h1>
        <p className={css.slogan}>EXPLORE - PLAY - LEARN</p>
      </Link>

      <div className={css.buttonsContainer}>
        <LanguageToggle />

        <button className={css.burgerMenu}>
          <RxHamburgerMenu size={16} />
        </button>
      </div>

      {children}
    </header>
  );
}

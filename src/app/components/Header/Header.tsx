'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import BurgerMenuOverlay from '../BurgerMenuOverlay/BurgerMenuOverlay';

import css from './Header.module.css';

export interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={css.header}>
      <Link href="/" className={css.logoContainer}>
        <h1 className={css.logoText}>FLEXIFUN</h1>
        <p className={css.slogan}>EXPLORE - PLAY - LEARN</p>
      </Link>

      <div className={css.buttonsContainer}>
        <LanguageToggle />

        <button className={css.burgerMenu} onClick={() => setIsMenuOpen(true)}>
          <RxHamburgerMenu size={16} />
        </button>
      </div>

      {isMenuOpen && <BurgerMenuOverlay onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
}

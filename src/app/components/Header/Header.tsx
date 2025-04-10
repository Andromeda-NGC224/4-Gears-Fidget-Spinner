'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import BurgerMenuOverlay from '../BurgerMenuOverlay/BurgerMenuOverlay';

import css from './Header.module.css';
import OrderBtn from '../OrderBtn/OrderBtn';
import SmoothScrollLink from '../SmoothScrollLink/SmoothScrollLink';

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

      <nav className={css.linksList}>
        <SmoothScrollLink targetId="steps-to-develop">
          Що розвиває набір
        </SmoothScrollLink>
        <SmoothScrollLink targetId="exercises">
          Спеціальні вправи
        </SmoothScrollLink>
        <SmoothScrollLink targetId="how-it-work">Як це працює</SmoothScrollLink>
        <SmoothScrollLink targetId="reviews">Відгуки</SmoothScrollLink>
      </nav>

      <div className={css.buttonsContainer}>
        <LanguageToggle />

        <button className={css.burgerMenu} onClick={() => setIsMenuOpen(true)}>
          <RxHamburgerMenu size={16} />
        </button>
        <OrderBtn
          style={{ padding: '20px 42px' }}
          className={css.hideOnSmallScreen}
        />
      </div>

      {isMenuOpen && <BurgerMenuOverlay onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
}

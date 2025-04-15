'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import BurgerMenuOverlay from '../BurgerMenuOverlay/BurgerMenuOverlay';

import css from './HeaderExercises.module.css';
import OrderBtn from '@/components/OrderBtn/OrderBtn';

import { useTranslations } from 'next-intl';

export interface HeaderProps {
  children?: React.ReactNode;
}

export default function HeaderExercises() {
  const t = useTranslations();

  return (
    <header className={css.header}>
      <Link href="/" className={css.logoContainer}>
        <h1 className={css.logoText}>FLEXIFUN</h1>
        <p className={css.slogan}>EXPLORE - PLAY - LEARN</p>
      </Link>

      <div className={css.buttonsContainer}>
        <LanguageToggle />

        <Link href="/" className={css.btnBack}>
          {t('to_main_page_btn')}
        </Link>
      </div>
    </header>
  );
}

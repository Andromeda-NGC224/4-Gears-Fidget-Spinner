'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import BurgerMenuOverlay from '../BurgerMenuOverlay/BurgerMenuOverlay';

import css from './HeaderExercises.module.css';
import OrderBtn from '@/components/OrderBtn/OrderBtn';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export interface HeaderProps {
  children?: React.ReactNode;
}

export default function HeaderExercises() {
  const t = useTranslations();

  return (
    <header className={css.header}>
      <Link href="/" className={css.logoContainerLowWidth}>
        <Image
          width={116}
          height={35}
          src={'/images/logoSmall.png'}
          alt="logo"
        ></Image>
      </Link>

      <Link href="/" className={css.logoContainerHighWidth}>
        <Image
          width={220}
          height={64}
          src={'/images/logo.png'}
          alt="logo"
        ></Image>
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

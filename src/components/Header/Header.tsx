'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import BurgerMenuOverlay from '../BurgerMenuOverlay/BurgerMenuOverlay';

import css from './Header.module.css';
import OrderBtn from '@/components/OrderBtn/OrderBtn';
import SmoothScrollLink from '../SmoothScrollLink/SmoothScrollLink';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

      <nav className={css.linksList}>
        <SmoothScrollLink targetId="steps-to-develop">
          {t('what_develops_the_set')}
        </SmoothScrollLink>
        <SmoothScrollLink targetId="exercises">
          {t('special_exercises')}
        </SmoothScrollLink>
        <SmoothScrollLink targetId="how-it-work">
          {t('how_it_works')}
        </SmoothScrollLink>
        <SmoothScrollLink targetId="reviews">{t('reviews')}</SmoothScrollLink>
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

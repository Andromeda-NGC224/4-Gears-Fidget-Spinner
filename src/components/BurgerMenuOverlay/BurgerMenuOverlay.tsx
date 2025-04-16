'use client';

import React from 'react';
import { TfiClose } from 'react-icons/tfi';
import css from './BurgerMenuOverlay.module.css';
import SmoothScrollLink from '../SmoothScrollLink/SmoothScrollLink';
import OrderBtn from '../OrderBtn/OrderBtn';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  onClose: () => void;
}

const BurgerMenuOverlay = ({ onClose }: Props) => {
  const t = useTranslations();
  return (
    <div className={css.overlay}>
      <div className={css.logoBtnContainer}>
        <Link href="/" className={css.logoContainerLowWidth}>
          <Image
            width={116}
            height={35}
            src={'/images/logoWhite.png'}
            alt="logo"
          ></Image>
        </Link>

        <button className={css.closeBtn} onClick={onClose}>
          <TfiClose size={16} color="#ffffff" />
        </button>
      </div>

      <div className={css.linksColumn}>
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
      </div>

      <div className={css.linksColumn}>
        <ul className={css.linksList}>
          <li className={css.linksTitle}>{t('user_agreement')}</li>
        </ul>
      </div>

      <OrderBtn
        style={{
          color: '#ff9466',
          padding: '18px 40px',
          background: '#ffffff',
          alignSelf: 'flex-start',
        }}
      />
    </div>
  );
};

export default BurgerMenuOverlay;

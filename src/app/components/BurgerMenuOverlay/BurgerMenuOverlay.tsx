'use client';

import React from 'react';
import { TfiClose } from 'react-icons/tfi';
import Link from 'next/link';
import css from './BurgerMenuOverlay.module.css';
import SmoothScrollLink from '../SmoothScrollLink/SmoothScrollLink';
import OrderBtn from '../OrderBtn/OrderBtn';

interface Props {
  onClose: () => void;
}

const BurgerMenuOverlay = ({ onClose }: Props) => {
  return (
    <div className={css.overlay}>
      <div className={css.logoBtnContainer}>
        <div className={css.logoSection}>
          <h2 className={css.logo}>FLEXIFUN</h2>
          <p className={css.slogan}>EXPLORE – PLAY – LEARN</p>
        </div>
        <button className={css.closeBtn} onClick={onClose}>
          <TfiClose size={16} color="#ffffff" />
        </button>
      </div>

      <div className={css.linksColumn}>
        <nav className={css.linksList}>
          <SmoothScrollLink targetId="steps-to-develop" onClick={onClose}>
            Що розвиває набір
          </SmoothScrollLink>
          <SmoothScrollLink targetId="exercises" onClick={onClose}>
            Спеціальні вправи
          </SmoothScrollLink>
          <SmoothScrollLink targetId="how-it-work" onClick={onClose}>
            Як це працює
          </SmoothScrollLink>
          <SmoothScrollLink targetId="reviews" onClick={onClose}>
            Відгуки
          </SmoothScrollLink>
        </nav>
      </div>

      <div className={css.linksColumn}>
        <ul className={css.linksList}>
          <li className={css.linksTitle}>Угода користувача</li>
        </ul>
      </div>

      <OrderBtn
        style={{
          color: '#5390ec',
          padding: '18px 40px',
          background: '#ffffff',
          alignSelf: 'flex-start',
        }}
      />
    </div>
  );
};

export default BurgerMenuOverlay;

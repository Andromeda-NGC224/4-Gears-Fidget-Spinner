'use client';

import React from 'react';
import { TfiClose } from 'react-icons/tfi';
import Link from 'next/link';
import css from './BurgerMenuOverlay.module.css';

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
        <ul className={css.linksList}>
          <li>Що розвиває набір</li>
          <li>Спеціальні вправи</li>
          <li>Як це працює</li>
          <li>Відгуки</li>
        </ul>
      </div>

      <div className={css.linksColumn}>
        <ul className={css.linksList}>
          <li className={css.linksTitle}>Угода користувача</li>
        </ul>
      </div>

      <button className={css.orderButton}>Замовити</button>
    </div>
  );
};

export default BurgerMenuOverlay;

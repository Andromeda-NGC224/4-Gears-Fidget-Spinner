'use client';
import React, { useState } from 'react';
import css from './LanguageToggle.module.css';

export default function LanguageToggle() {
  const [activeLang, setActiveLang] = useState<'SK' | 'UA'>('SK');

  return (
    <div className={css.toggleContainer}>
      <div
        className={`${css.toggleBackground} ${
          activeLang === 'UA' ? css.activeRight : ''
        }`}
      >
        <button
          className={`${css.toggleButton} ${
            activeLang === 'SK' ? css.active : ''
          }`}
          onClick={() => setActiveLang('SK')}
        >
          SK
        </button>
        <button
          className={`${css.toggleButton} ${
            activeLang === 'UA' ? css.active : ''
          }`}
          onClick={() => setActiveLang('UA')}
        >
          UA
        </button>
        <div
          className={`${css.slider} ${
            activeLang === 'UA' ? css.slideRight : ''
          }`}
        />
      </div>
    </div>
  );
}

import React from 'react';
import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <div className={css.logoSection}>
          <h2 className={css.logo}>FLEXIFUN</h2>
          <p className={css.slogan}>EXPLORE – PLAY – LEARN</p>
        </div>

        <div className={css.linksColumn}>
          <ul className={css.linksList}>
            <li className={css.linksTitle}>FlexiFun Geometry</li>
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
    </footer>
  );
}

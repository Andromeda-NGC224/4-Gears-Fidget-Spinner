import React from 'react';
import css from './Footer.module.css';
import SmoothScrollLink from '../SmoothScrollLink/SmoothScrollLink';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <div className={css.logoSection}>
          <h2 className={css.logo}>FLEXIFUN</h2>
          <p className={css.slogan}>EXPLORE – PLAY – LEARN</p>
        </div>

        <div className={css.linksColumn}>
          <nav className={css.linksList}>
            <li className={css.linksTitle}>FlexiFun Geometry</li>
            <SmoothScrollLink targetId="steps-to-develop">
              Що розвиває набір
            </SmoothScrollLink>
            <SmoothScrollLink targetId="exercises">
              Спеціальні вправи
            </SmoothScrollLink>
            <SmoothScrollLink targetId="how-it-work">
              Як це працює
            </SmoothScrollLink>
            <SmoothScrollLink targetId="reviews">Відгуки</SmoothScrollLink>
          </nav>
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

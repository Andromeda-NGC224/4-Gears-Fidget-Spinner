import React from 'react';
import css from './Footer.module.css';
import SmoothScrollLink from '../SmoothScrollLink/SmoothScrollLink';
import OrderBtn from '@/app/[locale]/components/OrderBtn/OrderBtn';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <div className={css.logoAndLinks}>
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
              <p className={css.sertficats}>Сертифікати</p>
            </nav>
          </div>
        </div>

        <div className={css.agreementAndOrder}>
          <p className={css.linksTitle}>Угода користувача</p>

          <OrderBtn className={css.orderButton} />
        </div>
      </div>
    </footer>
  );
}

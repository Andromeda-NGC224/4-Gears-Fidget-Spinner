import React from 'react';
import css from './Footer.module.css';
import SmoothScrollLink from '../SmoothScrollLink/SmoothScrollLink';
import OrderBtn from '@/components/OrderBtn/OrderBtn';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
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
                {t('what_develops_the_set')}
              </SmoothScrollLink>
              <SmoothScrollLink targetId="exercises">
                {t('special_exercises')}
              </SmoothScrollLink>
              <SmoothScrollLink targetId="how-it-work">
                {t('how_it_works')}
              </SmoothScrollLink>
              <SmoothScrollLink targetId="reviews">
                {t('reviews')}
              </SmoothScrollLink>
              <p className={css.sertficats}>{t('certificates')}</p>
            </nav>
          </div>
        </div>

        <div className={css.agreementAndOrder}>
          <p className={css.linksTitle}>{t('user_agreement')}</p>

          <OrderBtn className={css.orderButton} />
        </div>
      </div>
    </footer>
  );
}

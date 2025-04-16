import React from 'react';
import css from './Footer.module.css';
import SmoothScrollLink from '../SmoothScrollLink/SmoothScrollLink';
import OrderBtn from '@/components/OrderBtn/OrderBtn';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations();
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <div className={css.logoAndLinks}>
          <Link href="/" className={css.logoContainerLowWidth}>
            <Image
              width={202}
              height={60}
              src={'/images/logoWhite.png'}
              alt="logo"
            ></Image>
          </Link>

          <Link href="/" className={css.logoContainerHighWidth}>
            <Image
              width={220}
              height={65}
              src={'/images/logoWhite.png'}
              alt="logo"
            ></Image>
          </Link>

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

          <OrderBtn className={css.orderButtonFooter} />
        </div>
      </div>
    </footer>
  );
}

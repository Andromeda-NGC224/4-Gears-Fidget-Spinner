import React from 'react';

import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import ImageSlider from '@/components/ImageSlider/ImageSlider';
import css from './GeometrySection.module.css';
import OrderBtn from '@/components/OrderBtn/OrderBtn';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function GeometrySection() {
  const t = useTranslations();

  return (
    <section className={css.section}>
      <div className={css.content}>
        <h2 className={css.title}>{t('geometry_title')}</h2>
        <h3 className={css.subtitle}>{t('geometry_subtitle')}</h3>

        <p className={css.description}>{t('geometry_description')}</p>

        <div className={css.imgContainerlowWidth}>
          <Image
            src="/images/heroSection.png"
            alt="heroSection"
            width={328}
            height={328}
            priority
          />
          <p className={css.imgContainerText}>Словацьке виробництво</p>
        </div>

        <div className={css.actions}>
          <OrderBtn className={css.orderButtonHighWidth} />
          <div className={css.priceContainer}>
            <span className={css.price}>700₴</span>
            <span className={css.oldPrice}>420₴</span>
          </div>
          <OrderBtn className={css.orderButtonLowWidth} />
        </div>
      </div>

      <div className={css.imgContainerHighWidth}>
        <Image
          src="/images/heroSection.png"
          alt="heroSection"
          width={688}
          height={614}
          priority
        />
        <p className={css.imgContainerText}>{t('slovak_production')}</p>
      </div>
    </section>
  );
}

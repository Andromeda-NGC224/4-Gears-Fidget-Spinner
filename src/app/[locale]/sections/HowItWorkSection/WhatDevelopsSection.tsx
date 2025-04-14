'use client';

import HowItWorkCard from '@/app/[locale]/components/HowItWorkCard/HowItWorkCard';
import OrderBtn from '@/app/[locale]/components/OrderBtn/OrderBtn';
import css from './WhatDevelopsSection.module.css';
import { useTranslations } from 'next-intl';

const WhatDevelopsSection = () => {
  const t = useTranslations();

  return (
    <section id="how-it-work" className={css.section}>
      <h2 className={css.title}>{t('how_it_work_title')}</h2>

      <div className={css.cardsContainer}>
        <HowItWorkCard
          title={t('how_it_work_motor_title')}
          imageSrc="/images/motor.png"
          items={[
            t('how_it_work_motor_1'),
            t('how_it_work_motor_2'),
            t('how_it_work_motor_3'),
          ]}
        />

        <HowItWorkCard
          title={t('how_it_work_concentration_title')}
          imageSrc="/images/concentration.png"
          items={[
            t('how_it_work_concentration_1'),
            t('how_it_work_concentration_2'),
            t('how_it_work_concentration_3'),
          ]}
        />

        <HowItWorkCard
          title={t('how_it_work_neuroplasticity_title')}
          imageSrc="/images/neuroplasticity.png"
          items={[
            t('how_it_work_neuroplasticity_1'),
            t('how_it_work_neuroplasticity_2'),
            t('how_it_work_neuroplasticity_3'),
          ]}
        />
      </div>

      <OrderBtn className={css.orderButton} />
    </section>
  );
};

export default WhatDevelopsSection;

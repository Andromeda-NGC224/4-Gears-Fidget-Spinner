'use client';

import HowItWorkCard from '@/components/HowItWorkCard/HowItWorkCard';
import OrderBtn from '@/components/OrderBtn/OrderBtn';
import css from './WhatDevelopsSection.module.css';
import { useTranslations } from 'next-intl';

const WhatDevelopsSection = () => {
  const t = useTranslations();

  const cardsData = [
    {
      titleKey: 'how_it_work_motor_title',
      imageSrc: '/images/motor.png',
      itemsKeys: [
        'how_it_work_motor_1',
        'how_it_work_motor_2',
        'how_it_work_motor_3',
      ],
    },
    {
      titleKey: 'how_it_work_concentration_title',
      imageSrc: '/images/concentration.png',
      itemsKeys: [
        'how_it_work_concentration_1',
        'how_it_work_concentration_2',
        'how_it_work_concentration_3',
      ],
    },
    {
      titleKey: 'how_it_work_neuroplasticity_title',
      imageSrc: '/images/neuroplasticity.png',
      itemsKeys: [
        'how_it_work_neuroplasticity_1',
        'how_it_work_neuroplasticity_2',
        'how_it_work_neuroplasticity_3',
      ],
    },
  ];

  return (
    <section id="how-it-work" className={css.section}>
      <h2 className={css.title}>{t('how_it_work_title')}</h2>
      <div className={css.cardsContainer}>
        {cardsData.map((card, index) => (
          <HowItWorkCard
            key={index}
            title={t(card.titleKey)}
            imageSrc={card.imageSrc}
            items={card.itemsKeys.map((itemKey) => t(itemKey))}
          />
        ))}
      </div>

      <OrderBtn className={css.orderButton} />
    </section>
  );
};

export default WhatDevelopsSection;

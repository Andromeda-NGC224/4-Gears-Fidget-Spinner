'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import css from './ExercisesPageSection.module.css';
import HowItWorkCard from '@/components/HowItWorkCard/HowItWorkCard';

const ExercisesPageSection = () => {
  const t = useTranslations();
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveModalIndex(index);
  };

  const handleCloseModal = () => {
    setActiveModalIndex(null);
  };

  const cardsData = [
    {
      titleKey: 'roundabout_title',
      imageSrc: '/images/exercise_1.png',
      itemsKeys: ['roundabout_1', 'roundabout_2'],
      btn: true,
    },
    {
      titleKey: 'dancers_title',
      imageSrc: '/images/exercise_2.png',
      itemsKeys: ['dancers_1', 'dancers_2'],
      btn: true,
    },
    {
      titleKey: 'combined_title',
      imageSrc: '/images/exercise_3.png',
      itemsKeys: ['combined_1', 'combined_2'],
      btn: true,
    },
    {
      titleKey: 'control_title',
      imageSrc: '/images/exercise_4.png',
      itemsKeys: ['control_1', 'control_2'],
      btn: true,
    },
  ];

  return (
    <section className={css.section}>
      <h2 className={css.title}>{t('exercises_page_title')}</h2>
      <div className={css.cardsContainer}>
        {cardsData.map((card, index) => (
          <div key={index}>
            <HowItWorkCard
              title={t(card.titleKey)}
              imageSrc={card.imageSrc}
              items={card.itemsKeys.map((itemKey) => t(itemKey))}
              btn={card.btn}
              cardIndex={index}
              onCardClick={handleCardClick}
              isModalOpen={activeModalIndex === index}
              onCloseModal={handleCloseModal}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExercisesPageSection;

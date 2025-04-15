'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import ReviewCard from '@/components/ReviewCard/ReviewCard';

import css from './ReviewsSection.module.css';
import OrderBtn from '@/components/OrderBtn/OrderBtn';
import LoaderBtn from '@/components/LoaderBtn/LoaderBtn';

const ReviewsSection = () => {
  const t = useTranslations();

  const reviews = [
    {
      imageSrc: '/images/zuzana.png',
      author: t('review_1_author'),
      position: t('review_1_position'),
      text: t('review_1_text'),
    },
    {
      imageSrc: '/images/tatiana.png',
      author: t('review_2_author'),
      position: t('review_2_position'),
      text: t('review_2_text'),
    },
    {
      imageSrc: '/images/vlada.png',
      author: t('review_3_author'),
      position: t('review_3_position'),
      text: t('review_3_text'),
    },
  ];

  return (
    <section id="reviews" className={css.section}>
      <h2 className={css.title}>{t('section_title')}</h2>
      <LoaderBtn className={css.loaderBtn} />
      <ul className={css.list}>
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </ul>
      <OrderBtn className={css.orderButton} />
    </section>
  );
};

export default ReviewsSection;

'use client';

import { useTranslations } from 'next-intl';
import ImageSlider from '@/app/[locale]/components/ImageSlider/ImageSlider';
import ExercisesList from '@/app/[locale]/components/ExercisesList/ExercisesList';
import OrderBtn from '@/app/[locale]/components/OrderBtn/OrderBtn';
import WhyChooseList from '@/app/[locale]/components/WhyChooseList/WhyChooseList';
import Image from 'next/image';
import LoaderBtn from '@/app/[locale]/components/LoaderBtn/LoaderBtn';

import css from './ExercisesSection.module.css';

const ExercisesSection = () => {
  const t = useTranslations();

  const exercises = [
    t('exercise_1'),
    t('exercise_2'),
    t('exercise_3'),
    t('exercise_4'),
  ];

  const sliderImages = [
    '/images/playImage.png',
    '/images/playImage.png',
    '/images/playImage.png',
    '/images/playImage.png',
    '/images/playImage.png',
  ];

  const whyChooseItems = [
    {
      image: '/images/qr.png',
      text: t('why_choose_1'),
    },
    {
      image: '/images/time.png',
      text: t('why_choose_2'),
    },
    {
      image: '/images/shield.png',
      text: t('why_choose_3'),
    },
  ];

  return (
    <section id="exercises" className={css.section}>
      <div className={css.card}>
        <div className={css.sliderWrapperLowWidth}>
          <ImageSlider images={sliderImages} width={288} height={288} />
        </div>
        <div className={css.sliderWrapperHighWidth}>
          <Image
            src="/images/playImage.png"
            alt="playImage"
            width={138}
            height={138}
            className={css.image}
            priority
          />
        </div>

        <div className={css.textBlock}>
          <h3 className={css.title}>{t('exercises_title')}</h3>
          <p className={css.subtitle}>{t('exercises_subtitle')}</p>
          <ExercisesList items={exercises} />
          <div className={css.buttonsContainer}>
            <LoaderBtn className={css.loaderBtn} />
            <OrderBtn className={css.orderButton} />
          </div>
        </div>
      </div>

      <div className={css.WhyChooseContainer}>
        <h2 className={css.WhyChooseTitle}>{t('why_choose_title')}</h2>
        <WhyChooseList items={whyChooseItems} />
        <OrderBtn className={css.orderButton} />
      </div>
    </section>
  );
};

export default ExercisesSection;

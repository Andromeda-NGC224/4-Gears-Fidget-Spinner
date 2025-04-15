'use client';

import { useTranslations } from 'next-intl';
import ImageSlider from '@/components/ImageSlider/ImageSlider';
import ExercisesList from '@/components/ExercisesList/ExercisesList';
import OrderBtn from '@/components/OrderBtn/OrderBtn';
import WhyChooseList from '@/components/WhyChooseList/WhyChooseList';
import Image from 'next/image';
import LoaderBtn from '@/components/LoaderBtn/LoaderBtn';

import css from './ExercisesSection.module.css';
import HowItWorksPart from '@/components/HowItWorksPart/HowItWorksPart';

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
      image: '/images/brainImg2.png',
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
    {
      image: '/images/qr.png',
      text: t('why_choose_4'),
    },
    {
      image: '/images/gearImg.png',
      text: t('why_choose_5'),
    },
    {
      image: '/images/rulerImg.png',
      text: t('why_choose_6'),
    },
  ];

  const howItWorksItems = [
    {
      number: 3,
      text: t('howItWorksItems_1'),
    },
    {
      number: 1,
      text: t('howItWorksItems_2'),
    },
    {
      number: 2,
      text: t('howItWorksItems_3'),
    },
    {
      number: 3,
      text: t('howItWorksItems_4'),
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

      <div className={css.howItWorksPartContainer}>
        <HowItWorksPart items={howItWorksItems} />

        <div className={css.howItWorksImgLowWidth}>
          <Image
            src="/images/howItWorks.png"
            alt="howItWorksImage"
            width={308}
            height={308}
            priority
          />
        </div>

        <div className={css.howItWorksImgHighWidth}>
          <Image
            src="/images/howItWorks.png"
            alt="howItWorksImage"
            width={576}
            height={576}
            priority
          />
        </div>
      </div>
      <OrderBtn className={css.orderButtonHowItWork} />

      <div className={css.WhyChooseContainer}>
        <h2 className={css.WhyChooseTitle}>{t('why_choose_title')}</h2>
        <WhyChooseList items={whyChooseItems} />
        <OrderBtn className={css.orderButtonWhyChoose} />
      </div>
    </section>
  );
};

export default ExercisesSection;

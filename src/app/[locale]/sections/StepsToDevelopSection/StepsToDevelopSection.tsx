'use client';

import Image from 'next/image';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

import KitsList from '@/app/[locale]/components/KitsList/KitsList';
import OrderBtn from '@/app/[locale]/components/OrderBtn/OrderBtn';
import css from './StepsToDevelopSection.module.css';
import { useTranslations } from 'next-intl';

const StepsToDevelopSection = () => {
  const t = useTranslations();

  const stepsList = [
    {
      title: t('steps_1_title'),
    },
    {
      title: t('steps_2_title'),
    },
    {
      title: t('steps_3_title'),
    },
    {
      title: t('steps_4_title'),
    },
  ];

  return (
    <section id="steps-to-develop" className={css.section}>
      <h2 className={css.title}>
        {t('steps_title')} <br className={css.titleTransfer} />
        {t('steps_subtitle')}
      </h2>

      <div className={css.firstPartContainer}>
        <div className={css.imageWrapper}>
          <Image
            src="/images/brainImg.png"
            alt={t('steps_image_alt')}
            width={328}
            height={337}
            className={css.imageLowWidth}
            priority
          />
          <Image
            src="/images/brainImg.png"
            alt={t('steps_image_alt')}
            width={689}
            height={696}
            className={css.imageHighWidth}
            priority
          />
          <p className={css.imageWrapperText}>{t('steps_image_desc')}</p>
        </div>

        <ul className={css.stepsList}>
          <h3>{t('steps_list_main_title')}</h3>
          <p className={css.stepsListMainDesc}>{t('steps_list_main_desc')}</p>
          {stepsList.map((step, index) => (
            <li key={index} className={css.step}>
              <IoIosArrowDroprightCircle className={css.iconSvg} />

              <p className={css.stepTitle}>{step.title}</p>
            </li>
          ))}
        </ul>
      </div>

      <KitsList />
      <OrderBtn className={css.orderButton} />
    </section>
  );
};

export default StepsToDevelopSection;

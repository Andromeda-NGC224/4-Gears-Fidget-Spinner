'use client';

import Image from 'next/image';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { useTranslations } from 'next-intl';
import KitsList from '@/app/[locale]/components/KitsList/KitsList';

import css from './StepsToDevelopSection.module.css';
import OrderBtn from '@/app/[locale]/components/OrderBtn/OrderBtn';

const StepsToDevelopSection = () => {
  const t = useTranslations('stepsToDevelop');

  const stepsListLowWidth = [
    {
      title: t('step1.title'),
      description: t('step1.descriptions.0'),
    },
    {
      title: t('step2.title'),
      description: t('step2.descriptions.0'),
    },
    {
      title: t('step3.title'),
      description: t('step3.descriptions.0'),
    },
  ];

  const stepsListHighWidth = [
    {
      title: t('step1.title'),
      descriptions: [t('step1.descriptions.0'), t('step1.descriptions.1')],
    },
    {
      title: t('step2.title'),
      descriptions: [t('step2.descriptions.0'), t('step2.descriptions.1')],
    },
    {
      title: t('step3.title'),
      descriptions: [t('step3.descriptions.0')],
    },
  ];

  const kits = [
    {
      description:
        'Геометричні фігури FlexiFun Geometry і дошка Basic Board для розвитку моторики та логіки',
      images: ['/images/image110.png', '/images/Group162910.png'],
    },
    {
      description: `Memory Case для тренування пам'яті та уваги`,
      images: ['/images/Frame1000002924.png'],
    },
    {
      description:
        'Доступ до спеціально розроблених вправ та онлайн тренажеру через QR-код',
      images: ['/images/Frame1000002923.png'],
    },
  ];

  return (
    <section id="steps-to-develop" className={css.section}>
      <h2 className={css.title}>{t('title')}</h2>

      <div className={css.firstPartContainer}>
        <div className={css.imageWrapper}>
          <Image
            src="/images/StepsToDevelopSectionImg.png"
            alt="Дитина з геометричними фігурами"
            width={328}
            height={337}
            className={css.imageLowWidth}
            priority
          />
          <Image
            src="/images/StepsToDevelopSectionImgHigh.png"
            alt="Дитина з геометричними фігурами"
            width={689}
            height={696}
            className={css.imageHighWidth}
            priority
          />
        </div>

        <ul className={css.stepsListLowWidth}>
          {stepsListLowWidth.map((step, index) => (
            <li key={index} className={css.step}>
              <div className={css.icon}>
                <IoIosArrowDroprightCircle className={css.iconSvg} />
              </div>
              <ul className={css.stepDescListLowWidth}>
                <li className={css.stepTitle}>{step.title}</li>
                <li className={css.stepDesc}>{step.description}</li>
              </ul>
            </li>
          ))}
        </ul>

        <ul className={css.stepsListHighWidth}>
          {stepsListHighWidth.map((step, index) => (
            <li key={index} className={css.step}>
              <div className={css.icon}>
                <IoIosArrowDroprightCircle className={css.iconSvg} />
              </div>
              <ul>
                <li className={css.stepTitle}>{step.title}</li>
                {step.descriptions.map((desc, descIndex) => (
                  <li key={descIndex} className={css.stepDesc}>
                    {desc}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <h2 className={css.titleSecond}>Що входить до набору</h2>
      <KitsList />
      <OrderBtn className={css.orderButton} />
    </section>
  );
};

export default StepsToDevelopSection;

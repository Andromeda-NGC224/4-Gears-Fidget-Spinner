'use client';

import Image from 'next/image';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import KitsList from '@/app/components/KitsList/KitsList';

import css from './StepsToDevelopSection.module.css';
import OrderBtn from '@/app/components/OrderBtn/OrderBtn';

const stepsListLowWidth = [
  {
    title: 'Отримайте набір',
    description:
      'Барвистий комплект з геометричними фігурами та основою для їх розміщення',
  },
  {
    title: 'Відскануйте QR-код на картці, що входить до комплекту',
    description:
      'Отримайте миттєвий доступ до системи розвивальних вправ, розроблених дитячими психологами',
  },
  {
    title: 'Виконуйте вправи та спостерігайте за прогресом',
    description:
      'Досить 15 хвилин на день захоплюючих занять з геометричними фігурами, щоб побачити відчутний прогрес уже через два тижні',
  },
];

const stepsListHighWidth = [
  {
    title: 'Отримайте набір',
    descriptions: [
      'Барвистий комплект з геометричними фігурами та основою для їх розміщення',
      "Basic Memory Case для тренування пам'яті та уваги",
    ],
  },
  {
    title: 'Відскануйте QR-код на картці, що входить до комплекту та отримайте',
    descriptions: [
      'Миттєвий доступ до системи розвивальних вправ, розроблених дитячими психологами',
      'Доступ до інтерактивного онлайн тренажера',
    ],
  },
  {
    title: 'Виконуйте вправи та спостерігайте за прогресом в онлайн-тренажері',
    descriptions: [
      'Десить 15 хвилин на день захоплюючих занять з геометричними фігурами, щоб побачити відчутний прогрес уже через два тижні',
    ],
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

const StepsToDevelopSection = () => {
  return (
    <section id="steps-to-develop" className={css.section}>
      <h2 className={css.title}>
        3 простих кроки
        <br className={css.titleTransfer} /> до швидкого розвитку
      </h2>

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

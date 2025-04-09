'use client';

import Image from 'next/image';
import css from './StepsToDevelopSection.module.css';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import KitsList from '@/app/components/KitsList/KitsList';

const steps = [
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
    <section className={css.section}>
      <h2 className={css.title}>
        3 простих кроки
        <br />
        до швидкого розвитку
      </h2>

      <div className={css.imageWrapper}>
        <Image
          src="/images/StepsToDevelopSectionImg.png"
          alt="Дитина з геометричними фігурами"
          width={328}
          height={337}
          className={css.image}
          priority
        />
      </div>

      <ul className={css.stepsList}>
        {steps.map((step, index) => (
          <li key={index} className={css.step}>
            <div className={css.icon}>
              <IoIosArrowDroprightCircle size={24} />
            </div>
            <div>
              <h3 className={css.stepTitle}>{step.title}</h3>
              <p className={css.stepDesc}>{step.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <h2 className={css.titleSecond}>Що входить до набору</h2>
      <KitsList />
      <button className={css.orderButton}>Замовити</button>
    </section>
  );
};

export default StepsToDevelopSection;

'use client';

import css from './HowItWorkCard.module.css';
import Image from 'next/image';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import ExercisesPageModal from '@/components/ExercisesPageModal/ExercisesPageModal';

type Props = {
  title: string;
  imageSrc?: string;
  items: string[];
  btn?: boolean;
};

const HowItWorkCard = ({ title, imageSrc, items, btn }: Props) => {
  const t = useTranslations();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={css.card}>
      {imageSrc && (
        <div className={css.imageWrapper}>
          <Image
            src={imageSrc}
            alt={title}
            width={328}
            height={280}
            className={css.image}
          />
        </div>
      )}
      <h3 className={css.cardTitle}>{title}</h3>
      <ul className={css.list}>
        {items.map((item, index) => (
          <li key={index} className={css.listItem}>
            <IoIosArrowDroprightCircle size={32} className={css.icon} />
            <p>{item}</p>
          </li>
        ))}

        {btn && (
          <button onClick={() => setIsModalOpen(true)} className={css.btnStart}>
            {t('start_btn')}
          </button>
        )}

        {isModalOpen && (
          <ExercisesPageModal onClose={() => setIsModalOpen(false)} />
        )}
      </ul>
    </div>
  );
};

export default HowItWorkCard;

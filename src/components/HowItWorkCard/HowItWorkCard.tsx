'use client';

import css from './HowItWorkCard.module.css';
import Image from 'next/image';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { useTranslations } from 'next-intl';
import ExercisesPageModal from '@/components/ExercisesPageModal/ExercisesPageModal';

type Props = {
  title: string;
  imageSrc?: string;
  items: string[];
  btn?: boolean;
  cardIndex: number;
  onCardClick: (index: number) => void;
  isModalOpen: boolean;
  onCloseModal: () => void;
};

const HowItWorkCard = ({
  title,
  imageSrc,
  items,
  btn,
  cardIndex,
  onCardClick,
  isModalOpen,
  onCloseModal,
}: Props) => {
  const t = useTranslations();

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
          <button
            onClick={() => onCardClick(cardIndex)}
            className={css.btnStart}
          >
            {t('start_btn')}
          </button>
        )}

        {isModalOpen && (
          <ExercisesPageModal
            selectedIndex={cardIndex}
            onClose={onCloseModal}
          />
        )}
      </ul>
    </div>
  );
};

export default HowItWorkCard;

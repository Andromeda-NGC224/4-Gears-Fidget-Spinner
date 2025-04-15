'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import css from './ExercisesPageModal.module.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ExercisesList from '../ExercisesList/ExercisesList';

type OrderModalProps = {
  onClose: () => void;
};

const ExercisesPageModal = ({ onClose }: OrderModalProps) => {
  const t = useTranslations();

  const exercises = [
    t('exercise_1'),
    t('exercise_2'),
    t('exercise_3'),
    t('exercise_4'),
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={css.modalContainer}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={css.overlay}
        onClick={onClose}
        role="button"
        tabIndex={0}
        aria-label="Закрити модалку"
      />

      <div className={css.modalWrapper}>
        <motion.div
          initial={{ scale: 0.95, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 50 }}
          className={css.modalContent}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className={css.card}>
            <div className={css.sliderWrapperLowWidth}>
              <Image
                src="/images/playImage.png"
                alt="playImage"
                width={138}
                height={138}
                className={css.image}
                priority
              />
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
              <button
                onClick={onClose}
                className={css.closeButton}
                aria-label="Закрити"
              >
                Назад
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExercisesPageModal;

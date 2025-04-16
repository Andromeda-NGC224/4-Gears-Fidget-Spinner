'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import css from './ExercisesPageModal.module.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ExercisesPageList from '../ExercisesPageList/ExercisesPageList';

type OrderModalProps = {
  onClose: () => void;
  selectedIndex: number;
};

const ExercisesPageModal = ({ onClose, selectedIndex }: OrderModalProps) => {
  const t = useTranslations();

  type ExerciseStep = {
    text: string;
    substeps?: string[];
  };

  type ExerciseItem = {
    title: string;
    time: string;
    steps: ExerciseStep[];
  };

  const exercises: ExerciseItem[] = [
    {
      title: t('rainbowCarousel.title'),
      time: t('rainbowCarousel.time'),
      steps: [
        {
          text: t('rainbowCarousel.preparation.text'),
          substeps: [
            t('rainbowCarousel.preparation.step1'),
            t('rainbowCarousel.preparation.step2'),
            t('rainbowCarousel.preparation.step3'),
          ],
        },
        {
          text: t('rainbowCarousel.lightSpins.text'),
          substeps: [
            t('rainbowCarousel.lightSpins.step1'),
            t('rainbowCarousel.lightSpins.step2'),
            t('rainbowCarousel.lightSpins.step3'),
            t('rainbowCarousel.lightSpins.step4'),
          ],
        },
        {
          text: t('rainbowCarousel.mediumSpins.text'),
          substeps: [
            t('rainbowCarousel.mediumSpins.step1'),
            t('rainbowCarousel.mediumSpins.step2'),
            t('rainbowCarousel.mediumSpins.step3'),
            t('rainbowCarousel.mediumSpins.step4'),
          ],
        },
        {
          text: t('rainbowCarousel.strongSpins.text'),
          substeps: [
            t('rainbowCarousel.strongSpins.step1'),
            t('rainbowCarousel.strongSpins.step2'),
            t('rainbowCarousel.strongSpins.step3'),
            t('rainbowCarousel.strongSpins.step4'),
          ],
        },
      ],
    },
    {
      title: t('fingersDancers.title'),
      time: t('fingersDancers.time'),
      steps: [
        {
          text: t('fingersDancers.preparation.text'),
          substeps: [
            t('fingersDancers.preparation.step1'),
            t('fingersDancers.preparation.step2'),
            t('fingersDancers.preparation.step3'),
          ],
        },
        {
          text: t('fingersDancers.slowSpins.text'),
          substeps: [
            t('fingersDancers.slowSpins.step1'),
            t('fingersDancers.slowSpins.step2'),
            t('fingersDancers.slowSpins.step3'),
            t('fingersDancers.slowSpins.step4'),
          ],
        },
        {
          text: t('fingersDancers.directionChange.text'),
          substeps: [
            t('fingersDancers.directionChange.step1'),
            t('fingersDancers.directionChange.step2'),
            t('fingersDancers.directionChange.step3'),
            t('fingersDancers.directionChange.step4'),
          ],
        },
        {
          text: t('fingersDancers.combinedSpins.text'),
          substeps: [
            t('fingersDancers.combinedSpins.step1'),
            t('fingersDancers.combinedSpins.step2'),
            t('fingersDancers.combinedSpins.step3'),
            t('fingersDancers.combinedSpins.step4'),
          ],
        },
      ],
    },
    {
      title: t('combinedTechnique.title'),
      time: t('combinedTechnique.time'),
      steps: [
        {
          text: t('combinedTechnique.preparation.text'),
          substeps: [
            t('combinedTechnique.preparation.step1'),
            t('combinedTechnique.preparation.step2'),
          ],
        },
        {
          text: t('combinedTechnique.seriesTransitions.text'),
          substeps: [
            t('combinedTechnique.seriesTransitions.step1'),
            t('combinedTechnique.seriesTransitions.step2'),
            t('combinedTechnique.seriesTransitions.step3'),
            t('combinedTechnique.seriesTransitions.step4'),
            t('combinedTechnique.seriesTransitions.step5'),
          ],
        },
        {
          text: t('combinedTechnique.reverseTransitions.text'),
          substeps: [
            t('combinedTechnique.reverseTransitions.step1'),
            t('combinedTechnique.reverseTransitions.step2'),
            t('combinedTechnique.reverseTransitions.step3'),
            t('combinedTechnique.reverseTransitions.step4'),
            t('combinedTechnique.reverseTransitions.step5'),
          ],
        },
      ],
    },
    {
      title: t('control.title'),
      time: t('control.time'),
      steps: [
        {
          text: t('control.preparation.text'),

          substeps: [
            t('control.preparation.step1'),
            t('control.preparation.step2'),
          ],
        },
        {
          text: t('control.firstSeries.text'),
          substeps: [
            t('control.firstSeries.step1'),
            t('control.firstSeries.step2'),
            t('control.firstSeries.step3'),
            t('control.firstSeries.step4'),
            t('control.firstSeries.step5'),
          ],
        },
        {
          text: t('control.secondSeries.text'),
          substeps: [
            t('control.secondSeries.step1'),
            t('control.secondSeries.step2'),
            t('control.secondSeries.step3'),
            t('control.secondSeries.step4'),
            t('control.secondSeries.step5'),
          ],
        },
        {
          text: t('control.finalSeries.text'),
          substeps: [
            t('control.finalSeries.step1'),
            t('control.finalSeries.step2'),
            t('control.finalSeries.step3'),
            t('control.finalSeries.step4'),
          ],
        },
      ],
    },
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

  const selectedExercise = exercises[selectedIndex];

  if (!selectedExercise) return null;

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
              <ExercisesPageList items={[selectedExercise]} />
              <button
                onClick={onClose}
                className={css.closeButton}
                aria-label="Закрити"
              >
                {t('btn_back')}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExercisesPageModal;

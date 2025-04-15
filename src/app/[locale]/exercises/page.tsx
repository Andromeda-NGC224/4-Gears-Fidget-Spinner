import React from 'react';
import { useTranslations } from 'next-intl';
import HeaderExercises from '@/components/HeaderExercices/HeaderExercices';
import ExercisesPageSection from '@/sections/ExercisesPageSection/ExercisesPageSection';

const ExercisesPage = () => {
  const t = useTranslations();

  return (
    <main>
      <HeaderExercises />
      <ExercisesPageSection />
    </main>
  );
};

export default ExercisesPage;

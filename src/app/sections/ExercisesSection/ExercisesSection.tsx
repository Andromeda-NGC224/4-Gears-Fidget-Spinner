import ImageSlider from '@/app/components/ImageSlider/ImageSlider';
import ExercisesList from '@/app/components/ExercisesList/ExercisesList';
import OrderBtn from '@/app/components/OrderBtn/OrderBtn';
import WhyChooseList from '@/app/components/WhyChooseList/WhyChooseList';

import css from './ExercisesSection.module.css';

const ExercisesSection = () => {
  const exercises = [
    'Навчаємось розрізняти кольори та створювати патерни. Дитина розвиває пам’ять і увагу, запам’ятовуючи та відтворюючи послідовності',
    'Досліджуємо властивості різних форм. Від простого до складного: коло, трикутник, квадрат та їх комбінації',
    'Порівнюємо та зіставляємо різні фігури, вчимося розуміти їх особливості та знаходити закономірності',
    'Вивчаємо поняття “більше-менше”, “вище-нижче”, розвиваємо просторове мислення.',
  ];

  const sliderImages = [
    '/images/playImage.png',
    '/images/playImage.png',
    '/images/playImage.png',
    '/images/playImage.png',
    '/images/playImage.png',
  ];

  const WhyChooseItems = [
    {
      image: '/images/qr.png',
      text: 'Доступ до вправ за QR-кодом',
    },
    {
      image: '/images/time.png',
      text: 'Достатньо всього 10 хвилин на день для досягнення результату',
    },
    {
      image: '/images/shield.png',
      text: '100% безпечні та сертифіковані матеріали',
    },
  ];

  return (
    <section className={css.section}>
      <div className={css.card}>
        <div className={css.sliderWrapper}>
          <ImageSlider images={sliderImages} width={288} height={288} />
        </div>

        <div className={css.textBlock}>
          <h3 className={css.title}>Захоплюючі вправи для розвитку</h3>
          <p className={css.subtitle}>Опис вправ</p>
          <ExercisesList items={exercises} />
          <OrderBtn
            style={{
              background: '#FFFFFF',
              color: '#5390EC',
              paddingLeft: 48,
              paddingRight: 48,
            }}
          />
        </div>
      </div>

      <div className={css.WhyChooseContainer}>
        <h2 className={css.WhyChooseTitle}>
          Чому батьки <br />
          обирають <span>FlexiFun Geometry</span>
        </h2>
        <WhyChooseList items={WhyChooseItems} />
        <OrderBtn
          style={{
            paddingLeft: 48,
            paddingRight: 48,
          }}
        />
      </div>
    </section>
  );
};

export default ExercisesSection;

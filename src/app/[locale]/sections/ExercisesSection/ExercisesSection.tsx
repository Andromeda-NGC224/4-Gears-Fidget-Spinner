import ImageSlider from '@/app/[locale]/components/ImageSlider/ImageSlider';
import ExercisesList from '@/app/[locale]/components/ExercisesList/ExercisesList';
import OrderBtn from '@/app/[locale]/components/OrderBtn/OrderBtn';
import WhyChooseList from '@/app/[locale]/components/WhyChooseList/WhyChooseList';

import css from './ExercisesSection.module.css';
import Image from 'next/image';
import LoaderBtn from '@/app/[locale]/components/LoaderBtn/LoaderBtn';

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
    <section id="exercises" className={css.section}>
      <div className={css.card}>
        <div className={css.sliderWrapperLowWidth}>
          <ImageSlider images={sliderImages} width={288} height={288} />
        </div>
        <div className={css.sliderWrapperHighWidth}>
          <Image
            src="/images/playImage.png"
            alt={'playImage'}
            width={138}
            height={138}
            className={css.image}
            priority
          />
        </div>

        <div className={css.textBlock}>
          <h3 className={css.title}>Захоплюючі вправи для розвитку</h3>
          <p className={css.subtitle}>Опис вправ</p>
          <ExercisesList items={exercises} />
          <div className={css.buttonsContainer}>
            <LoaderBtn className={css.loaderBtn} />
            <OrderBtn className={css.orderButton} />
          </div>
        </div>
      </div>

      <div className={css.WhyChooseContainer}>
        <h2 className={css.WhyChooseTitle}>
          Чому батьки <br className={css.WhyChooseBreak} />
          обирають <span>FlexiFun Geometry</span>
        </h2>
        <WhyChooseList items={WhyChooseItems} />
        <OrderBtn className={css.orderButton} />
      </div>
    </section>
  );
};

export default ExercisesSection;

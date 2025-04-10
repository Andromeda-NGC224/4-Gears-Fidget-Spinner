import React from 'react';
import ReviewCard from '@/app/components/ReviewCard/ReviewCard';

import css from './ReviewsSection.module.css';
import OrderBtn from '@/app/components/OrderBtn/OrderBtn';
import ReviewsLoaderBtn from '@/app/components/ReviewsLoaderBtn/ReviewsLoaderBtn';

const ReviewsSection = () => {
  const reviews = [
    {
      imageSrc: '/images/zuzana.png',
      author: 'Зузана Черна',
      position: 'методист дошкільної освіти',
      text: 'Чудовий інструмент для розвитку просторового мислення та дрібної моторики. Особливо цінно, що всі навички розвиваються в ігровій формі, без примушування.',
    },
    {
      imageSrc: '/images/tatiana.png',
      author: 'Тетяна',
      position: 'керівник дитячого центру',
      text: 'Рекомендую цей набір для підготовки до школи. Діти, які грали з подібними геометричними формами, легше освоюють математику в першому класі.',
    },
    {
      imageSrc: '/images/vlada.png',
      author: 'Влада',
      position: 'вихователька дитячого садка',
      text: 'Чудово підходить як для індивідуальної роботи, так і для групових занять. Діти швидко опановують базові геометричні поняття.',
    },
  ];

  return (
    <section id="reviews" className={css.section}>
      <h2 className={css.title}>Відгуки</h2>
      <ReviewsLoaderBtn />
      <ul className={css.list}>
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </ul>

      <OrderBtn style={{ paddingLeft: 48, paddingRight: 48 }} />
    </section>
  );
};

export default ReviewsSection;

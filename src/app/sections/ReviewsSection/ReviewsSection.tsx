import React from 'react';
import ReviewCard from '@/app/components/ReviewCard/ReviewCard';

import css from './ReviewsSection.module.css';
import OrderBtn from '@/app/components/OrderBtn/OrderBtn';

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
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>Відгуки</h2>
        <ul className={css.list}>
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </ul>
      </div>
      <OrderBtn style={{ paddingLeft: 48, paddingRight: 48 }} />
    </section>
  );
};

export default ReviewsSection;

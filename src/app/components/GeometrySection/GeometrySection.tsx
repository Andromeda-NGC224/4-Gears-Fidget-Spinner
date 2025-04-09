import React from 'react';

import css from './GeometrySection.module.css';
import ImageSlider from '../ImageSlider/ImageSlider';

export default function GeometrySection() {
  return (
    <section className={css.section}>
      <h2 className={css.title}>
        FlexiFun Geometry - Перші кроки у світ логіки
      </h2>
      <h3 className={css.subtitle}>
        Розвивальний набір для дітей від 1 до 3 років
      </h3>

      <div className={css.content}>
        <ImageSlider />

        <p className={css.description}>
          Уявіть: доки ваш малюк захоплено грається з яскравими геометричними
          фігурами, його мозок проходить інтенсивне тренування! Кожне торкання
          до фігур, кожна спроба знайти правильне місце розвиває:
        </p>

        <ul className={css.featuresList}>
          <li className={css.featureItem}>
            <span className={css.checkbox}></span>
            Логічне мислення через сортування форм і кольорів
          </li>
          <li className={css.featureItem}>
            <span className={css.checkbox}></span>
            Просторове сприйняття через роботу з розмірами
          </li>
          <li className={css.featureItem}>
            <span className={css.checkbox}></span>
            Дрібну моторику через точні рухи
          </li>
          <li className={css.featureItem}>
            <span className={css.checkbox}></span>
            Увагу та пам'ять через послідовні дії
          </li>
        </ul>
      </div>

      <div className={css.actions}>
        <span className={css.price}>700₴</span>
        <span className={css.oldPrice}>420₴</span>
        <button className={css.orderButton}>Замовити</button>
      </div>
    </section>
  );
}

import React from 'react';

import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import css from './GeometrySection.module.css';

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
            <IoCheckmarkCircleSharp
              style={{ minWidth: 24, minHeight: 24 }}
              size={24}
              color="#5EDD60"
            />
            <span>Логічне мислення через сортування форм і кольорів</span>
          </li>
          <li className={css.featureItem}>
            <IoCheckmarkCircleSharp
              style={{ minWidth: 24, minHeight: 24 }}
              size={24}
              color="#5EDD60"
            />
            <span>Просторове сприйняття через роботу з розмірами</span>
          </li>
          <li className={css.featureItem}>
            <IoCheckmarkCircleSharp
              style={{ minWidth: 24, minHeight: 24 }}
              size={24}
              color="#5EDD60"
            />
            <span>Дрібну моторику через точні рухи</span>
          </li>
          <li className={css.featureItem}>
            <IoCheckmarkCircleSharp
              style={{ minWidth: 24, minHeight: 24 }}
              size={24}
              color="#5EDD60"
            />
            <span>Увагу та пам'ять через послідовні дії</span>
          </li>
        </ul>
      </div>

      <div className={css.actions}>
        <div className={css.priceContainer}>
          <span className={css.price}>700₴</span>
          <span className={css.oldPrice}>420₴</span>
        </div>
        <button className={css.orderButton}>Замовити</button>
      </div>
    </section>
  );
}

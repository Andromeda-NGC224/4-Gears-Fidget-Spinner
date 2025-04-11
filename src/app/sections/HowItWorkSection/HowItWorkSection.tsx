'use client';

import HowItWorkCard from '@/app/components/HowItWorkCard/HowItWorkCard';

import css from './HowItWorkSection.module.css';
import OrderBtn from '@/app/components/OrderBtn/OrderBtn';

const HowItWorkSection = () => {
  return (
    <section id="how-it-work" className={css.section}>
      <h2 className={css.title}>Комплексний розвиток через гру</h2>
      <p className={css.subtitle}>
        Кожне заняття — це маленьке відкриття!
        <br className={css.subtitleBreak} /> Граючи з геометричними фігурами,
        ваша дитина вчиться
      </p>
      <div className={css.cardsContainer}>
        <HowItWorkCard
          title="Логічне мислення"
          imageSrc="/images/child.png"
          items={[
            'Аналізувати форми та їх особливості',
            'Знаходити закономірності в послідовностях',
            'Розуміти причинно-наслідкові зв’язки',
            'Приймати рішення на основі аналізу',
          ]}
        />

        <HowItWorkCard
          title="Дрібна моторика"
          imageSrc="/images/hands.png"
          items={[
            'Координація пальців для підготовки до письма',
            'Захоплення та переміщення предметів різної форми',
            'Тактильне сприйняття текстур і форм',
            'Контроль над дрібними рухами',
          ]}
        />
        <HowItWorkCard
          title="Просторове мислення"
          imageSrc="/images/girl.png"
          items={[
            'Розуміти взаємне розташування предметів',
            'Розрізняти розміри та пропорції',
            'Розвивати образне мислення',
            'Покращувати орієнтацію в просторі',
          ]}
        />
        <HowItWorkCard
          title="Тренування пам'яті та уваги"
          items={[
            'Запам’ятовування послідовностей',
            'Розвиток концентрації',
            'Робота з кольором і формою',
            'Адаптивна складність завдань',
          ]}
        />
      </div>

      <OrderBtn className={css.orderButton} />
    </section>
  );
};

export default HowItWorkSection;

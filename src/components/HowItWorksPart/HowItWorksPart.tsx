import React from 'react';
import css from './HowItWorksPart.module.css';
import { useTranslations } from 'next-intl';

interface HowItWorksPartProps {
  items: {
    number: number;
    text: string;
  }[];
}

const HowItWorksPart = ({ items }: HowItWorksPartProps) => {
  const t = useTranslations();
  return (
    <div>
      <h3 className={css.title}>{t('howItWorksItems_title')}</h3>
      <ul className={css.list}>
        {items.map((item, index) => (
          <li key={index} className={css.card}>
            <div className={css.buttonCard}>
              <span className={css.number}>{item.number}</span>
              <h3 className={css.question}>{item.text}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HowItWorksPart;

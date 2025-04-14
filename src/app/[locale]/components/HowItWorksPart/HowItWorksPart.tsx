import React from 'react';
import css from './HowItWorksPart.module.css';

interface HowItWorksPartProps {
  items: {
    number: number;
    text: string;
  }[];
}

const HowItWorksPart = ({ items }: HowItWorksPartProps) => {
  return (
    <ul className={css.list}>
      <h3>ЯК ЦЕ ПРАЦЮЄ</h3>
      {items.map((item, index) => (
        <li key={index} className={css.card}>
          <div className={css.buttonCard}>
            <span className={css.number}>{item.number}</span>
            <h3 className={css.question}>{item.text}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HowItWorksPart;

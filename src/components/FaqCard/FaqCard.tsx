'use client';
import { useState } from 'react';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';
import css from './FaqCard.module.css';

interface FaqCardProps {
  question: string;
  answer?: string;
  number: number;
}

const FaqCard = ({ question, answer, number }: FaqCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${css.card} ${isOpen ? css.active : ''}`}>
      <button
        className={css.buttonCard}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={css.number}>{number}</span>
        <h3 className={css.question}>{question}</h3>
        {!isOpen ? (
          <FiChevronRight className={css.icon} />
        ) : (
          <FiChevronDown className={css.icon} />
        )}
      </button>

      {answer && (
        <div className={css.content}>
          <p className={css.answer}>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqCard;

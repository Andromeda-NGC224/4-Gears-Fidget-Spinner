'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import FaqCard from '@/app/[locale]/components/FaqCard/FaqCard';
import css from './FaqSection.module.css';
import OrderBtn from '@/app/[locale]/components/OrderBtn/OrderBtn';

const FaqSection = () => {
  const t = useTranslations();

  const faqItemsLowWidth = [
    { question: t('faq_1_question') },
    { question: t('faq_2_question') },
    { question: t('faq_3_question') },
    { question: t('faq_4_question') },
    { question: t('faq_5_question') },
    {
      question: t('faq_6_question'),
      answer: t('faq_6_answer'),
    },
    { question: t('faq_7_question') },
  ];

  const faqItemsHighWidth = [
    { question: t('faq_8_question') },
    { question: t('faq_9_question') },
    { question: t('faq_1_question') },
    { question: t('faq_2_question') },
    { question: t('faq_3_question') },
    { question: t('faq_4_question') },
    { question: t('faq_5_question') },
    {
      question: t('faq_6_question'),
      answer: t('faq_6_answer'),
    },
    { question: t('faq_7_question') },
  ];

  return (
    <section className={css.section}>
      <h2 className={css.title}>{t('faq_title')}</h2>
      <div className={css.faqListLowWidth}>
        {faqItemsLowWidth.map((item, index) => (
          <FaqCard
            key={index}
            question={item.question}
            answer={item.answer}
            number={index + 1}
          />
        ))}
      </div>
      <div className={css.faqListHighWidth}>
        {faqItemsHighWidth.map((item, index) => (
          <FaqCard
            key={index}
            question={item.question}
            answer={item.answer}
            number={index + 1}
          />
        ))}
      </div>
      <OrderBtn className={css.orderButton} />
    </section>
  );
};

export default FaqSection;

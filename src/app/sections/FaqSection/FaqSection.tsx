import FaqCard from '@/app/components/FaqCard/FaqCard';
import css from './FaqSection.module.css';

const FaqSection = () => {
  const faqItems = [
    { question: 'Для якого віку підходить набір?' },
    { question: 'Скільки часу потрібно приділяти заняттям?' },
    { question: 'Чи безпечний набір?' },
    { question: 'Чи потрібна допомога батьків?' },
    { question: 'Як зрозуміти, що дитина правильно виконує вправи?' },
    {
      question: 'Як часто потрібно займатися для досягнення результату?',
      answer:
        'Для помітного розвитку достатньо займатися +5 разів на тиждень по 15 хвилин. Головне – регулярність і позитивний настрій дитини.',
    },
    { question: 'Хто виробник?' },
  ];

  return (
    <section className={css.section}>
      <h2 className={css.title}>FAQ</h2>
      <div className={css.faqList}>
        {faqItems.map((item, index) => (
          <FaqCard
            key={index}
            question={item.question}
            answer={item.answer}
            number={index + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;

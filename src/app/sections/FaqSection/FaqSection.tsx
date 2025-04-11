import FaqCard from '@/app/components/FaqCard/FaqCard';
import css from './FaqSection.module.css';
import OrderBtn from '@/app/components/OrderBtn/OrderBtn';

const FaqSection = () => {
  const faqItemsLowWidth = [
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

  const faqItemsHighWidth = [
    { question: 'Що таке Memory Case?' },
    { question: 'Як працює онлайн-тренажер?' },
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

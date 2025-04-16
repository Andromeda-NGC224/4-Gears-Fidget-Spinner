import css from './ExercisesPageList.module.css';

type ExerciseStep = {
  text: string;
  substeps?: string[];
};
type ExerciseItem = {
  title: string;
  time: string;
  steps: ExerciseStep[];
};

type ExercisesPageListProps = {
  items: ExerciseItem[];
};

const ExercisesPageList = ({ items }: ExercisesPageListProps) => {
  console.log('selected exercicse', items);

  return (
    <div className={css.wrapper}>
      {items.map((item, index) => (
        <article key={index} className={css.card}>
          <div className={css.header}>
            <h2 className={css.title}>{item.title}</h2>
            <p className={css.time}>{item.time}</p>
          </div>

          <ul className={css.stepsList}>
            {item.steps.map((step, stepIdx) => (
              <li key={stepIdx} className={css.stepItem}>
                <div className={css.stepHeader}>
                  <span className={css.stepCounter}>{stepIdx + 1}.</span>
                  <p className={css.stepText}>{step.text}</p>
                </div>

                {step.substeps && (
                  <ul className={css.substepsList}>
                    {step.substeps.map((substep, substepIdx) => (
                      <li key={substepIdx} className={css.substepItem}>
                        <span className={css.substepBullet}>-</span>
                        {substep}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default ExercisesPageList;

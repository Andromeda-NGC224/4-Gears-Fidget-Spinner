import css from './ExercisesList.module.css';

const ExercisesList = ({ items }: { items: string[] }) => {
  return (
    <ul className={css.list}>
      {items.map((item, index) => (
        <li key={index} className={css.item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ExercisesList;

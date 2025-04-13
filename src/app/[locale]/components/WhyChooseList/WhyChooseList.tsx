import Image from 'next/image';
import css from './WhyChooseList.module.css';

type Props = {
  items: { image: string; text: string }[];
};

const WhyChooseList = ({ items }: Props) => {
  return (
    <ul className={css.list}>
      {items.map((item, idx) => (
        <li key={idx} className={css.item}>
          <div className={css.imageWrapper}>
            <Image src={item.image} alt="Іконка переваги" fill />
          </div>
          <p className={css.text}>{item.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default WhyChooseList;

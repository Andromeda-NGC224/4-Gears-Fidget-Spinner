// components/HowItWorkSection/HowItWorkCard.tsx
import css from './HowItWorkCard.module.css';
import Image from 'next/image';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

type Props = {
  title: string;
  imageSrc?: string;
  items: string[];
};

const HowItWorkCard = ({ title, imageSrc, items }: Props) => {
  return (
    <div className={css.card}>
      {imageSrc && (
        <div className={css.imageWrapper}>
          <Image
            src={imageSrc}
            alt={title}
            width={328}
            height={280}
            className={css.image}
          />
        </div>
      )}
      <h3 className={css.cardTitle}>{title}</h3>
      <ul className={css.list}>
        {items.map((item, index) => (
          <li key={index} className={css.listItem}>
            <IoIosArrowDroprightCircle size={32} className={css.icon} />
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HowItWorkCard;

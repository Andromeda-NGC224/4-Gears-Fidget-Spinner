import React from 'react';
import css from './ReviewCard.module.css';
import Image from 'next/image';

interface ReviewCardProps {
  author: string;
  position: string;
  text: string;
  imageSrc: string;
}

const ReviewCard = ({ author, position, text, imageSrc }: ReviewCardProps) => {
  return (
    <li className={css.card}>
      <div className={css.content}>
        <Image
          className={css.imageLowWidth}
          src={imageSrc}
          alt={author}
          width={328}
          height={325}
        />
        <Image
          className={css.imageHighWidth}
          src={imageSrc}
          alt={author}
          width={459}
          height={438}
        />
        <div className={css.person}>
          <h4 className={css.author}>{author}</h4>
          <p className={css.position}>{position}</p>
        </div>

        <p className={css.text}>{text}</p>
      </div>
    </li>
  );
};

export default ReviewCard;

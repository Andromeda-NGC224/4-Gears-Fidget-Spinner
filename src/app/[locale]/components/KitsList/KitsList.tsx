import Image from 'next/image';

import css from './KitsList.module.css';

const KitsList = () => {
  return (
    <ul className={css.kitsList}>
      <li className={css.kitItem}>
        <p className={css.kitDescriptionLowWidth}>
          Геометричні фігури FlexiFun Geometry і дошка Basic Board для розвитку
          моторики та логіки
        </p>
        <div className={css.kitImageWrapper}>
          <Image
            src="/images/image110.png"
            alt="Зображення з набору"
            width={280}
            height={130}
            className={css.kitImageLowWidth}
            priority
          />
          <Image
            src="/images/Group162910.png"
            alt="Зображення з набору"
            width={280}
            height={130}
            className={css.kitImageLowWidth}
            priority
          />
          <Image
            src="/images/image110.png"
            alt="Зображення з набору"
            width={227}
            height={227}
            className={css.kitImageHighWidth}
            priority
          />
          <Image
            src="/images/Group162910.png"
            alt="Зображення з набору"
            width={227}
            height={227}
            className={css.kitImageHighWidth}
            priority
          />
        </div>
        <p className={css.kitDescriptionHighWidth}>
          Геометричні фігури FlexiFun Geometry і дошка Basic Board для розвитку
          моторики та логіки
        </p>
      </li>

      <li className={css.kitItem}>
        <p className={css.kitDescription}>
          Memory Case для тренування пам'яті та уваги
        </p>
        <div className={css.kitImageWrapper}>
          <Image
            src="/images/Frame1000002924.png"
            alt="Зображення з набору"
            width={280}
            height={130}
            className={css.kitImageLowWidth}
            priority
          />
          <Image
            src="/images/Frame1000002924.png"
            alt="Зображення з набору"
            width={555}
            height={256}
            className={css.kitImageHighWidth}
            priority
          />
        </div>
      </li>

      <li className={css.kitLastItem}>
        <p className={css.kitDescriptionLowWidth}>
          Доступ до спеціально розроблених вправ та онлайн тренажеру через
          QR-код
        </p>
        <div className={css.kitImageWrapperLast}>
          <Image
            src="/images/fastLevel1.png"
            width={280}
            height={265}
            alt="Зображення з набору"
            className={css.kitImage}
            priority
          />
          <Image
            src="/images/fastLevel2.png"
            width={280}
            height={265}
            alt="Зображення з набору"
            className={css.kitImage}
            priority
          />
          <Image
            src="/images/MEMORY_Case.png"
            width={280}
            height={265}
            alt="Зображення з набору"
            className={css.kitImage}
            priority
          />
        </div>
        <p className={css.kitDescriptionHighWidth}>
          Доступ до спеціально розроблених вправ та онлайн тренажеру через
          QR-код
        </p>
      </li>
    </ul>
  );
};

export default KitsList;

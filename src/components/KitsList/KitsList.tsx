import css from './KitsList.module.css';
import { useTranslations } from 'next-intl';

const KitsList = () => {
  const t = useTranslations();
  return (
    <div className={css.kitsListContainer}>
      <h2 className={css.titleSecond}>{t('kits_list_title')}</h2>
      <ul className={css.kitsList}>
        <li className={css.kitItem}>
          <p className={css.kitDescription}>
            {t('kits_list_kit1_description')}
          </p>
        </li>

        <li className={css.kitItem}>
          <p className={css.kitDescription}>
            {t('kits_list_kit2_description')}
          </p>
        </li>
        <li className={css.kitItem}>
          <p className={css.kitDescription}>
            {t('kits_list_kit3_description')}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default KitsList;

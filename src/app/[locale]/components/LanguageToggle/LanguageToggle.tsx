'use client';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import css from './LanguageToggle.module.css';

interface LocaleConfig {
  key: string;
  display: string;
}

const localeConfigs: LocaleConfig[] = [
  { key: 'sk', display: 'SK' },
  { key: 'uk', display: 'UA' },
];

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (newLocale: string) => {
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '');

    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

    router.push(`/${newLocale}${pathnameWithoutLocale || '/'}`);
  };

  return (
    <div className={css.toggleContainer}>
      <div
        className={`${css.toggleBackground} ${
          locale === 'uk' ? css.activeRight : ''
        }`}
      >
        {localeConfigs.map((config) => (
          <button
            key={config.key}
            className={`${css.toggleButton} ${
              locale === config.key ? css.active : ''
            }`}
            onClick={() => changeLocale(config.key)}
            aria-label={`Змінити мову на ${config.display}`}
          >
            {config.display}
          </button>
        ))}
        <div
          className={`${css.slider} ${locale === 'uk' ? css.slideRight : ''}`}
        />
      </div>
    </div>
  );
}

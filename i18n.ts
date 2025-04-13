import { getRequestConfig } from 'next-intl/server';

const locales = ['uk', 'sk'];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locales.includes(locale as any)) {
    console.log('Locale is not defined, using default locale:', locale);
  }

  try {
    return {
      messages: (await import(`@/messages/${locale}.json`)).default,
      locale,
    };
  } catch (error) {
    console.error(`Failed to load messages for ${locale}`, error);
    return {
      messages: (await import(`@/messages/uk.json`)).default,
      locale,
    };
  }
});

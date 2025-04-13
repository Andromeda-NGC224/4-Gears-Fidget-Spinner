import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const locales = ['uk', 'sk'];
const defaultLocale = 'uk';

export default createMiddleware({
  locales,
  defaultLocale,
  localeDetection: true,
});

export const config = {
  matcher: ['/(uk|sk)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};

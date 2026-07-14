import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Matcher for next-intl locale redirects:
  matcher: [
    // Match the root URL and match paths prefixed with supported locales
    '/',
    '/(en|zh)/:path*',
    // Match all page paths that don't have extension or are not internal assets or api
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'
  ]
};

import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'pl','de'],

    // Used when no locale matches
    defaultLocale: 'en'
});

export const config = {
    // Match only internationalized pathnames, including the root `/`
    matcher: [
        '/', 
        '/:locale(en|pl)',
        '/:locale(en|pl)/:path*'
    ],
};

import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    locales: ["en", "fr"],
    defaultLocale: "en",
    pathnames: {
        "/": "/",
        "/contact": "/contact",
        "/projects": {
            fr: "/projets"
        }
    }
});
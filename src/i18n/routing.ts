import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    locales: ["en", "fr"],
    defaultLocale: "en",
    pathnames: {
        "/": "/",
        "/#projects": {
            fr: "#projets"
        },
        "/#contact": {
            fr: "#contact"
        }
    }
});
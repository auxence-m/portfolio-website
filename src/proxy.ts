import createMiddleware from 'next-intl/middleware';
import {routing} from "@/i18n/routing";
import {NextRequest, NextResponse} from "next/server";

const nextIntlMiddleware = createMiddleware(routing);

export default function proxy(request: NextRequest) {
    const {pathname} = request.nextUrl;
    const locales = routing.locales;
    const defaultLocale = routing.defaultLocale;

    // Skip proxy for the language choice landing page
    if (pathname === "/") {
        return NextResponse.next();
    }

    // Check if pathname starts with a valid locale
    const hasValidLocale = locales?.some((locale: string) => pathname.startsWith(`/${locale}`));

    if (!hasValidLocale) {
        // Check for a remembered locale in cookie
        const cookieLang = request.cookies.get("preferred_language")?.value;
        const redirectLocale = cookieLang && locales.includes(cookieLang as ("en" | "fr")) ? cookieLang : defaultLocale;

        // Redirect non-localized paths
        const url = request.nextUrl.clone();
        url.pathname = `/${redirectLocale}/${pathname}`;
        return NextResponse.redirect(url);
    }

    return nextIntlMiddleware(request)
}

export const config = {
    // Match only internationalized pathnames
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
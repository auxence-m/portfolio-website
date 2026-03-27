import {routing} from "@/i18n/routing";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {notFound} from "next/navigation";
import {getMessages, setRequestLocale} from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params}:  LayoutProps<'/[locale]'>) {
    // Ensure that the incoming `locale` is valid
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    const messages = await getMessages();

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar/>
            <main className="flex-1 flex flex-col">
                {children}
            </main>
            <Footer/>
        </NextIntlClientProvider>
    );
}
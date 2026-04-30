import {routing} from "@/i18n/routing";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {notFound} from "next/navigation";
import {getMessages, getTranslations, setRequestLocale} from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Metadata} from "next";


export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: {params: Promise<{locale: "en" | "fr"}>}):Promise<Metadata> {
    const {locale} = await params;
    const t = await getTranslations({locale, namespace: "Metadata.layout"});

    return {
        title: {
            default: t("title.default"),
            template: t("title.template"),
        },
        description: t("description"),
        generator: "Next.js",
        keywords: t.raw("keywords"),
        openGraph: {
            title: t("title.default"),
            description: t("description"),
            locale: locale,
            type: "website",
        },
        alternates: {
            languages: {
                en: "https://www.auxmedja.com/en",
                fr: "https://www.auxmedja.com/fr",
                "x-default": "https://www.auxmedja.com/en"

            }
        }
    }

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
import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: {params: Promise<{locale: "en" | "fr"}>}):Promise<Metadata> {
    const {locale} = await params;
    const t = await getTranslations({locale, namespace: "Metadata.contact"});

    return {
        title: t("title"),
        description: t("description"),
        alternates: {
            canonical: `https://www.auxmedja.com/${locale}/contact`,
            languages: {
                en: "https://www.auxmedja.com/en/contact",
                fr: "https://www.auxmedja.com/fr/contact",
                "x-default": "https://www.auxmedja.com/en/contact"

            }
        }
    }
}

export default function ContactPage() {
    return (
        <div className="flex flex-col">
            <ContactHero/>
            <ContactForm/>
        </div>
    );
}
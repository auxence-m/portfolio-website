import {ArrowRight, CheckCircleIcon} from "lucide-react";
import {Link} from "@/i18n/navigation";
import {cookies} from "next/headers";
import {getLocale, getTranslations} from "next-intl/server";
import {redirect} from "@/i18n/navigation";
import {Metadata} from "next";

export async function generateMetadata({params}: {params: Promise<{locale: "en | fr"}>}):Promise<Metadata> {
    const {locale} = await params;
    const t = await getTranslations({locale, namespace: "Metadata.confirmation"});

    return {
        title: t("title"),
        description: t("description"),
        robots: {
            index: false,
            follow: true,
        }
    }
}

export default async function ConfirmationPage() {
    const locale = await getLocale();
    const cookieStore = await cookies()

    // Deny access if cookie is missing
    if (!cookieStore.get("form-submitted")) {
        redirect({href: "/contact", locale: locale})
    }

    const t = await getTranslations("Confirmation");

    return (
        <section className="min-h-screen flex flex-col items-center justify-center pt-20 px-6 bg-surface-container-lowest relative">
            <div className="fixed inset-0 z-0 overflow-hidden">
                <div className="absolute top-[2%] -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"/>
                <div className="absolute bottom-[1%] -right-32 w-64 h-64 bg-secondary/10 blur-[100px]"/>
            </div>
            <div className="flex flex-col items-center z-10">
                <div
                    className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant/20 mb-8">
                    <CheckCircleIcon size={28} strokeWidth={2} className="text-primary"/>
                </div>
                {/* TILE AND DESCRIPTION */}
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-center text-on-surface uppercase mb-6">
                    {t("title")}
                </h1>
                <p className="max-w-md text-center mb-12 text-on-surface-variant text-lg leading-relaxed text-pretty">
                    {t("description")}
                </p>
                {/* CTA BUTTONS */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
                    <Link href="/" className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 w-64 bg-primary text-on-primary font-bold uppercase rounded-sm hover:bg-primary/90 transition-all duration-300 active:scale-95">
                        <span className="relative z-10">{t("cta.home")}</span>
                        <ArrowRight strokeWidth={2} size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300"/>
                    </Link>
                    <Link href="/projects" className="inline-flex items-center justify-center gap-3 px-10 py-4 w-64 border border-outline-variant/80 hover:border-primary/50 hover:text-primary font-bold uppercase text-on-surface rounded-sm transition-all duration-300 active:scale-95">
                        {t("cta.projects")}
                    </Link>
                </div>
            </div>
        </section>
    );
}
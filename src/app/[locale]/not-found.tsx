import {Link} from "@/i18n/navigation";
import {ArrowRight} from "lucide-react";
import {useTranslations} from "next-intl";

export default function NotFound() {
    const t = useTranslations("NotFound");

    return (
        <main className="min-h-screen pt-20 px-6 bg-surface-container-lowest flex place-items-center">

            <div className="max-w-5xl mx-auto text-center flex flex-col gap-y-14">
                <div className="relative inline-block">
                    <h1 className="font-bold leading-none tracking-tighter opacity-90 text-8xl md:text-9xl">
                        404
                    </h1>
                </div>
                <div className="max-w-2xl mx-auto flex flex-col gap-y-2">
                    <h2 className="font-medium text-on-surface uppercase tracking-tight text-5xl md:text-7xl">
                        {t("title")}
                    </h2>
                    <p className="text-on-surface-variant text-lg leading-relaxed text-pretty">
                        {t("description")}
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
                    <Link href="/" className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 w-64 bg-primary text-on-primary font-bold uppercase rounded-sm hover:bg-primary/90 transition-all duration-300">
                        <span className="relative z-10">{t("cta.home")}</span>
                        <ArrowRight strokeWidth={2} size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"/>
                    </Link>
                    <Link href="/projects" className="inline-flex items-center justify-center gap-3 px-10 py-4 w-64 border border-outline-variant/30 hover:bg-surface-container font-bold uppercase text-on-surface rounded-sm transition-colors duration-300">
                        {t("cta.projects")}
                    </Link>
                </div>
            </div>
        </main>
    );
}
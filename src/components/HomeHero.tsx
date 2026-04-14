"use client"

import {useTranslations} from "next-intl";
import {Link} from '@/i18n/navigation';
import {ArrowRight} from "lucide-react";

export default function HomeHero() {
    const t = useTranslations("HomeHero");

    return (
        <div id="home-hero" className="flex flex-1 flex-col pt-30 px-6 relative overflow-hidden bg-surface">
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"/>
            <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"/>
            <div className="max-w-7xl mx-auto w-full relative z-10 mb-4">
                {/* MAIN CONTENT */}
                <div className="flex flex-1 flex-col justify-center">
                    <div className="mb-4 flex items-center gap-4">
                        <span className="h-0.5 w-10 bg-primary"/>
                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">
                            {t("role")}
                        </span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold mb-10 max-w-4xl text-on-surface">
                        <span className="text-primary">{t("headline.first")}</span>
                        <span> {t("headline.second")}</span>
                    </h1>
                    <p className="text-xl/8 md:text-2xl/9 text-on-surface-variant md:text-justify max-w-2xl mb-10">
                        {t("subtext")}
                    </p>
                    {/* CTA BUTTONS */}
                    <div className="flex flex-wrap items-center gap-6">
                        <Link href="/projects" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 w-52 bg-primary text-on-primary font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0">
                            <span className="relative z-10">{t("cta.projects")}</span>
                            <ArrowRight strokeWidth={2} size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300"/>
                        </Link>
                        <a target="_blank" rel="noopener noreferrer" href={t("cta.resume.path")} className="inline-flex items-center justify-center gap-3 px-8 py-4 w-52 border border-outline-variant hover:border-primary hover:text-primary font-bold text-sm tracking-widest uppercase text-on-surface rounded-sm hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0 cursor-pointer">
                            {t("cta.resume.title")}
                        </a>
                    </div>
                </div>
                {/* SCROLL INDICATOR */}
                <div className="flex flex-col items-center gap-4 pt-12 animate-bounce">
                    <span className="text-xs uppercase tracking-[0.3em] font-bold text-outline">
                        {t("scroll")}
                    </span>
                    <div className="w-px h-12 bg-linear-to-b from-primary to-transparent"/>
                </div>
            </div>
        </div>
    );
}
"use client"

import {useTranslations} from "next-intl";

export default function Education() {
    const t = useTranslations("Education");

    return (
        <section id="education" className="py-32 px-6 bg-surface-container-low border-t border-outline-variant">
            <div className="max-w-6xl mx-auto">
                <div className="mb-24 text-center">
                    <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-6">
                        {t("title")}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface">
                        {t("headline")}
                    </h3>
                </div>
                <div className="relative border-l border-outline-variant ml-4 md:ml-0">
                    <div className="mb-10 pl-10 relative group">
                        <div className="absolute -left-1 top-2 w-2 h-2 rounded-full bg-primary ring-8 ring-primary/20 group-hover:ring-12 transition-all duration-300"/>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                            <h4 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                                {t("program")}
                            </h4>
                            <span className="text-sm font-bold tracking-widest text-primary uppercase">
                                {t("university")} • 2019 - 2023 • Ottawa, ON
                            </span>
                        </div>
                        <p className="text-on-surface-variant text-xl/8">
                            {t("description")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

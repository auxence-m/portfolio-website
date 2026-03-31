"use client"

import {useTranslations} from "next-intl";

export default function Summary() {
    const t = useTranslations("Summary");

    return (
        <section id="summary" className="py-32 px-6 border-t border-outline-variant bg-surface">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
                    <div className="lg:col-span-4">
                        <h2 className="test-sm font-bold tracking-[0.3em] text-primary uppercase mb-6">
                            {t("title")}
                        </h2>
                        <h3 className="text-4xl font-bold text-on-surface lg:text-balance">
                            {t("headline")}
                        </h3>
                    </div>
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        <p className="text-lg/8 md:text-xl/9 text-on-surface font-light text-pretty">
                            {t("subtext")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
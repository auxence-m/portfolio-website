"use client";

import {useTranslations} from "next-intl";

export default function ContactHero() {
    const t = useTranslations("Contact");

    return (
        <section id="contact-hero" className="py-35 px-6 bg-surface-dim">
            <div className="max-w-7xl w-full mx-auto">
                <div className="flex flex-col text-center gap-y-6">
                    <span className="text-primary tracking-[0.2em] uppercase text-xs block">
                        {t("status")}
                    </span>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase bg-radial from-primary to-on-surface bg-clip-text text-transparent">
                        {t("title")}
                    </h1>
                </div>
            </div>
        </section>
    );
}
"use client"

import {useTranslations} from "next-intl";
import {ArrowRight} from "lucide-react";
import Image from "next/image";
import {Link} from "@/i18n/navigation";
import {socialMedias} from "@/lib/utils";



export default function HomeCTA() {
    const t = useTranslations("CallToAction");

    return (
        <section id="home-cta" className="py-32 px-6 bg-surface-container relative border-t border-outline-variant overflow-hidden">
            {/* DOTTED BACKGROUND */}
            <div className="dot-background absolute ml-5 mt-1 inset-0"/>
            {/* MAIN CONTENT */}
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-12 lg:text-balance">
                    {t("title")}
                </h2>
                <div className="flex items-center justify-center gap-4">
                    <Link href="/contact" className="px-8 py-6 inline-flex items-center justify-between md:w-96 gap-2 bg-primary text-on-primary font-bold text-sm tracking-widest uppercase group hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-transform duration-300 active:translate-y-0 rounded-sm cursor-pointer">
                        {t("cta")}
                        <ArrowRight strokeWidth={2} size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"/>
                    </Link>
                </div>
                <div className="mt-12 flex justify-center gap-10">
                    {
                        socialMedias.map((social) => (
                            <a target="_blank" rel="noopener noreferrer" href={social.href} key={social.name} className="inline-flex items-center justify-center gap-4 text-on-surface-variant group font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors duration-300">
                                <div className="flex items-center shrink-0 justify-center p-2 border border-outline-variant rounded-sm group-hover:border-primary transition-all duration-300">
                                    <Image alt={social.alt} src={social.logo} width={128} height={128} className="size-6"/>
                                </div>
                                {social.name}
                            </a>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
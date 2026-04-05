"use client"

import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";
import {ArrowUpRight} from "lucide-react";

const socials = ["GitHub", "LinkedIn"];

export default function ProjectsCTA() {
    const t = useTranslations("CallToAction");

    return (
        <section id="projects-cta" className="py-30 px-6 bg-surface-dim overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="rounded-xl overflow-hidden border border-outline-variant/10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 relative">
                        {/* LEFT HAND SIDE - TITLE  */}
                        <div className="lg:col-span-7 p-12 md:p-16 bg-surface-container-high/50 flex items-center h-full z-10">
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter bg-linear-[180deg] from-on-surface to-primary bg-clip-text text-transparent">
                                {t("title")}
                            </h2>
                        </div>
                        {/* RIGHT HAND SIDE - BUTTONS */}
                        <div className="lg:col-span-5 p-12 md:p-16 flex flex-col items-start gap-10 bg-surface-container-low/30 z-10">
                            {/* TOP */}
                            <div className="w-full flex flex-col gap-y-6">
                                <p className="text-outline-variant uppercase tracking-[0.2em] text-xs">
                                    {t("message")}
                                </p>
                                <Link href="/contact" className="w-full flex justify-center bg-primary text-on-primary uppercase tracking-widest px-10 py-5 rounded-md hover:bg-primary/90 transition-all active:scale-95 shadow-md shadow-primary/20">
                                    {t("cta")}
                                </Link>
                            </div>
                            {/* BOTTOM */}
                            <div className="w-full pt-10 border-t border-outline-variant/50">
                                <p className="text-outline-variant font-label uppercase tracking-[0.2em] text-[0.625rem] mb-6">
                                    {t("connect")}
                                </p>
                                <div className="flex gap-10 relative">
                                    {
                                        socials.map((social,index) => (
                                            <a href="#" key={index} className="inline-flex items-center text-sm justify-center gap-2 text-on-surface group font-bold tracking-[0.2em] uppercase hover:text-primary">
                                                {social}
                                                <ArrowUpRight strokeWidth={2} size={16} className="opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0"/>
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
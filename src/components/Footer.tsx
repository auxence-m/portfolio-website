"use client"

import {useTranslations} from "next-intl";
import {Link} from '@/i18n/navigation';
import {ArrowUp, CopyrightIcon} from "lucide-react";
import {NavigationItem} from "@/lib/types";

export default function Footer() {
    const t = useTranslations("Footer");

    const navigation: NavigationItem[] = [
        {
            name: t("explore.projects"),
            href: "/projects",
        },
        {
            name: t("explore.contact"),
            href: "/contact",
        }
    ]

    // TODO: Resume link open in new tab
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <footer className="py-20 px-6 border-t border-outline-variant bg-surface-dim transition-colors">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
                    {/* LEFT HAND SIDE */}
                    <div className="flex flex-col max-w-sm gap-y-8">
                        <div className="flex flex-col gap-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm">
                                    <span className="text-on-primary font-bold text-xl leading-none">AM</span>
                                </div>
                                <span className="font-bold tracking-tight text-xl text-on-surface-light">Auxence MEDJA</span>
                            </div>
                            <p className="text-on-surface-variant text-base/7">
                                {t("subtext")}
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
                            <span className="text-xs font-bold tracking-widest text-on-surface uppercase">{t("availability")}</span>
                        </div>
                    </div>
                    {/* RIGHT HAND SIDE */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                        <div className="flex flex-col gap-y-6">
                            <h4 className="text-sm font-bold tracking-widest text-primary uppercase">{t("explore.title")}</h4>
                            <ul className="flex flex-col gap-3">
                                {
                                    navigation.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">{item.name}</Link>
                                        </li>
                                    ))
                                }
                                <li>
                                    <a href="#" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">{t("explore.resume")}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-y-6">
                            <h4 className="text-sm font-bold tracking-widest text-primary uppercase">{t("location.title")}</h4>
                            <p className="text-on-surface-variant text-sm font-medium">
                                {t("location.subtext")}
                            </p>
                        </div>
                    </div>
                </div>
                {/* BOTTOM SECTION */}
                <div className="pt-10 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-xs font-bold tracking-widest text-outline uppercase flex gap-x-1">
                        <CopyrightIcon size={16} strokeWidth={1.5}/>
                        <span>{new Date().getFullYear()}.</span>
                        <span>{t("copyright")}</span>
                    </div>
                    <div>
                        <button type="button" onClick={scrollToTop} className="w-12 h-12 border border-outline-variant flex items-center justify-center hover:bg-primary hover:border-primary hover:text-on-primary transition-all rounded-sm group shadow-sm active:scale-95 cursor-pointer">
                            <ArrowUp strokeWidth={2} size={24} className="group-hover:-translate-y-1 transition-transform duration-300"/>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
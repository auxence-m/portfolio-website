"use client"

import {useLocale, useTranslations} from "use-intl";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import {Menu, X as XIcon } from "lucide-react";
import {useState} from "react";
import {Dialog, DialogBackdrop, DialogPanel} from "@headlessui/react";
import LanguageToggle from "@/components/LanguageToggle";

const navigation =[
    {
        name: "projects",
        href: "#projects",
    },
    {
        name: "contact",
        href: "#contact",
    }
]

export default function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    const t = useTranslations('Navbar');
    const locale = useLocale();

    function goToSection(id: string) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "instant", block: "start" });
        }
        setOpenMobileMenu(false);
    }

    // TODO: Resume link open in new tab

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-outline-variant bg-surface/80 backdrop-blur-md transition-colors">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link href={`/${locale}`} onClick={() => goToSection("hero")} className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm transition-transform hover:scale-105 active:scale-95">
                        <span className="text-on-primary font-bold text-xl leading-none">AM</span>
                    </Link>
                    <span className="font-bold tracking-tight text-lg text-on-surface">Auxence MEDJA</span>
                </div>
                <div className="hidden lg:flex items-center gap-10">
                    {
                        navigation.map((nav) => (
                            <Link key={nav.name} href={nav.href} onClick={() => goToSection(nav.name)} className="text-on-surface-variant hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide uppercase relative group">
                                {nav.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"/>
                            </Link>
                        ))
                    }
                    <a href="#" className="px-5 py-2.5 bg-primary text-on-primary font-bold text-xs tracking-widest uppercase hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all rounded-sm">
                        {t("resume")}
                    </a>
                    <div className="h-6 w-px bg-outline-variant"/>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center text-xs font-bold tracking-widest uppercase rounded-sm">
                            <LanguageToggle/>
                        </div>
                        <div className="text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-sm flex items-center justify-center active:scale-95">
                            <ThemeToggle size={22}/>
                        </div>
                    </div>
                </div>
                <button type="button" onClick={() => setOpenMobileMenu(true)} className="flex items-center justify-center lg:hidden text-on-surface hover:text-primary transition-colors">
                    <span className="sr-only">Open menu / Ouvrir menu</span>
                    <Menu strokeWidth={2} size={28}/>
                </button>
            </div>
            <Dialog open={openMobileMenu} onClose={() => setOpenMobileMenu(false)} className="lg:hidden">
                <DialogBackdrop transition className="fixed inset-0 bg-black/30 duration-500 ease-in-out data-closed:opacity-0"/>
                <div className="fixed inset-0 z-50"/>
                <DialogPanel transition className="flex flex-col fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-surface px-5 py-3.5 transform duration-500 ease-in-out data-closed:translate-x-full data-closed:opacity-100 sm:duration-700">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Link href={`/${locale}`} onClick={() => setOpenMobileMenu(false)} className="mt-1.5 ml-1 w-10 h-10 bg-primary flex items-center justify-center rounded-sm transition-transform active:scale-95">
                                <span className="text-on-primary font-bold text-xl leading-none">AM</span>
                            </Link>
                            <span className="font-bold tracking-tight text-lg text-on-surface">Auxence MEDJA</span>
                        </div>
                        <button type="button" onClick={() => setOpenMobileMenu(false)} className="-m-2.5 rounded-md p-2.5 text-on-surface-variant">
                            <span className="sr-only">Close menu</span>
                            <XIcon strokeWidth={2} size={26}/>
                        </button>
                    </div>
                    <div className="flex flex-col ml-2 gap-y-6 py-10 px-2">
                        {
                            navigation.map((nav) => (
                                <Link key={nav.name} href={nav.href} onClick={() => goToSection(nav.name)} className="-mx-3 bg-outline-variant/20 p-5 rounded-sm block text-on-surface-variant transition-all font-medium text-sm tracking-wide uppercase">
                                    {nav.name}
                                </Link>
                            ))
                        }
                    </div>
                    <div className="mt-auto ml-2 flex flex-col gap-6">
                        <div className="py-6">
                            <a href="#" className=" flex items-center justify-center p-5 bg-primary text-on-primary font-bold text-xs tracking-widest uppercase active:translate-y-0 transition-all rounded-sm">
                                {t("resume")}
                            </a>
                        </div>
                        <div className="flex items-center justify-between border-t border-outline-variant pt-6">
                            <div className="flex items-center justify-center text-sm font-bold tracking-widest uppercase text-on-surface-variant">
                                <LanguageToggle/>
                            </div>
                            <div className="text-on-surface-variant flex items-center">
                                <ThemeToggle size={22}/>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </nav>
    );
}
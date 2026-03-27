"use client";

import ThemeToggle from "@/components/ThemeToggle";
import {ArrowRight} from "lucide-react";
import {useRouter} from 'next/navigation';

const languageOptions = [
    {
        name: "English",
        short_name: "EN-CA",
        label: "DIRECTORY_EN",
        helper_text: "Enter Portfolio",
        locale: "en"
    },
    {
        name: "Français",
        short_name: "FR-CA",
        label: "DIRECTORY_FR",
        helper_text: "Accéder au Portfolio",
        locale: "fr"
    }
]

export default function LanguageChoice() {
    const router = useRouter();

    function chooseLanguage(locale: string) {
        router.push(`/${locale}`);
    }

    return (
        <div className="min-h-screen bg-surface-container-lowest text-on-surface">
            <main className="flex flex-col min-h-screen justify-center items-center px-6 py-12">
                <div className="w-full max-w-7xl mx-auto flex justify-end mb-6">
                    <div className="bg-surface-container text-primary rounded-xl hover:bg-surface-container-high shadow-lg border border-outline-variant/20">
                        <ThemeToggle size={26}/>
                    </div>
                </div>
                <div className="text-center mb-16 lg:mb-24">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-tighter text-on-surface uppercase text-balance">
                        Select your preferred language
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row max-w-5xl items-stretch justify-center gap-8 w-full mb-12">
                    {
                        languageOptions.map((language) => (
                            <button key={language.locale} onClick={() => chooseLanguage(language.locale)} className="flex flex-col flex-1 group relative rounded-xl bg-surface-container p-10 lg:p-16 text-left border border-outline-variant hover:border-primary transition-all duration-500 hover:bg-surface-container-high cursor-pointer">
                                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                                    <span className="text-primary text-xs tracking-widest">{language.short_name}</span>
                                </div>
                                <span className="text-on-surface-variant text-[0.75rem] tracking-widest block mb-2 group-hover:text-primary transition-colors duration-300">
                                        {language.label}
                                    </span>
                                <div className="relative pr-5">
                                    <h2 className="font-bold text-4xl lg:text-5xl text-on-surface uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                                        {language.name}
                                    </h2>
                                    <span className="absolute mt-6 w-0 h-px bg-primary group-hover:w-full transition-all duration-500"></span>
                                </div>
                                <div className="mt-12 opacity-60 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-3">
                                        <span className="text-sm text-on-surface-variant italic">
                                            {language.helper_text}
                                        </span>
                                    <ArrowRight strokeWidth={1.5} size={16} className="text-primary"/>
                                </div>
                            </button>
                        ))
                    }
                </div>
            </main>
        </div>
    );
}
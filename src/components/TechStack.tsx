"use client"

import {useTranslations} from "next-intl";
import Image from "next/image";

const technologies = [
    {
        name: "Next.js",
        alt: "Next.js logo",
        logo: "/nextjs-logo.svg",
    },
    {
        name: "React",
        alt: "React logo",
        logo: "/react-logo.svg",
    },
    {
        name: "TypeScript",
        alt: "TypeScript logo",
        logo: "/typescript-logo.svg",
    },
    {
        name: "Go",
        alt: "Go logo",
        logo: "/go-logo.svg",
    },
    {
        name: "C++",
        alt: "C++ logo",
        logo: "/cplusplus-logo.svg",
    },
    {
        name: "Java",
        alt: "Java logo",
        logo: "/java-logo.svg",
    },
    {
        name: "TailwindCSS",
        alt: "TailwindCSS logo",
        logo: "/tailwindcss-logo.svg",
    },
    {
        name: "MaterialUI",
        alt: "MaterialUI logo",
        logo: "/materialui-logo.svg",
    },
    {
        name: "Google Cloud",
        alt: "Google Cloud logo",
        logo: "/googlecloud-logo.svg",
    },
    {
        name: "Firebase",
        alt: "Firebase logo",
        logo: "/firebase-logo.svg",
    },
    {
        name: "GitHub",
        alt: "GitHub logo",
        logo: "/github-logo.svg",
    },
    {
        name: "Docker",
        alt: "Docker logo",
        logo: "/docker-logo.svg",
    },

]

export default function TechStack() {
    const t = useTranslations("Tech");

    return (
        <section id="tech" className="py-32 px-6 bg-surface-container border-t border-outline-variant">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-6">{t("title")}</h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface">{t("headline")}</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {
                        technologies.map((tech, index) => (
                            <div key={index} className="p-6 bg-surface-container-high border border-outline-variant rounded-sm flex flex-col items-center justify-center text-center group hover:border-primary hover:-translate-y-1 transition-all duration-500 relative">
                                <Image alt={tech.alt} src={tech.logo} width={128} height={128} className="mb-4 size-6 group-hover:scale-110 transition-all duration-500"/>
                                <div className="font-bold tracking-widest text-on-surface group-hover:text-primary transition-colors">
                                    {tech.name}
                                </div>
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:left-0 group-hover:w-full"/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
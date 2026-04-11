"use client";

import {useTranslations} from "next-intl";
import {scrollToSection} from "@/lib/utils";

const projectsList = [
    {
        id: "01",
        href: "arboml",
        name: "ArboML"
    },
    {
        id: "02",
        href: "cloudtail",
        name: "Cloudtail"
    },
    {
        id: "03",
        href: "url-shortener",
        name: "URL Shortener"
    },
    {
        id: "04",
        href: "go-weather",
        name: "Go Weather",
    }
];

export default function ProjectsHero() {
    const t = useTranslations("ProjectsHero");

    return (
        <section id="project-hero" className="py-30 px-6 bg-surface-dim">
            <div className="max-w-7xl w-full relative z-10 mx-auto">
                <div className="flex flex-1 flex-col justify-center ">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="h-0.5 w-10 bg-primary"/>
                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">
                            {t("helper")}
                        </span>
                    </div>
                    {/* TITLE AND SUBTEXT */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        <div className="lg:col-span-8">
                            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase bg-linear-[195deg] from-on-surface to-primary bg-clip-text text-transparent">
                                {t("title")}
                            </h1>
                        </div>
                        <div className="lg:col-span-4 flex mt-auto lg:mb-3.5">
                            <p className="text-xl text-on-surface-variant font-light lg:text-pretty">
                                {t("subtext")}
                            </p>
                        </div>
                    </div>
                    {/* NAV SECTION - PROJECT TITLES */}
                    <div className="mt-10 lg:mt-20 max-w-5xl">
                        <div className="flex flex-wrap items-center gap-4">
                            {
                                projectsList.map((project) => (
                                    <button key={project.id} onClick={() => scrollToSection(project.href)} className="group flex items-center justify-center gap-3 px-8 py-3 w-56 rounded-xl bg-surface-container-low/50 border border-outline-variant/30 hover:bg-surface-container-high hover:border-primary transition-all duration-300 active:scale-95 shrink-0 cursor-pointer">
                                        <span className="text-xs text-outline-variant group-hover:text-primary transition-colors duration-300">
                                            {project.id}
                                        </span>
                                        <span className="text-sm uppercase tracking-widest text-on-surface group-hover:text-primary transition-colors duration-300">
                                            {project.name}
                                        </span>
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
"use client";

import {useTranslations} from "next-intl";
import {ProjectDetails} from "@/lib/types";
import {Code as CodeIcon, SquareArrowOutUpRight} from "lucide-react";

export default function ProjectsDetails() {
    const t = useTranslations("ProjectsList");

    const projectsList: ProjectDetails[] = [
        {
            id: "arboml",
            name: t("ArboML.name"),
            description: t("ArboML.description"),
            codeLink: "#",
            demoLink: "#",
            features: [t("ArboML.features.first"), t("ArboML.features.second"), t("ArboML.features.third")],
            technologies: ["Next.js", "TypeScript", "Tailwindcss", "Firebase"]
        },
        {
            id: "cloudtail",
            name: t("Cloudtail.name"),
            description: t("Cloudtail.description"),
            codeLink: "#",
            demoLink: "#",
            features: [t("Cloudtail.features.first"), t("Cloudtail.features.second"), t("Cloudtail.features.third")],
            technologies: ["Go", "Google Cloud", "Next.js", "TypeScript"]
        },
        {
            id: "url-shortener",
            name: t("urlShortener.name"),
            description: t("urlShortener.description"),
            codeLink: "#",
            demoLink: "#",
            features: [t("urlShortener.features.first"), t("urlShortener.features.second"), t("urlShortener.features.third")],
            technologies: ["Go", "Google Cloud", "React", "JavaScript"]
        },
        {
            id: "go-weather",
            name: t("goWeather.name"),
            description: t("goWeather.description"),
            codeLink: "#",
            demoLink: "",
            features: [t("goWeather.features.first"), t("goWeather.features.second"), t("goWeather.features.third")],
            technologies: ["Go"]
        }
    ];

    return (
        <section id="projects-details" className="bg-surface-dim border-t border-outline-variant">
            {
                projectsList.map((project) => (
                    <article id={project.id} key={project.name} className="group relative border-b border-outline-variant/10 hover:bg-surface-container/30 transition-all duration-500 scroll-mt-20">
                        <div className="max-w-7xl px-6 mx-auto py-30">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                                {/* NAME AND DESCRIPTION */}
                                <div className="order-1 lg:col-span-7 flex flex-col gap-y-4">
                                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter group-hover:text-primary transition-colors duration-300 mb-4">
                                        {project.name}
                                    </h2>
                                    <p className="text-on-surface-variant text-lg leading-relaxed text-pretty">
                                        {project.description}
                                    </p>
                                </div>
                                {/* FEATURES */}
                                <div className="order-2 lg:col-span-5 lg:pl-12 border-l border-outline-variant/10 lg:row-span-2">
                                    <h3 className="text-xs uppercase tracking-[0.2em] text-outline-variant mb-6">
                                        {t("helper.features")}
                                    </h3>
                                    <ul className="list-disc ml-5 flex flex-col gap-y-2 text-on-surface-variant text-base/7">
                                        {
                                            project.features.map((feature,index) => (
                                                <li key={index}>
                                                    {feature}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                {/* TECH PILLS AND CTA */}
                                <div className="order-3 lg:col-span-7 flex flex-col gap-y-8">
                                    <div className="flex flex-wrap gap-3">
                                        {
                                            project.technologies.map((technology, index) => (
                                                <span key={index} className="px-3 py-1 text-xs uppercase tracking-wider rounded-full border border-primary/20 bg-primary/5 text-primary">
                                                    {technology}
                                                </span>
                                            ))
                                        }
                                    </div>
                                    <div className="flex items-center gap-8 pt-4">
                                        <a href={project.codeLink} className="flex items-center gap-2 text-sm uppercase tracking-widest text-on-surface hover:text-primary transition-colors">
                                            <CodeIcon strokeWidth={2} size={14}/>
                                            {t("helper.code")}
                                        </a>
                                        {
                                            project.demoLink &&
                                            <a href={project.codeLink} className="flex items-center gap-2 text-sm uppercase tracking-widest text-on-surface hover:text-primary transition-colors">
                                                <SquareArrowOutUpRight  strokeWidth={2} size={14}/>
                                                {t("helper.demo")}
                                            </a>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                ))
            }
        </section>
    );
}
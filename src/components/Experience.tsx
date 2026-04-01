"use client"

import {useTranslations} from "next-intl";

export default function Experience() {
    const t = useTranslations("Experience");

    const experience = [
        {
            "name": "Technical Support",
            "title": t("technicalSupport.title"),
            "company": t("technicalSupport.company"),
            "city": t("technicalSupport.city"),
            "from": t("technicalSupport.from"),
            "to": t("technicalSupport.to"),
            "description": [t("technicalSupport.description.first"), t("technicalSupport.description.second"), t("technicalSupport.description.third")]
        },
        {
            "name": "Tools Programmer",
            "title": t("toolsProgrammer.title"),
            "company": t("toolsProgrammer.company"),
            "city": t("toolsProgrammer.city"),
            "from": t("toolsProgrammer.from"),
            "to": t("toolsProgrammer.to"),
            "description": [t("toolsProgrammer.description.first"), t("toolsProgrammer.description.second"), t("toolsProgrammer.description.third")]
        },
        {
            "name": "Web Developer",
            "title": t("webDeveloper.title"),
            "company": t("webDeveloper.company"),
            "city": t("webDeveloper.city"),
            "from": t("webDeveloper.from"),
            "to": t("webDeveloper.to"),
            "description": [t("webDeveloper.description.first"), t("webDeveloper.description.second"), t("webDeveloper.description.third")]
        }
    ];

    return (
        <section id="experience" className="py-32 px-6 bg-surface border-t border-outline-variant">
            <div className="max-w-5xl mx-auto">
                <div className="mb-24 text-center">
                    <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-6">
                        {t("title")}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface">
                        {t("headline")}
                    </h3>
                </div>
                <div className="relative border-l border-outline-variant ml-4 md:ml-0">
                    {
                        experience.map((exp, index) => (
                            <div key={exp.name} className="mb-20 pl-10 relative group">
                                <div className={`absolute -left-1 top-2 w-2 h-2 rounded-full duration-300 ${index ===0 ? "bg-primary ring-8 ring-primary/20 group-hover:ring-12 transition-all" : "bg-outline group-hover:bg-primary transition-colors"}`}/>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                    <h4 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                                        {exp.title}
                                    </h4>
                                    <span className="text-sm font-bold tracking-widest text-primary uppercase">
                                        {exp.company} • {exp.from} - {exp.to} • {exp.city}
                                    </span>
                                </div>
                                <ul className="list-disc ml-5 flex flex-col gap-y-2 text-on-surface-variant text-lg">
                                    {
                                        exp.description.map((item, index) => (
                                            <li key={index}>
                                                {item}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
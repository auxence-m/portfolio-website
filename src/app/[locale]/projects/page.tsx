import ProjectsHero from "@/components/ProjectsHero";
import ProjectsDetails from "@/components/ProjectsDetails";
import ProjectsCTA from "@/components/ProjectsCTA";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: {params: Promise<{locale: "en" | "fr"}>}):Promise<Metadata> {
    const {locale} = await params;
    const t = await getTranslations({locale, namespace: "Metadata.projects"});

    const path = locale === "fr" ? "projets" : "projects";

    return {
        title: t("title"),
        description: t("description"),
        alternates: {
            canonical: `https://www.auxmedja.com/${locale}/${path}`,
            languages: {
                en: "https://www.auxmedja.com/en/projects",
                fr: "https://www.auxmedja.com/fr/projets",
                "x-default": "https://www.auxmedja.com/en/projects"

            }
        }
    }
}

export default function ProjectsPage() {
    return (
        <div className="flex flex-col">
            <ProjectsHero/>
            <ProjectsDetails/>
            <ProjectsCTA/>
        </div>
    );
}
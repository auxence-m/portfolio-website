import HomeHero from "@/components/HomeHero";
import Summary from "@/components/Summary";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import HomeCTA from "@/components/HomeCTA";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";

export async function generateMetadata({params}: {params: Promise<{locale: "en | fr"}>}):Promise<Metadata> {
    const {locale} = await params;
    const t = await getTranslations({locale, namespace: "Metadata.home"});

    return {
        title: t("title"),
        description: t("description"),
    }
}

export default function HomePage() {
    return (
        <div className="flex flex-col">
            <HomeHero/>
            <Summary/>
            <Education/>
            <TechStack/>
            <Experience/>
            <HomeCTA/>
        </div>
    );

}
import HomeHero from "@/components/HomeHero";
import Summary from "@/components/Summary";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import CallToAction from "@/components/CallToAction";

export default function Home() {
    return (
        <div className="flex flex-col">
            <HomeHero/>
            <Summary/>
            <Education/>
            <TechStack/>
            <Experience/>
            <CallToAction/>
        </div>
    );

}
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";

export default function Home() {
    return (
        <div className="flex flex-col">
            <Hero/>
            <Summary/>
            <Education/>
            <TechStack/>
        </div>
    );

}
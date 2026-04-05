import ProjectsHero from "@/components/ProjectsHero";
import ProjectsDetails from "@/components/ProjectsDetails";
import ProjectsCTA from "@/components/ProjectsCTA";

export default function ProjectsPage() {
    return (
        <div className="flex flex-col">
            <ProjectsHero/>
            <ProjectsDetails/>
            <ProjectsCTA/>
        </div>
    );
}
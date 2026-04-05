export type NavigationItem =  {
    name: string;
    href: ("/" | "/projects" | "/contact");
}

export type ProjectDetails = {
    id: string;
    name: string;
    description: string;
    codeLink: string;
    demoLink: string;
    features: string[];
    technologies: string[];

}
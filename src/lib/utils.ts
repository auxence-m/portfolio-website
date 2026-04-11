export const socialMedias = [
    {
        name: "GitHub",
        alt: "GitHub logo",
        logo: "/github-logo.svg",
        href: "https://github.com/auxence-m",
        alias: "auxence-m"
    },
    {
        name: "LinkedIn",
        alt: "LinkedIn logo",
        logo: "/linkedin-logo.svg",
        href: "https://www.linkedin.com/in/auxence-medja/",
        alias: "Auxence MEDJA"
    },
]


export function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
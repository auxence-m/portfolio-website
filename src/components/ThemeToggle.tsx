"use client";

import {useTheme} from "next-themes";
import {Moon, Sun} from "lucide-react";

export default function ThemeToggle({size}: {size: number}) {
    const {resolvedTheme, setTheme} = useTheme();

    function handleThemeChange() {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }

    return (
        <button type="button" onClick={handleThemeChange} className="p-3 group cursor-pointer">
            <Sun strokeWidth={2} size={size} className="transition-all duration-300 group-hover:rotate-45 hidden dark:block"/>
            <Moon strokeWidth={2} size={size} className="transition-all duration-300 group-hover:rotate-45 block dark:hidden"/>
        </button>
    )
}
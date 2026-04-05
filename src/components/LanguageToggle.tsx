import {useLocale} from "next-intl";
import {useRouter, usePathname} from "@/i18n/navigation";

const languages = ["en", "fr"];

export default function LanguageToggle() {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    function handleChangeLanguage(lang: string) {
        router.replace(pathname, {locale: lang});

    }

    return (
        <div className="flex items-center bg-surface-container p-1 rounded-sm border border-outline-variant">
            {
                languages.map((lang, index) => (
                    <button key={index} onClick={() => handleChangeLanguage(lang)} className={`px-2 py-1 font-bold tracking-widest uppercase rounded-sm cursor-pointer ${locale === lang ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:text-primary"}`}>
                        {lang}
                    </button>
                ))
            }
        </div>
    );
}
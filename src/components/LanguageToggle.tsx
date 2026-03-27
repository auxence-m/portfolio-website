import {useLocale} from "use-intl";
import {useRouter} from 'next/navigation';

export default function LanguageToggle() {
    const locale = useLocale();
    const router = useRouter();

    function handleChangeLanguage() {
        router.replace(locale === "en" ? "/fr" : "/en", {scroll: false});
    }

    return (
        <button type="button" onClick={handleChangeLanguage} className="p-3 group cursor-pointer flex items-center justify-center flex-row gap-1">
            <span className={`${locale == "en" ? "text-primary" : "text-on-surface-variant" }`}>EN</span>
            {" / "}
            <span className={`${locale == "fr" ? "text-primary" : "text-on-surface-variant" }`}>FR</span>
        </button>
    );
}
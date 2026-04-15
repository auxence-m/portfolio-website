import {TriangleAlert, XIcon} from "lucide-react";
import {Button} from "@headlessui/react";
import {useState} from "react";
import {useTranslations} from "next-intl";

export default function ContactErrorBanner() {
    const t = useTranslations("ErrorBanner");
    const [showBanner, setShowBanner] = useState(true);

    function closeBanner() {
        setShowBanner(false);
    }

    if (!showBanner) {
        return null
    }

    return (
        <div className="fixed top-20 inset-x-0 z-50 flex justify-center px-4">
            <div className="w-full max-w-7xl mt-2 lg:mt-4">
                <div className="flex items-center gap-4 rounded-md bg-error text-on-error shadow-xl backdrop-blur-sm p-4">
                    <TriangleAlert strokeWidth={2} size={24} className="shrink-0"/>
                    <p className="text-base text-pretty font-medium leading-snug">
                        {t("message")}
                    </p>
                    <Button type="button" onClick={closeBanner} className="ml-auto shrink-0 rounded-md p-1 hover:bg-on-error/30 transition-colors duration-300">
                        <span className="sr-only">Fermer</span>
                        <XIcon strokeWidth={2} size={22} />
                    </Button>
                </div>
            </div>
        </div>
    );
}
import { LanguageSwitcher } from "./LanguageSwitcher";
import { HeaderSurface } from "./HeaderSurface";
import type { Locale } from "@/app/i18n/config";
import type { TranslationProps } from "@/app/i18n/dictionaries";
export function Header({ dictionary, locale } : TranslationProps & { locale: Locale }) {
    const t = dictionary.ui;
    return (
        <HeaderSurface key={locale}>
            <div className="mx-auto flex max-w-8xl flex-wrap items-center justify-between gap-x-3 gap-y-2 px-4 py-4 sm:px-10">
                <a href="#home" aria-label={`Jakub Szczucinski — ${t.home}`} className="font-primary text-sm text-primary-100 sm:text-base">
                    Jakub<span className="hidden lg:inline"> SZCZUCINSKI</span><span className="text-primary-300">.</span>
                </a>
                <nav aria-label={t.navigation} className="order-last flex w-full flex-wrap items-center justify-center gap-3 text-xs text-primary-200 sm:order-none sm:w-auto sm:gap-7 sm:text-sm">
                    <a href="#path" className="header-link inline-flex min-h-11 items-center">{t.path}</a>
                    <a href="#projects" className="header-link">{t.projects}</a>
                    <a href="#contact" className="rounded-sm border border-primary-700 px-3 py-2 text-primary-100 transition-colors hover:border-primary-300 hover:bg-primary-800 sm:px-5">
                        {t.contact}
                    </a>
                </nav>
                <LanguageSwitcher locale={locale} label={t.language} messages={dictionary.languageDialog} />
            </div>
        </HeaderSurface>
    )
}

import Image from "next/image";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { HeaderSurface } from "./HeaderSurface";
import type { Locale } from "@/app/i18n/config";
import type { TranslationProps } from "@/app/i18n/dictionaries";
import styles from "@/app/components/home/Home.module.css";

export function Header({ dictionary, locale }: TranslationProps & { locale: Locale }) {
    const t = dictionary.ui;
    return <HeaderSurface key={locale}>
        <div className={styles.headerInner}>
            <a href="#home" aria-label={`Jakub Szczucinski — ${t.home}`} className={styles.brand}><Image src="/favicon.ico" alt="" width={42} height={42} className={styles.brandLogo} unoptimized /><span className={styles.brandName}>Jakub Szczucinski</span></a>
            <nav aria-label={t.navigation} className={styles.navigation}>
                {[{ id: "path", label: t.path }, { id: "projects", label: t.projects }, { id: "skills", label: t.skills }, { id: "contact", label: t.contact }].map(item => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}
            </nav>
            <LanguageSwitcher locale={locale} label={t.language} messages={dictionary.languageDialog} />
        </div>
    </HeaderSurface>;
}

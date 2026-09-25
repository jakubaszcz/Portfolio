import type { TranslationProps } from "@/app/i18n/dictionaries";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import contact from "@/app/data/contact/contact.json";
import styles from "@/app/components/home/Home.module.css";

export function Footer({ dictionary }: TranslationProps) {
    const t = dictionary.ui;
    return <footer className={styles.footer}>
        <div className={styles.footerInner}>
            <div className={styles.footerTop}><div><p className={styles.footerKicker}>{t.contact}</p><h2>{t.contactTitle}</h2></div><a href="#contact" className={styles.footerCta}>{t.contact}<ArrowUpRight size={24} aria-hidden="true" /></a></div>
            <div className={styles.footerMiddle}><a href="#home" className={styles.footerSignature}>Jakub Szczucinski.</a><nav aria-label={t.footerNavigation} className={styles.footerLinks}>{contact.socials.filter(social => social.url).map(social => <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`${social.name} (${t.newTab})`}>{social.name}<ArrowUpRight size={15} aria-hidden="true" /></a>)}</nav></div>
            <div className={styles.footerBottom}><p>© {new Date().getFullYear()} Jakub Szczucinski. {t.rights}</p><a href="#home">{t.backToTop}<ArrowUp size={16} aria-hidden="true" /></a></div>
        </div>
    </footer>;
}

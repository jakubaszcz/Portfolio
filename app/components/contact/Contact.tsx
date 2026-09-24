import type { TranslationProps } from "@/app/i18n/dictionaries";
import contact from "@/app/data/contact/contact.json";
import { ArrowUpRight, Download, Mail, FileText, Globe2, Code2, Users, Gamepad2 } from "lucide-react";
import styles from "./Contact.module.css";

const destinations = {
    "linkedin.com": { theme: styles.linkedin, Icon: Users },
    "github.com": { theme: styles.github, Icon: Code2 },
    "x.com": { theme: styles.twitter, Icon: Globe2 },
    "twitter.com": { theme: styles.twitter, Icon: Globe2 },
    "itch.io": { theme: styles.itch, Icon: Gamepad2 },
};

function destinationStyle(url: string) {
    try {
        const hostname = new URL(url).hostname;
        const match = Object.entries(destinations).find(([domain]) => hostname === domain || hostname.endsWith(`.${domain}`));
        if (match) return match[1];
    } catch { /* Empty destinations use the neutral, unavailable state. */ }
    return { theme: styles.neutral, Icon: Globe2 };
}

export function Contact({ dictionary }: TranslationProps) {
    const t = dictionary.ui;
    return <section id="contact" aria-labelledby="contact-title" className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-10 sm:py-16">
        <h2 id="contact-title" className="mb-8 font-primary text-3xl text-primary-100 sm:mb-10">{t.contact}</h2>
        <div className={styles.grid}>
            <div className={`${styles.card} ${styles.letter}`}>
                <span className={styles.icon}><Mail size={25} aria-hidden="true" /></span>
                <h3 className={styles.title}>{t.contactTitle}</h3>
                <p className={styles.copy}>{t.contactDescription}</p>
                <div className={styles.emailBlock}>
                    <h4 className={styles.eyebrow}>{t.professionalEmail}</h4>
                    {contact.email ? <a className={`${styles.link} ${styles.email}`} href={`mailto:${contact.email}`}><span className={styles.emailAddress}>{contact.email}</span><ArrowUpRight size={18} aria-hidden="true" /></a> : <p className={styles.unavailable}>{t.emailSoon}</p>}
                </div>
            </div>
            <div className={`${styles.card} ${styles.network}`}>
                <span className={styles.icon}><Globe2 size={25} aria-hidden="true" /></span>
                <h3 className={styles.title}>{t.online}</h3>
                <ul className={styles.socials}>
                    {contact.socials.map(social => {
                        const { theme, Icon } = destinationStyle(social.url);
                        return <li key={social.name}>{social.url ? <a className={`${styles.link} ${theme}`} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`${social.name} (${t.newTab})`}><span className={styles.linkLabel}><Icon size={20} aria-hidden="true" />{social.name}</span><ArrowUpRight size={18} aria-hidden="true" /></a> : <div className={styles.unavailable}><span>{social.name}</span><span>{t.soon}</span></div>}</li>;
                    })}
                </ul>
            </div>
            <div className={`${styles.card} ${styles.resume}`}>
                <span className={styles.icon}><FileText size={25} aria-hidden="true" /></span>
                <div className={styles.resumeText}><h3 className={styles.title}>{t.cv}</h3><p className={styles.copy}>{t.cvDescription}</p></div>
                {contact.cv ? <a href={contact.cv} download className={`${styles.link} ${styles.download}`}>{t.downloadCv}<Download size={18} aria-hidden="true" /></a> : <button type="button" disabled className={`${styles.link} ${styles.download}`}>{t.cvSoon}<Download size={18} aria-hidden="true" /></button>}
            </div>
        </div>
    </section>;
}

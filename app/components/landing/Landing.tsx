import type { TranslationProps } from "@/app/i18n/dictionaries";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { localePath, type Locale } from "@/app/i18n/config";
import { collections, collectionOrder } from "@/app/components/collections/registry";
import styles from "@/app/components/home/Home.module.css";

export function Landing({ dictionary, locale }: TranslationProps & { locale: Locale }) {
    const t = dictionary.ui;
    return <section id="home" className={styles.landing}>
        <div className={styles.heroLayout}>
            <div className={styles.heroText}>
                <p className={styles.kicker}><span aria-hidden="true" />{t.portfolio}</p>
                <h1 className={styles.heroName}>Jakub<span>Szczucinski.</span></h1>
                <p className={styles.heroDescription}>{t.projectsDescription}</p>
                <div className={styles.heroActions}><a href="#projects" className="primary-button">{t.exploreProjects}<ArrowDown size={17} aria-hidden="true" /></a><a href="#history" className="secondary-button">{t.aboutMe}<ArrowDown size={17} aria-hidden="true" /></a></div>
            </div>
            <nav className={styles.heroCollections} aria-label={t.projects}>
                {collectionOrder.map((kind, index) => {
                    const { Icon } = collections[kind];
                    return <Link key={kind} href={localePath(locale, kind)} className={styles.heroTile} data-collection={kind}>
                        <div className={styles.tileTop}><Icon size={28} strokeWidth={1.5} aria-hidden="true" /><span aria-hidden="true">0{index + 1}</span></div>
                        <span className={styles.tileLabel}>{dictionary[kind].collection}</span><ArrowUpRight size={20} className={styles.tileArrow} aria-hidden="true" />
                    </Link>;
                })}
            </nav>
        </div>
        <div className={styles.heroBottom}><span aria-hidden="true">01 — 04</span><a href="#history">{t.behindCode}<ArrowDown size={16} aria-hidden="true" /></a><span className={styles.palette} aria-hidden="true"><i /><i /><i /><i /></span></div>
    </section>;
}

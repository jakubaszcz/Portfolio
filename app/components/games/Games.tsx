import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Gamepad2 } from "lucide-react";
import games from "@/app/data/projects/games.json";
import { localePath, type Locale } from "@/app/i18n/config";
import type { TranslationProps } from "@/app/i18n/dictionaries";
import { LanguageSwitcher } from "@/app/components/header/LanguageSwitcher";
import { Card } from "@/app/components/projects/card/Card";
import styles from "./Games.module.css";
import { descriptionParagraphs } from "@/app/lib/descriptions";

type Props = TranslationProps & { locale: Locale };

function ArcadeMark() {
    return <div className={styles.mark} aria-hidden="true"><Gamepad2 strokeWidth={1.2} /><span>PLAY / CREATE / REPEAT</span></div>;
}

export function GamesProjectCard({ dictionary, locale }: Props) {
    const t = dictionary.games;
    return <article className={`${styles.theme} ${styles.feature}`}>
        <div className={styles.preview}><ArcadeMark /></div>
        <div className={styles.featureBody}>
            <p className={styles.eyebrow}>{t.collection}</p>
            <h3 className={styles.featureTitle}>{t.title}</h3>
            <p className={styles.copy}>{t.intro}</p>
            <Link href={localePath(locale, "games")} className={styles.button}>{t.explore}<ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
    </article>;
}

export function GamesPage({ dictionary, locale }: Props) {
    const t = dictionary.games;
    return <div className={`${styles.theme} ${styles.world}`}>
        <header className={styles.nav}>
            <Link href={`${localePath(locale)}#projects`} className={styles.back}><ArrowLeft size={18} aria-hidden="true" />{t.back}</Link>
            <LanguageSwitcher locale={locale} label={dictionary.ui.language} messages={dictionary.languageDialog} page="games" />
        </header>
        <main>
            <section className={styles.hero}>
                <div>
                    <p className={styles.eyebrow}>Jakub Szczucinski / {t.collection}</p>
                    <h1>{t.title}</h1>
                    <p className={styles.copy}>{t.intro}</p>
                    <a href="#games" className={styles.button}>{t.explore}<ArrowRight size={18} aria-hidden="true" /></a>
                </div>
                <ArcadeMark />
            </section>
            <section id="games" className={styles.library} aria-labelledby="games-title">
                <div className={styles.sectionHeading}><h2 id="games-title">{t.library}</h2><span>{String(games.length).padStart(2, "0")}</span></div>
                <div className={styles.grid}>
                    {games.map(game => <Card key={game.id} project={{ ...game, descriptions: descriptionParagraphs(game.description, locale) }} labels={{ ...dictionary.ui, visitWebsite: t.play }} />)}
                </div>
            </section>
        </main>
        <footer className={styles.footer}><Link href={`${localePath(locale)}#projects`} className={styles.back}><ArrowLeft size={18} aria-hidden="true" />{t.back}</Link><a className={styles.back} href="https://onticentity.itch.io/" target="_blank" rel="noopener noreferrer" aria-label={`itch.io (${dictionary.ui.newTab})`}>Onticentity / itch.io <ArrowUpRight size={16} aria-hidden="true" /></a></footer>
    </div>;
}

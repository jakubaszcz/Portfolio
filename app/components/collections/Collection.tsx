import Link from "next/link";
import { ArrowLeft, ArrowRight, AppWindow, Globe2, Terminal } from "lucide-react";
import software from "@/app/data/projects/projects.json";
import websites from "@/app/data/projects/websites.json";
import { localePath, type Locale } from "@/app/i18n/config";
import type { TranslationProps } from "@/app/i18n/dictionaries";
import { LanguageSwitcher } from "@/app/components/header/LanguageSwitcher";
import { Card } from "@/app/components/projects/card/Card";
import styles from "./Collection.module.css";
import { descriptionParagraphs } from "@/app/lib/descriptions";

type Kind = "software" | "websites";
type Props = TranslationProps & { locale: Locale; kind: Kind };

function CollectionArtwork({ kind }: { kind: Kind }) {
    return <div className={styles.artwork} aria-hidden="true">
        {kind === "software" ? <div className={styles.window}>
            <div className={styles.windowBar}><i /><i /><i /><span>workspace</span></div>
            <div className={styles.terminal}><Terminal size={34} /><span>build. run. simplify.</span><div className={styles.lines}><i /><i /><i /></div></div>
        </div> : <div className={styles.webArtwork}>
            <span className={styles.orbit}><Globe2 strokeWidth={1} /></span>
            <span className={styles.editorial}>www<span>.</span></span>
            <span className={styles.caption}>DESIGN / DEVELOP / PUBLISH</span>
        </div>}
    </div>;
}

export function CollectionProjectCard({ kind, dictionary, locale }: Props) {
    const t = dictionary[kind];
    return <article className={`${styles.theme} ${styles[kind]} ${styles.feature}`}>
        <CollectionArtwork kind={kind} />
        <div className={styles.featureBody}>
            <p className={styles.eyebrow}>{t.collection}</p>
            <h3>{t.title}</h3><p className={styles.copy}>{t.intro}</p>
            <Link className={styles.button} href={localePath(locale, kind)}>{t.explore}<ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
    </article>;
}

export function CollectionPage({ kind, dictionary, locale }: Props) {
    const t = dictionary[kind];
    const projects = (kind === "software" ? software : websites)
        .map(project => ({ ...project, descriptions: descriptionParagraphs(project.description, locale) }));
    const Icon = kind === "software" ? AppWindow : Globe2;
    return <div className={`${styles.theme} ${styles[kind]} ${styles.page}`}>
        <header className={styles.nav}>
            <Link className={styles.back} href={`${localePath(locale)}#projects`}><ArrowLeft size={18} aria-hidden="true" />{t.back}</Link>
            <LanguageSwitcher locale={locale} label={dictionary.ui.language} messages={dictionary.languageDialog} page={kind} />
        </header>
        <main>
            <section className={styles.hero}>
                <div><p className={styles.eyebrow}>Jakub Szczucinski / {t.collection}</p><h1>{t.title}</h1><p className={styles.copy}>{t.intro}</p><a href="#collection" className={styles.button}>{t.explore}<ArrowRight size={18} aria-hidden="true" /></a></div>
                <CollectionArtwork kind={kind} />
            </section>
            <section id="collection" className={styles.library} aria-labelledby="collection-title">
                <div className={styles.sectionTitle}><Icon size={25} aria-hidden="true" /><h2 id="collection-title">{t.library}</h2><span>{String(projects.length).padStart(2, "0")}</span></div>
                <div className={styles.grid}>{projects.map(project => <Card key={project.id} project={project} labels={dictionary.ui} />)}</div>
            </section>
        </main>
        <footer className={styles.footer}><span>Jakub Szczucinski / {t.collection}</span><Link className={styles.back} href={`${localePath(locale)}#projects`}><ArrowLeft size={18} aria-hidden="true" />{t.back}</Link></footer>
    </div>;
}

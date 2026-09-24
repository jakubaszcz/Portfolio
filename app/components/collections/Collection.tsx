import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Globe2, Terminal } from "lucide-react";
import localFont from "next/font/local";
import { localePath, type Locale, type CollectionPage as Kind } from "@/app/i18n/config";
import type { TranslationProps } from "@/app/i18n/dictionaries";
import { LanguageSwitcher } from "@/app/components/header/LanguageSwitcher";
import { Card } from "@/app/components/projects/card/Card";
import styles from "./Collection.module.css";
import { descriptionParagraphs } from "@/app/lib/descriptions";
import { collections } from "./registry";

type Props = TranslationProps & { locale: Locale; kind: Kind };
const minecraftFont = localFont({ src: "../../../public/fonts/Minecraft-Tenv2.woff2", variable: "--font-minecraft", display: "swap", preload: false });

function themeClass(kind: Kind) {
    return `${styles.theme} ${styles[kind]} ${kind === "minecraft" ? minecraftFont.variable : ""}`;
}

function CollectionArtwork({ kind }: { kind: Kind }) {
    const { Icon, artworkTitle, artworkCaption } = collections[kind];
    return <div className={styles.artwork} aria-hidden="true">
        {kind === "software" ? <div className={styles.window}>
            <div className={styles.windowBar}><i /><i /><i /><span>workspace</span></div>
            <div className={styles.terminal}><Terminal size={34} /><span>build. run. simplify.</span><div className={styles.lines}><i /><i /><i /></div></div>
        </div> : kind === "websites" ? <div className={styles.webArtwork}>
            <span className={styles.orbit}><Globe2 strokeWidth={1} /></span>
            <span className={styles.editorial}>www<span>.</span></span>
            <span className={styles.caption}>DESIGN / DEVELOP / PUBLISH</span>
        </div> : <div className={styles.symbolArtwork}><Icon strokeWidth={1.2} />{artworkTitle && <span className={styles.artworkTitle}>{artworkTitle}</span>}<span className={styles.caption}>{artworkCaption}</span></div>}
    </div>;
}

export function CollectionProjectCard({ kind, dictionary, locale }: Props) {
    const t = dictionary[kind];
    return <article className={`${themeClass(kind)} ${styles.feature}`}>
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
    const collection = collections[kind];
    const projects = collection.items
        .map(project => ({ ...project, descriptions: descriptionParagraphs(project.description, locale) }));
    const { Icon } = collection;
    const library = kind === "minecraft" ? dictionary.minecraft.inventory : dictionary[kind].library;
    const visitWebsite = kind === "minecraft" ? dictionary.minecraft.visitMod : kind === "games" ? dictionary.games.play : dictionary.ui.visitWebsite;
    return <div className={`${themeClass(kind)} ${styles.page}`}>
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
                <div className={styles.sectionTitle}><Icon size={25} aria-hidden="true" /><h2 id="collection-title">{library}</h2><span>{String(projects.length).padStart(2, "0")}</span></div>
                <div className={styles.grid}>{projects.map(project => <Card key={project.id} project={project} labels={{ ...dictionary.ui, visitWebsite }} />)}</div>
            </section>
        </main>
        <footer className={styles.footer}><span>{kind === "minecraft" ? dictionary.minecraft.disclaimer : `Jakub Szczucinski / ${t.collection}`}</span>{collection.external && <a className={styles.back} href={collection.external.href} target="_blank" rel="noopener noreferrer" aria-label={`${collection.external.label} (${dictionary.ui.newTab})`}>{collection.external.label}<ArrowUpRight size={16} aria-hidden="true" /></a>}<Link className={styles.back} href={`${localePath(locale)}#projects`}><ArrowLeft size={18} aria-hidden="true" />{t.back}</Link></footer>
    </div>;
}

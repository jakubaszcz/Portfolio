import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Blocks, Code2 } from "lucide-react";
import mods from "@/app/data/projects/minecraft.json";
import { localePath, type Locale } from "@/app/i18n/config";
import type { TranslationProps } from "@/app/i18n/dictionaries";
import { LanguageSwitcher } from "@/app/components/header/LanguageSwitcher";
import styles from "./Minecraft.module.css";
import { descriptionParagraphs } from "@/app/lib/descriptions";

type Props = TranslationProps & { locale: Locale };
const minecraftFont = localFont({
    src: "../../../public/fonts/Minecraft-Tenv2.woff2",
    variable: "--font-minecraft",
    display: "swap",
    weight: "400",
});

function ModTitle({ mod }: { mod: typeof mods[number] }) {
    return <Image src={mod.image} alt={mod.name} width={mod.imageWidth} height={mod.imageHeight} sizes="(max-width: 767px) 85vw, 460px" className={styles.modTitle} />;
}

export function MinecraftProjectCard({ dictionary, locale }: Props) {
    const t = dictionary.minecraft;
    return (
        <article className={`${minecraftFont.variable} ${styles.feature} flex flex-col overflow-hidden`}>
            <div className={styles.preview}>
                <Blocks size={40} className={styles.previewIcon} aria-hidden="true" />
                <span className={styles.previewTitle}>Minecraft</span>
                <span className={styles.edition}>Java Edition</span>
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-8">
                <p className={styles.eyebrow}>{t.collection}</p>
                <h3 className={`${styles.heading} mt-3 text-3xl`}>{t.title}</h3>
                <p className="mt-5 text-sm leading-7 text-stone-300">{t.intro}</p>
                <div className="mt-auto pt-8"><Link className={styles.button} href={localePath(locale, "minecraft")}>{t.explore}<ArrowRight size={18} aria-hidden="true" /></Link></div>
            </div>
        </article>
    );
}

function ModCard({ mod, dictionary, locale }: Props & { mod: typeof mods[number] }) {
    const t = dictionary.minecraft;
    return (
        <article className={styles.modCard}>
            <header className={styles.modHeader}>
                <div className={styles.modMeta}><span className={styles.eyebrow}>Minecraft / Java Edition</span></div>
                <h3 className={styles.modHeading}><ModTitle mod={mod} /></h3>
            </header>
            <div className={styles.modBody}>
                <div className={`${styles.description} space-y-4 text-sm leading-7`}>
                    {descriptionParagraphs(mod.description, locale).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                </div>
                <div className={styles.modActions}>
                    {[
                        { href: mod.url, label: t.visitMod, Icon: ArrowUpRight },
                        { href: mod.code, label: dictionary.ui.sourceCode, Icon: Code2 },
                    ].map(({ href, label, Icon }) => href ? <a key={label} className={styles.button} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${mod.name} — ${label} (${dictionary.ui.newTab})`}>{label}<Icon size={17} aria-hidden="true" /></a> : <span key={label} className={styles.pending}>{label} · {dictionary.ui.soon}</span>)}
                </div>
            </div>
        </article>
    );
}

export function MinecraftPage({ dictionary, locale }: Props) {
    const t = dictionary.minecraft;
    return (
        <div className={`${minecraftFont.variable} ${styles.world}`}>
            <header className={`${styles.header} relative z-10 mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-6 sm:px-10`}>
                <Link href={`${localePath(locale)}#projects`} className={styles.back}><ArrowLeft size={18} aria-hidden="true" />{t.back}</Link>
                <LanguageSwitcher locale={locale} label={dictionary.ui.language} messages={dictionary.languageDialog} page="minecraft" />
            </header>
            <main>
                <section className={styles.hero}>
                    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-10 sm:py-20">
                        <p className={styles.eyebrow}>Jakub Szczucinski / {t.collection}</p>
                        <h1 className={styles.title}>{t.title}<span>Minecraft.</span></h1>
                        <p className={`${styles.description} mt-7 max-w-xl text-base leading-8`}>{t.intro}</p>
                        <a href="#mods" className={`${styles.button} mt-8`}><Blocks size={18} aria-hidden="true" />{t.inventory}<span className={styles.count}>{mods.length}</span></a>
                    </div>
                </section>
                <section id="mods" className="relative mx-auto max-w-6xl scroll-mt-8 px-5 py-16 sm:px-10 sm:py-20" aria-labelledby="mods-title">
                    <div className="mb-9 flex items-center gap-4"><Blocks className={styles.accent} aria-hidden="true" /><h2 id="mods-title" className={`${styles.heading} text-2xl sm:text-3xl`}>{t.inventory}</h2><span className={styles.count}>{mods.length}</span></div>
                    <div className="grid gap-7 md:grid-cols-2">{mods.map(mod => <ModCard key={mod.id} mod={mod} locale={locale} dictionary={dictionary} />)}</div>
                </section>
            </main>
            <footer className={`${styles.footer} mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 border-t px-5 py-8 text-xs sm:px-10`}><p>{t.disclaimer}</p><Link className={styles.back} href={`${localePath(locale)}#projects`}><ArrowLeft size={16} aria-hidden="true" />{t.back}</Link></footer>
        </div>
    );
}

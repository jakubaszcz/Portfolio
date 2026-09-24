import type { Dictionary } from "@/app/i18n/dictionaries";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";
import { pathFonts } from "../fonts";
import styles from "./Card.module.css";

type PathEntry = {
    title: string;
    type: string;
    section: string;
    year: string;
    description: string;
    icon?: string;
    url?: string;
    skills?: string[];
    fonts?: { body?: string; heading?: string };
    colors?: {
        primary?: string;
        background?: string;
        border?: string;
        title?: string;
        text?: string;
        accent?: string;
    };
    fields?: { label: string; value: string }[];
};

export function Card({ entry, labels: t }: { entry: PathEntry; labels: Dictionary["ui"] }) {
    return (
        <article
            className={styles.card}
            style={{
                "--path-brand": entry.colors?.primary ?? "#2f8b71",
                "--path-background": entry.colors?.background ?? "#d6eee5",
                "--path-border": entry.colors?.border ?? "#adddce",
                "--path-title": entry.colors?.title ?? "#0b2c24",
                "--path-text": entry.colors?.text ?? "#15463a",
                "--path-accent": entry.colors?.accent ?? "#236f5a",
                "--path-font": pathFonts[entry.fonts?.body ?? "inter"] ?? pathFonts.inter,
                "--path-heading-font": pathFonts[entry.fonts?.heading ?? "inter"] ?? pathFonts.inter,
            } as CSSProperties}
        >
            <div className={styles.meta}>
                <span className="inline-flex items-center gap-2.5">
                    <span className={styles.dot} aria-hidden="true" />
                    <span className="text-[10px] font-medium uppercase tracking-[0.14em]">{entry.section} · {entry.type}</span>
                </span>
                <span className="tabular-nums">{entry.year}</span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-5">
                {entry.icon && (
                    <span className={styles.logo}>
                        <Image src={entry.icon} alt={`${t.logo} ${entry.title}`} width={120} height={48} unoptimized className="h-9 w-auto max-w-24 object-contain" />
                    </span>
                )}
                <h3 className={styles.title}>{entry.title}</h3>
            </div>
            <p className="mt-5 max-w-prose text-sm leading-7">{entry.description}</p>
            {!!entry.fields?.length && (
                <dl className="mt-4 space-y-2 text-sm">
                    {entry.fields.map((field, index) => (
                        <div key={`${field.label}-${index}`} className="flex flex-wrap gap-x-2 gap-y-1">
                            <dt className={styles.fieldLabel}>{field.label} :</dt>
                            <dd className="min-w-0 break-words">{field.value}</dd>
                        </div>
                    ))}
                </dl>
            )}
            {!!entry.skills?.length && (
                <div className="mt-7">
                    <h4 className={styles.skillsHeading}>{t.skillsDeveloped}</h4>
                    <ul className="flex flex-wrap gap-2">
                        {entry.skills.map((skill, index) => (
                            <li key={`${skill}-${index}`} className={styles.skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
            )}
            {entry.url && (
                <div className="mt-auto pt-7">
                    <a
                        href={entry.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${entry.title} — ${t.visitWebsite} (${t.newTab})`}
                        className={styles.link}
                    >
                        {t.visitWebsite}
                        <span className={styles.arrow}>
                            <ArrowUpRight size={16} aria-hidden="true"/>
                        </span>
                    </a>
                </div>
            )}
        </article>
    );
}

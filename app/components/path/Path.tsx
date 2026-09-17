import path from "@/app/data/path/path.json";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties } from "react";

type PathEntry = {
    title: string;
    type: string;
    section: string;
    year: string;
    description: string;
    icon?: string;
    url?: string;
    skills?: string[];
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

const entries: PathEntry[] = path;

export function Path() {
    return (
        <section id="path" className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-16">
            <div className="mb-8 flex items-center gap-6 sm:mb-10">
                <h2 className="shrink-0 font-primary text-3xl text-primary-100">My path</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
                {entries.map((entry) => (
                    <article
                        key={`${entry.title}-${entry.year}`}
                        className="path-card flex min-w-0 flex-col rounded-md border p-6 sm:p-8"
                        style={{
                            "--brand-color": entry.colors?.primary ?? "var(--color-primary-500)",
                        } as CSSProperties}
                    >
                        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b border-primary-900/10 pb-4 text-xs text-[#626e65]">
                            <span className="inline-flex items-center gap-2.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-color)]" aria-hidden="true" />
                                <span className="text-[10px] font-medium uppercase tracking-[0.14em]">{entry.section} · {entry.type}</span>
                            </span>
                            <span className="tabular-nums">{entry.year}</span>
                        </div>
                        <div className="mt-6 flex flex-wrap items-center gap-5">
                            {entry.icon && (
                                <span className="inline-flex min-h-14 min-w-14 items-center justify-center rounded-sm px-3 py-2" style={{ backgroundColor: entry.colors?.background }}>
                                    <Image src={entry.icon} alt={`Logo ${entry.title}`} width={120} height={48} unoptimized className="h-9 w-auto max-w-24 object-contain" />
                                </span>
                            )}
                            <h3 className="min-w-0 break-words font-primary text-2xl leading-snug text-primary-900 sm:text-3xl">{entry.title}</h3>
                        </div>
                        <p className="mt-5 max-w-prose text-sm leading-7">{entry.description}</p>
                        {!!entry.fields?.length && (
                            <dl className="mt-4 space-y-2 text-sm">
                                {entry.fields.map((field, index) => (
                                    <div key={`${field.label}-${index}`} className="flex flex-wrap gap-x-2 gap-y-1">
                                        <dt className="font-medium text-primary-900">{field.label} :</dt>
                                        <dd className="min-w-0 break-words">{field.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        )}
                        {!!entry.skills?.length && (
                            <div className="mt-7">
                                <h4 className="mb-3 text-[10px] font-medium uppercase tracking-[0.14em] text-[#626e65]">Skills developed</h4>
                                <ul className="flex flex-wrap gap-2">
                                    {entry.skills.map((skill, index) => (
                                        <li key={`${skill}-${index}`} className="path-skill max-w-full break-words rounded-sm border px-2.5 py-1 text-xs leading-5">{skill}</li>
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
                                    aria-label={`Visit ${entry.title} website (opens in a new tab)`}
                                    className="path-link flex min-h-12 w-full items-center justify-between gap-4 border-t border-primary-900/10 pt-4 text-sm font-medium text-primary-900"
                                >
                                    Visit website
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary-900/15">
                                        <ArrowUpRight size={16} aria-hidden="true"/>
                                    </span>
                                </a>
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}

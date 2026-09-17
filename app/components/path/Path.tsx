import path from "@/app/data/path/path.json";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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
            <h2 className="mb-6 font-primary text-3xl text-primary-100">My path</h2>
            <div className="grid gap-5 sm:grid-cols-2">
                {entries.map((entry) => (
                    <article
                        key={`${entry.title}-${entry.year}`}
                        className="shadow-2xl shadow-primary-500 flex flex-col rounded-xl border border-primary-200/20 bg-primary-950/20 p-6 text-primary-200 sm:p-7"
                        style={{
                            background: entry.colors?.background
                                ? `linear-gradient(135deg, ${entry.colors.background}, color-mix(in srgb, ${entry.colors.background} 88%, var(--color-primary-950)))`
                                : undefined,
                            borderColor: entry.colors?.border,
                            color: entry.colors?.text,
                        }}
                    >
                        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-primary-300" style={{ color: entry.colors?.accent }}>
                            <span className="capitalize">{entry.section} · {entry.type}</span>
                            <span>{entry.year}</span>
                        </div>
                        <div className="mt-4 flex flex-wrap items-center gap-4">
                            {entry.icon && (
                                <Image src={entry.icon} alt={`Logo ${entry.title}`} width={120} height={48} unoptimized className="h-12 w-auto max-w-30 object-contain" />
                            )}
                            <h3 className="font-primary text-2xl text-primary-100" style={{ color: entry.colors?.title }}>{entry.title}</h3>
                        </div>
                        <p className="mt-3 text-sm leading-7">{entry.description}</p>
                        {!!entry.fields?.length && (
                            <dl className="mt-4 space-y-2 text-sm">
                                {entry.fields.map((field, index) => (
                                    <div key={`${field.label}-${index}`} className="flex flex-wrap gap-x-2 gap-y-1">
                                        <dt className="font-medium text-primary-300" style={{ color: entry.colors?.accent }}>{field.label} :</dt>
                                        <dd className="min-w-0 break-words">{field.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        )}
                        {!!entry.skills?.length && (
                            <div className="mt-5">
                                <h4 className="mb-2 text-xs font-medium">Skills developed</h4>
                                <ul className="flex flex-wrap gap-2">
                                    {entry.skills.map((skill, index) => (
                                        <li key={`${skill}-${index}`} className="max-w-full break-words rounded-full border border-current/20 bg-current/5 px-3 py-1 text-xs">{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {entry.url && (
                            <a
                                href={entry.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit ${entry.title} website (opens in a new tab)`}
                                className="mt-auto inline-flex w-fit items-center gap-2 rounded-sm pt-5 text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-current"
                                style={{ color: entry.colors?.accent }}
                            >
                                Visit website
                                <ArrowUpRight size={16} aria-hidden="true" />
                            </a>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}

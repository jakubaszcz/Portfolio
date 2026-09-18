import type { TranslationProps } from "@/app/i18n/dictionaries";
import path from "@/app/data/path/path.json";
import { Card } from "./card/Card";

export function Path({ dictionary } : TranslationProps) {
    const t = dictionary.ui;
    return (
        <section id="path" className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-10 sm:py-16">
            <div className="mb-8 flex items-center gap-6 sm:mb-10">
                <h2 className="shrink-0 font-primary text-3xl text-primary-100">{t.path}</h2>
            </div>

            <div className="mb-8 max-w-2xl sm:mb-10">
                <p className="font-primary text-xl leading-snug text-primary-100 sm:text-2xl">{t.pathTitle}</p>
                <p className="mt-3 text-sm leading-7 text-primary-200 sm:text-base">{t.pathDescription}</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
                {path.map((entry) => (
                    <Card
                        key={entry.id}
                        entry={{
                            ...entry,
                            ...dictionary.pathEntries[entry.id as keyof typeof dictionary.pathEntries],
                            type: dictionary.pathTypes[entry.type as keyof typeof dictionary.pathTypes],
                            section: dictionary.pathSections[entry.section as keyof typeof dictionary.pathSections],
                            skills: entry.skills.map((skill) => skill === "Web Development" ? t.webDevelopment : skill),
                        }}
                        labels={t}
                    />
                ))}
            </div>
        </section>
    );
}

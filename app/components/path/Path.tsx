import type { TranslationProps } from "@/app/i18n/dictionaries";
import path from "@/app/data/path/path.json";
import { Card } from "./card/Card";
import { pathFontStylesheet } from "./fonts";
import { SectionHeading } from "@/app/components/home/SectionHeading";

export function Path({ dictionary } : TranslationProps) {
    const t = dictionary.ui;
    return (
        <section id="path" aria-labelledby="path-title" className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-10 sm:py-16">
            <link rel="stylesheet" href={pathFontStylesheet} precedence="path-fonts" />
            <SectionHeading id="path-title" number="01" label={t.path} title={t.pathTitle} description={t.pathDescription} />
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

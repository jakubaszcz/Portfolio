import type { TranslationProps } from "@/app/i18n/dictionaries";
import { CollectionProjectCard } from "@/app/components/collections/Collection";
import { collectionOrder } from "@/app/components/collections/registry";
import type { Locale } from "@/app/i18n/config";
import { SectionHeading } from "@/app/components/home/SectionHeading";

export function Projects({ dictionary, locale } : TranslationProps & { locale: Locale }) {
    const t = dictionary.ui;
    return (
        <section id="projects" aria-labelledby="projects-title" className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-10 sm:py-16">
            <SectionHeading id="projects-title" number="02" label={t.projects} title={t.projectsTitle} description={t.projectsDescription} />
            <div className="grid gap-6 lg:grid-cols-2">
                {collectionOrder.map(kind => <CollectionProjectCard key={kind} kind={kind} dictionary={dictionary} locale={locale} />)}
            </div>
        </section>
    )
}

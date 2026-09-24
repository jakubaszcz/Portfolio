import type { TranslationProps } from "@/app/i18n/dictionaries";
import { CollectionProjectCard } from "@/app/components/collections/Collection";
import { MinecraftProjectCard } from "@/app/components/minecraft/Minecraft";
import { GamesProjectCard } from "@/app/components/games/Games";
import type { Locale } from "@/app/i18n/config";

export function Projects({ dictionary, locale } : TranslationProps & { locale: Locale }) {
    const t = dictionary.ui;
    return (
        <section id="projects" className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-10 sm:py-16">
            <h2 className="mb-8 font-primary text-3xl text-primary-100 sm:mb-10">{t.projects}</h2>
            <div className="mb-8 max-w-2xl sm:mb-10">
                <p className="font-primary text-xl leading-snug text-primary-100 sm:text-2xl">{t.projectsTitle}</p>
                <p className="mt-3 text-sm leading-7 text-primary-200 sm:text-base">{t.projectsDescription}</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
                <CollectionProjectCard kind="software" dictionary={dictionary} locale={locale} />
                <CollectionProjectCard kind="websites" dictionary={dictionary} locale={locale} />
                <MinecraftProjectCard dictionary={dictionary} locale={locale} />
                <GamesProjectCard dictionary={dictionary} locale={locale} />
            </div>
        </section>
    )
}

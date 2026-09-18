import type { TranslationProps } from "@/app/i18n/dictionaries";
import skills from "@/app/data/skills/skills.json";

export function Skills({ dictionary } : TranslationProps) {
    const t = dictionary.ui;
    return (
        <section id="skills" aria-labelledby="skills-title" className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-10 sm:py-16">
            <h2 id="skills-title" className="mb-8 font-primary text-3xl text-primary-100 sm:mb-10">{t.skills}</h2>
            <div className="mb-8 max-w-2xl sm:mb-10">
                <p className="font-primary text-xl leading-snug text-primary-100 sm:text-2xl">{t.skillsTitle}</p>
                <p className="mt-3 text-sm leading-7 text-primary-200 sm:text-base">{t.skillsDescription}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {skills.map((category, index) => (
                    <article key={category.id} className="min-w-0 rounded-md border border-primary-700 bg-primary-900 p-6 transition-colors sm:p-8">
                        <div className="mb-6 flex items-start justify-between gap-4 border-b border-primary-200 pb-5">
                            <h3 className="font-primary text-2xl leading-snug text-primary-100">{dictionary.skillCategories[category.id as keyof typeof dictionary.skillCategories]}</h3>
                            <span aria-hidden="true" className="pt-1 text-xs tabular-nums text-primary-300">{String(index + 1).padStart(2, "0")}</span>
                        </div>
                        <ul className="flex flex-wrap gap-2.5">
                            {category.skills.map((skill) => (
                                <li key={skill} className="max-w-full break-words rounded-sm border border-primary-700 px-3 py-2 text-sm leading-5 text-primary-200 transition-colors">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}

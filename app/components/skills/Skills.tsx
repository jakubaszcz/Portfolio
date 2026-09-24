import type { TranslationProps } from "@/app/i18n/dictionaries";
import skills from "@/app/data/skills/skills.json";
import { Code2, Layers3, Wrench } from "lucide-react";
import styles from "./Skills.module.css";

const themes = {
    languages: { className: styles.languages, Icon: Code2 },
    frameworks: { className: styles.frameworks, Icon: Layers3 },
    tools: { className: styles.tools, Icon: Wrench },
};

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
                {skills.map((category) => {
                    const theme = themes[category.id as keyof typeof themes] ?? themes.languages;
                    const Icon = theme.Icon;
                    return <article key={category.id} className={`${styles.card} ${theme.className}`}>
                        <div className={styles.topline}><span className={styles.icon}><Icon size={24} aria-hidden="true" /></span><span className={styles.count} aria-hidden="true">{String(category.skills.length).padStart(2, "0")}</span></div>
                        <div className={styles.heading}>
                            <h3>{dictionary.skillCategories[category.id as keyof typeof dictionary.skillCategories]}</h3>
                        </div>
                        <ul className="flex flex-wrap gap-2.5">
                            {category.skills.map((skill) => (
                                <li key={skill} className={styles.skill}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </article>;
                })}
            </div>
        </section>
    );
}

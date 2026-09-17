import skills from "@/app/data/skills/skills.json";

export function Skills() {
    return (
        <section id="skills" aria-labelledby="skills-title" className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-16">
            <h2 id="skills-title" className="mb-8 font-primary text-3xl text-primary-100 sm:mb-10">Skills</h2>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {skills.map((category, index) => (
                    <article key={category.title} className="min-w-0 rounded-md border border-primary-700 bg-primary-900 p-6 transition-colors sm:p-8">
                        <div className="mb-6 flex items-start justify-between gap-4 border-b border-primary-200 pb-5">
                            <h3 className="font-primary text-2xl leading-snug text-primary-100">{category.title}</h3>
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

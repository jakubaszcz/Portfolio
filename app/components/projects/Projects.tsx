import projects from "@/app/data/projects/projects.json";

export function Projects() {
    return (
        <section id="projects" className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-10 sm:py-16">
            <h2 className="mb-6 font-primary text-3xl text-primary-100">Projects</h2>
            <div className="grid gap-5 sm:grid-cols-2">
                {projects.map((project) => (
                    <article key={project.code} className="flex flex-col rounded-xl border border-primary-200/20 bg-primary-950/20 p-6 sm:p-7">
                        <h3 className="font-primary text-2xl text-primary-100">{project.name}</h3>
                        <p className="mt-3 text-sm leading-7 text-primary-200">{project.description}</p>
                        <div className="mt-auto flex flex-wrap gap-6 pt-6 text-sm text-primary-300">
                            <a href={/^https?:\/\//.test(project.url) ? project.url : `https://${project.url}`} className="underline decoration-primary-300/40 underline-offset-4 transition-colors hover:text-primary-100">Website</a>
                            <a href={project.code} className="underline decoration-primary-300/40 underline-offset-4 transition-colors hover:text-primary-100">Source code</a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

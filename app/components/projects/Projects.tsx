import projects from "@/app/data/projects/projects.json";
import {Card} from "@/app/components/projects/card/Card";

export function Projects() {
    return (
        <section id="projects" className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-10 sm:py-16">
            <h2 className="mb-8 font-primary text-3xl text-primary-100 sm:mb-10">Projects</h2>
            <div className="mb-8 max-w-2xl sm:mb-10">
                <p className="font-primary text-xl leading-snug text-primary-100 sm:text-2xl">Turning curiosity into something real.</p>
                <p className="mt-3 text-sm leading-7 text-primary-200 sm:text-base">From tools for everyday use to games with their own atmosphere, these projects are where I explore ideas, experiment with technology, and learn by building.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
                {projects.map((project) => (
                    <Card key={project.name} project={project} />
                ))}
            </div>
        </section>
    )
}

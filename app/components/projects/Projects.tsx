import projects from "@/app/data/projects/projects.json";
import {Card} from "@/app/components/projects/card/Card";

export function Projects() {
    return (
        <section id="projects" className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-16">
            <h2 className="mb-8 font-primary text-3xl text-primary-100 sm:mb-10">Projects</h2>
            <div className="grid gap-6 lg:grid-cols-2">
                {projects.map((project) => (
                    <Card key={project.code ?? project.name} project={project} />
                ))}
            </div>
        </section>
    )
}

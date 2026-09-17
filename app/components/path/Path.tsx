import path from "@/app/data/path/path.json";
import { Card } from "./card/Card";

export function Path() {
    return (
        <section id="path" className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-10 sm:py-16">
            <div className="mb-8 flex items-center gap-6 sm:mb-10">
                <h2 className="shrink-0 font-primary text-3xl text-primary-100">My path</h2>
            </div>

            <div className="mb-8 max-w-2xl sm:mb-10">
                <p className="font-primary text-xl leading-snug text-primary-100 sm:text-2xl">Learning through experience.</p>
                <p className="mt-3 text-sm leading-7 text-primary-200 sm:text-base">From studying computer science to building projects with others, each step gives me a new way to think about development. This is the experience behind the work.</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
                {path.map((entry) => (
                    <Card key={`${entry.title}-${entry.year}`} entry={entry} />
                ))}
            </div>
        </section>
    );
}

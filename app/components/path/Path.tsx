import path from "@/app/data/path/path.json";
import { Card } from "./card/Card";

export function Path() {
    return (
        <section id="path" className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-16">
            <div className="mb-8 flex items-center gap-6 sm:mb-10">
                <h2 className="shrink-0 font-primary text-3xl text-primary-100">My path</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
                {path.map((entry) => (
                    <Card key={`${entry.title}-${entry.year}`} entry={entry} />
                ))}
            </div>
        </section>
    );
}

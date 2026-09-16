import path from "@/app/data/path/path.json";

export function Path() {
    return (
        <section id="path" className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-10 sm:py-16">
            <h2 className="mb-6 font-primary text-3xl text-primary-100">My path</h2>
            <div className="grid gap-5 sm:grid-cols-2">
                {path.map((entry) => (
                    <article key={`${entry.title}-${entry.year}`} className="rounded-xl border border-primary-200/20 bg-primary-950/20 p-6 sm:p-7">
                        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-primary-300">
                            <span className="capitalize">{entry.section} · {entry.type}</span>
                            <span>{entry.year}</span>
                        </div>
                        <h3 className="mt-4 font-primary text-2xl text-primary-100">{entry.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-primary-200">{entry.description}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

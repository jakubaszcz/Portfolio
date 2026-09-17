export function History() {
    return (
        <section id="history" aria-labelledby="history-title" className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
                <div>
                    <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-primary-300">Behind the code</p>
                    <h2 id="history-title" className="max-w-sm font-primary text-3xl leading-snug text-primary-100 sm:text-4xl">
                        It starts with curiosity.
                    </h2>
                </div>
                <div className="max-w-2xl space-y-5 border-l border-primary-200/20 pl-6 text-sm leading-8 text-primary-200 sm:pl-8 sm:text-base">
                    <p>
                        I have always been curious about how things work. How was a game built?
                        What ideas shaped it? Why was a piece of software designed one way rather than another?
                    </p>
                    <p>
                        Those questions are what draw me to development. I enjoy looking beyond
                        what is on the screen to understand the decisions and the code behind it.
                    </p>
                    <p className="text-primary-100">
                        What I love most is that learning never really ends: the more I understand,
                        the more I discover there is still to explore.
                    </p>
                </div>
            </div>
        </section>
    );
}

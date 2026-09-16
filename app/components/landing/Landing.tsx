export function Landing() {
    return (
        <section className="min-h-dvh w-full">
            <div className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
                <h1 className="font-primary text-[clamp(1.7rem,7.8vw,6rem)] leading-[1.15] tracking-tight">
                    <span className="block text-primary-100">Jakub</span>
                    <span className="mt-2 block text-primary-200">SZCZUCINSKI</span>
                </h1>
                <p className="mt-7 max-w-lg font-sans text-sm leading-7 text-primary-200 sm:text-base">Software Engineer, Web Designer, Game Developer</p>
                <a href="#path" className="mt-9 inline-flex items-center justify-center rounded-full border border-primary-300/60 px-8 py-3.5 text-sm text-primary-200 transition-colors hover:border-primary-200 hover:bg-primary-100/10 hover:text-primary-100">
                    Learn about me
                </a>
            </div>
        </section>
    )
}

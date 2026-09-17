import { ArrowDown } from "lucide-react";

export function Landing() {
    return (
        <section id="home" className="hero-landing relative isolate min-h-dvh w-full overflow-hidden">
            <div className="relative mx-auto flex min-h-dvh w-full max-w-6xl flex-col items-center justify-center px-6 pb-24 pt-36 text-center">
                <p className="hero-intro mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-primary-300 sm:text-xs">
                    <span className="h-px w-8 bg-primary-600" aria-hidden="true" />
                    Personal portfolio
                    <span className="h-px w-8 bg-primary-600" aria-hidden="true" />
                </p>
                <h1 className="hero-intro font-primary text-[clamp(1.7rem,7.8vw,6rem)] leading-[1.15] tracking-tight">
                    <span className="block text-primary-100">Jakub</span>
                    <span className="mt-2 block text-primary-200">SZCZUCINSKI</span>
                </h1>
                <div className="hero-intro mt-10 flex w-full max-w-xs flex-col justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:flex-wrap">
                    <a href="#history" className="hero-action secondary-button">Learn about me <ArrowDown size={17} aria-hidden="true" /></a>
                    <a href="#projects" className="hero-action primary-button">Explore projects <ArrowDown size={17} aria-hidden="true" /></a>
                </div>
            </div>
        </section>
    )
}

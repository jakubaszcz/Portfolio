export function Header() {
    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="mx-auto flex max-w-8xl flex-wrap items-center justify-between gap-x-5 gap-y-3 px-6 py-4 sm:px-10">
                <a href="#home" aria-label="Jakub Szczucinski — Home" className="font-primary text-sm text-primary-100 sm:text-base">
                    Jakub<span className="hidden lg:inline"> SZCZUCINSKI</span><span className="text-primary-400">.</span>
                </a>
                <nav aria-label="Main navigation" className="flex items-center gap-4 text-xs text-primary-200 sm:gap-7 sm:text-sm">
                    <a href="#path" className="header-link">My path</a>
                    <a href="#projects" className="header-link">Projects</a>
                    <a href="#contact" className="rounded-sm border border-primary-700 px-3 py-2 text-primary-100 transition-colors hover:border-primary-300 hover:bg-primary-800 sm:px-5">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    )
}

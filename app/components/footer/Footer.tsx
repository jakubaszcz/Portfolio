import { ArrowUp } from "lucide-react";
import contact from "@/app/data/contact/contact.json";

export function Footer() {
    return (
        <footer className="mt-8 bg-primary-950">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <a href="#home" className="font-primary text-lg text-primary-100">Jakub Szczucinski<span className="text-primary-400">.</span></a>
                    <p className="mt-2 text-xs text-primary-300">© {new Date().getFullYear()} Jakub Szczucinski. All rights reserved.</p>
                </div>
                <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-primary-200">
                    {contact.socials.filter((social) => social.url).map((social) => (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`${social.name} (opens in a new tab)`} className="py-2 transition-colors hover:text-primary-50">{social.name}</a>
                    ))}
                    <a href="#home" className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-primary-700 px-4 transition-colors hover:border-primary-400 hover:bg-primary-900">Back to top <ArrowUp size={16} aria-hidden="true" /></a>
                </nav>
            </div>
        </footer>
    );
}

import contact from "@/app/data/contact/contact.json";
import { ArrowUpRight, Download, Mail, FileText } from "lucide-react";

const linkStyle = "flex min-h-14 items-center justify-between gap-4 rounded-sm border border-primary-700 bg-primary-900 px-5 py-4 text-primary-100 transition-colors hover:border-primary-400 hover:bg-primary-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-200";

export function Contact() {
    return (
        <section id="contact" aria-labelledby="contact-title" className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-16">
            <h2 id="contact-title" className="mb-8 font-primary text-3xl text-primary-100 sm:mb-10">Contact</h2>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div>
                    <p className="font-primary text-2xl text-primary-100">Let’s get in touch.</p>
                    <p className="mt-4 max-w-md text-sm leading-7 text-primary-200">Have a project in mind, an opportunity to share, or simply want to say hello?</p>
                    <div className="mt-7">
                        <h3 className="mb-3 text-xs uppercase tracking-widest text-primary-300">Professional email</h3>
                        {contact.email ? (
                            <a href={`mailto:${contact.email}`} className={linkStyle}>
                                <span className="flex min-w-0 items-center gap-3"><Mail size={18} className="shrink-0" aria-hidden="true" /><span className="break-all">{contact.email}</span></span>
                                <ArrowUpRight size={18} className="shrink-0" aria-hidden="true" />
                            </a>
                        ) : (
                            <div className="flex items-center gap-3 rounded-sm border border-primary-700 bg-primary-900 px-5 py-4 text-sm text-primary-300"><Mail size={18} aria-hidden="true" />Email coming soon</div>
                        )}
                    </div>
                    <div className="mt-7 rounded-md border border-primary-700 bg-primary-900 p-6">
                        <div className="flex items-center gap-3"><FileText size={20} className="text-primary-300" aria-hidden="true" /><h3 className="font-primary text-xl text-primary-100">My résumé</h3></div>
                        <p className="mt-3 text-sm leading-7 text-primary-200">A closer look at my background, experience, and skills.</p>
                        {contact.cv ? (
                            <a href={contact.cv} download className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-sm bg-primary-100 px-4 py-2 text-sm font-medium text-primary-900 transition-colors hover:bg-primary-50">Download résumé<Download size={16} aria-hidden="true" /></a>
                        ) : (
                            <button type="button" disabled className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-sm border border-primary-700 px-4 py-2 text-sm text-primary-300">CV coming soon <Download size={16} aria-hidden="true" /></button>
                        )}
                    </div>
                </div>
                <div>
                    <h3 className="mb-4 text-xs uppercase tracking-widest text-primary-300">Find me online</h3>
                    <ul className="space-y-3">
                        {contact.socials.map((social) => (
                            <li key={social.name}>
                                {social.url ? (
                                    <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`${social.name} (opens in a new tab)`} className={linkStyle}><span>{social.name}</span><ArrowUpRight size={18} aria-hidden="true" /></a>
                                ) : (
                                    <div className="flex min-h-14 flex-wrap items-center justify-between gap-3 rounded-sm border border-primary-700 bg-primary-900 px-5 py-4"><span className="text-primary-100">{social.name}</span><span className="text-xs text-primary-300">Coming soon</span></div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

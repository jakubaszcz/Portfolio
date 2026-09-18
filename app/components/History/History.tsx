import type { TranslationProps } from "@/app/i18n/dictionaries";
export function History({ dictionary } : TranslationProps) {
    const t = dictionary.ui;
    return (
        <section id="history" aria-labelledby="history-title" className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-10 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
                <div>
                    <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-primary-300">{t.behindCode}</p>
                    <h2 id="history-title" className="max-w-sm font-primary text-3xl leading-snug text-primary-100 sm:text-4xl">
                        {t.historyTitle}
                    </h2>
                </div>
                <div className="max-w-2xl space-y-5 border-l border-primary-700 pl-6 text-sm leading-8 text-primary-200 sm:pl-8 sm:text-base">
                    <p>{dictionary.history[0]}</p>
                    <p>{dictionary.history[1]}</p>
                    <p className="text-primary-100">{dictionary.history[2]}</p>
                </div>
            </div>
        </section>
    );
}

"use client";

import { Check, Languages, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { locales, localeCodes, localePath, type Locale } from "@/app/i18n/config";
import type { Dictionary } from "@/app/i18n/dictionaries";

export function LanguageSwitcher({ locale, label, messages }: {
    locale: Locale;
    label: string;
    messages: Dictionary["languageDialog"];
}) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const currentLanguageRef = useRef<HTMLButtonElement>(null);
    const titleId = useId();
    const descriptionId = useId();
    const dialogId = useId();

    useEffect(() => {
        if (!isOpen) return;
        const dialog = dialogRef.current;
        const previousOverflow = document.body.style.overflow;
        dialog?.showModal();
        currentLanguageRef.current?.focus();
        document.body.style.overflow = "hidden";
        return () => {
            dialog?.close();
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    function chooseLanguage(nextLocale: Locale) {
        setIsOpen(false);
        if (nextLocale !== locale) router.push(`${localePath(nextLocale)}${window.location.hash}`);
    }

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label={`${label} : ${locales[locale].name}`}
                aria-haspopup="dialog"
                aria-expanded={isOpen}
                aria-controls={dialogId}
                className="inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-2 rounded-sm border border-primary-700 px-3 text-xs text-primary-100 transition-colors hover:border-primary-400 hover:bg-primary-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-200 sm:text-sm"
            >
                <Languages size={17} aria-hidden="true" />
                <span lang={locale}>{locales[locale].name}</span>
            </button>
            <dialog
                ref={dialogRef}
                id={dialogId}
                aria-labelledby={titleId}
                aria-describedby={descriptionId}
                onClose={() => setIsOpen(false)}
                onClick={(event) => {
                    if (event.target !== event.currentTarget) return;
                    const bounds = event.currentTarget.getBoundingClientRect();
                    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) setIsOpen(false);
                }}
                className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-md overflow-y-auto overscroll-contain rounded-2xl border border-primary-700 bg-primary-950 p-5 text-primary-100 shadow-2xl backdrop:bg-black/65 backdrop:backdrop-blur-sm sm:p-7"
            >
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary-700 bg-primary-900 text-primary-300"><Languages size={21} aria-hidden="true" /></div>
                        <h2 id={titleId} className="font-primary text-2xl sm:text-3xl">{messages.title}</h2>
                    </div>
                    <button type="button" onClick={() => setIsOpen(false)} aria-label={messages.close} className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-lg text-primary-300 transition-colors hover:bg-primary-800 hover:text-primary-50 focus-visible:outline-2 focus-visible:outline-primary-200"><X size={21} aria-hidden="true" /></button>
                </div>
                <p id={descriptionId} className="mt-3 text-sm leading-6 text-primary-300">{messages.description}</p>
                <ul className="mt-6 space-y-2">
                    {localeCodes.map((code) => {
                        const active = code === locale;
                        return (
                            <li key={code}>
                                <button
                                    ref={active ? currentLanguageRef : undefined}
                                    type="button"
                                    aria-pressed={active}
                                    onClick={() => chooseLanguage(code)}
                                    className={`flex min-h-16 w-full cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-200 ${active ? "border-primary-400 bg-primary-800 text-primary-50" : "border-primary-800 bg-primary-900/50 text-primary-200 hover:border-primary-500 hover:bg-primary-900"}`}
                                >
                                    <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-950 text-[11px] font-semibold uppercase tracking-wider text-primary-300">{code}</span>
                                    <span className="min-w-0 flex-1">
                                        <span lang={code} className="block text-sm font-medium">{locales[code].name}</span>
                                        {active && <span className="mt-0.5 block text-xs text-primary-300">{messages.current}</span>}
                                    </span>
                                    {active && <Check size={18} className="shrink-0 text-primary-300" aria-hidden="true" />}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </dialog>
        </>
    );
}

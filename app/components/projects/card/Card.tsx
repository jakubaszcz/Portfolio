"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useId, useState, useRef, useEffect, type CSSProperties } from "react";

type Project = {
    name: string;
    url?: string;
    descriptions: string[];
    code?: string;
    images?: string[];
    stacks?: string[];
};

export function Card({ project }: { project: Project }) {
    const [activeImage, setActiveImage] = useState(0);
    const galleryId = useId();
    const images = project.images ?? [];
    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const nextImage = (direction: number) => setActiveImage((index) => (index + direction + images.length) % images.length);

    useEffect(() => {
        if (!isOpen) return;
        const dialog = dialogRef.current;
        const previousOverflow = document.body.style.overflow;
        dialog?.showModal();
        document.body.style.overflow = "hidden";
        return () => {
            dialog?.close();
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    function arrows(inModal = false) {
        if (images.length < 2) return null;
        return ([-1, 1] as const).map((direction) => (
            <button
                key={direction}
                type="button"
                aria-label={direction === -1 ? "Previous screenshot" : "Next screenshot"}
                onClick={() => nextImage(direction)}
                className={`project-gallery-arrow absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary-200/30 bg-primary-950/90 text-primary-50 hover:bg-primary-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-200 ${direction === -1 ? "left-3" : "right-3"} ${inModal ? "" : "project-gallery-hover"}`}
            >
                {direction === -1 ? <ChevronLeft size={22} aria-hidden="true" /> : <ChevronRight size={22} aria-hidden="true" />}
            </button>
        ));
    }

    return (
        <article className="path-card flex min-w-0 flex-col overflow-hidden rounded-md border" style={{ "--brand-color": "var(--color-primary-500)" } as CSSProperties}>
            {images.length > 0 && (
                <>
                    <div className="project-gallery relative aspect-video border-b border-primary-900/10 bg-primary-950">
                        <button type="button" onClick={() => setIsOpen(true)} aria-label={`Enlarge ${project.name} screenshot ${activeImage + 1}`} className="absolute inset-0 cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-primary-200">
                            <Image src={images[activeImage]} alt={`${project.name} ? screenshot ${activeImage + 1}`} fill sizes="(min-width: 1280px) 576px, (min-width: 1024px) 50vw, 100vw" className="object-contain" />
                        </button>
                        {arrows()}
                        <span className="pointer-events-none absolute bottom-3 right-3 rounded-sm bg-primary-950/90 px-2 py-1 text-xs text-primary-100" aria-live="polite" aria-atomic="true">{activeImage + 1} / {images.length}</span>
                    </div>
                    <dialog
                        ref={dialogRef}
                        aria-labelledby={galleryId}
                        onClose={() => setIsOpen(false)}
                        onClick={(event) => {
                            if (event.target !== event.currentTarget) return;
                            const bounds = event.currentTarget.getBoundingClientRect();
                            if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) setIsOpen(false);
                        }}
                        onKeyDown={(event) => {
                            if (images.length < 2) return;
                            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                                event.preventDefault();
                                nextImage(event.key === "ArrowLeft" ? -1 : 1);
                            }
                        }}
                        className="fixed inset-0 m-auto max-h-[90dvh] w-[94vw] max-w-7xl overflow-auto rounded-md border border-primary-200/20 bg-primary-950 p-0 text-primary-100 backdrop:bg-primary-950/90"
                    >
                        <div className="flex items-center justify-between gap-4 border-b border-primary-200/15 px-4 py-3">
                            <h3 id={galleryId} className="text-sm">{project.name} <span className="ml-2 text-primary-300" aria-live="polite">{activeImage + 1} / {images.length}</span></h3>
                            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close gallery" className="flex h-11 w-11 items-center justify-center rounded-sm hover:bg-primary-800 focus-visible:outline-2 focus-visible:outline-primary-200"><X size={22} aria-hidden="true" /></button>
                        </div>
                        {isOpen && (
                            <div className="relative h-[70dvh]">
                                <Image src={images[activeImage]} alt={`${project.name} ? screenshot ${activeImage + 1}`} fill sizes="94vw" className="object-contain" />
                                {arrows(true)}
                            </div>
                        )}
                    </dialog>
                </>
            )}
            <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="break-words font-primary text-2xl leading-snug text-primary-900 sm:text-3xl">{project.name}</h3>
                <div className="mt-5 space-y-3 text-sm leading-7">
                    {project.descriptions.map((description, index) => <p key={index}>{description}</p>)}
                </div>
                {!!project.stacks?.length && (
                    <div className="mt-7">
                        <h4 className="mb-3 text-[10px] font-medium uppercase tracking-[0.14em] text-primary-700">Built with</h4>
                        <ul className="flex flex-wrap gap-2">
                            {project.stacks.map((stack) => <li key={stack} className="path-skill max-w-full break-words rounded-sm border px-2.5 py-1 text-xs leading-5">{stack}</li>)}
                        </ul>
                    </div>
                )}
                {(project.url || project.code) && (
                    <div className="mt-auto pt-7">
                        <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-primary-900/10 pt-4">
                            {[
                                { label: "Visit website", url: project.url },
                                { label: "Source code", url: project.code },
                            ].filter((link) => link.url).map((link) => (
                                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} — ${link.label} (opens in a new tab)`} className="path-link inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary-900">
                                    {link.label} <ArrowUpRight size={16} aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}

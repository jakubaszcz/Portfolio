"use client";

import type { Dictionary } from "@/app/i18n/dictionaries";
import { Media } from "./Media";
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
    titleImage?: { src: string; width: number; height: number };
};

export function Card({ project, labels: t }: { project: Project; labels: Dictionary["ui"] }) {
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
                aria-label={direction === -1 ? t.previousMedia : t.nextMedia}
                onClick={() => nextImage(direction)}
                className={`project-gallery-arrow absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-primary-700 bg-primary-950 text-primary-50 hover:bg-primary-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-200 ${direction === -1 ? "left-3" : "right-3"} ${inModal ? "" : "project-gallery-hover"}`}
            >
                {direction === -1 ? <ChevronLeft size={22} aria-hidden="true" className="text-primary-300 " /> : <ChevronRight size={22} aria-hidden="true" className="text-primary-300 duration-300 transition hover:scale-110" />}
            </button>
        ));
    }

    return (
        <article className="path-card flex min-w-0 flex-col overflow-hidden rounded-md border" style={{ "--brand-color": "var(--color-primary-500)" } as CSSProperties}>
            {images.length > 0 && (
                <>
                    <div className="project-gallery relative aspect-video border-b border-primary-200 bg-primary-950">
                        <button type="button" onClick={() => setIsOpen(true)} aria-label={`${t.enlargeMedia} — ${project.name} ${activeImage + 1}`} className="absolute inset-0 cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-primary-200">
                            <Media unsupportedLabel={t.videoUnsupported} src={images[activeImage]} label={`${project.name} — ${t.media} ${activeImage + 1}`} />
                        </button>
                        {arrows()}
                        <span className="pointer-events-none absolute bottom-3 right-3 rounded-sm bg-primary-950 px-2 py-1 text-xs text-primary-300" aria-live="polite" aria-atomic="true">{activeImage + 1} / {images.length}</span>
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
                            if (images.length < 2 || event.target instanceof HTMLVideoElement) return;
                            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                                event.preventDefault();
                                nextImage(event.key === "ArrowLeft" ? -1 : 1);
                            }
                        }}
                        className="fixed inset-0 m-auto max-h-[90dvh] w-[94vw] max-w-7xl overflow-auto border border-primary-800 bg-primary-950 p-0 text-primary-100 backdrop:bg-primary-950"
                    >
                        <div className="flex items-center justify-between gap-4 px-4 py-3">
                            <h3 id={galleryId} className="text-sm">{project.name} <span className="ml-2 text-primary-300" aria-live="polite">{activeImage + 1} / {images.length}</span></h3>
                            <button type="button" onClick={() => setIsOpen(false)} aria-label={t.closeGallery} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm hover:bg-primary-800 focus-visible:outline-2 focus-visible:outline-primary-200"><X size={22} aria-hidden="true" /></button>
                        </div>
                        {isOpen && (
                            <div className="relative h-[60dvh] sm:h-[70dvh]">
                                <Media unsupportedLabel={t.videoUnsupported} src={images[activeImage]} label={`${project.name} — ${t.media} ${activeImage + 1}`} enlarged />
                                {arrows(true)}
                            </div>
                        )}
                    </dialog>
                </>
            )}
            <div className="flex flex-1 flex-col p-5 sm:p-8">
                <h3 className="break-words font-primary text-2xl leading-snug text-primary-900 sm:text-3xl">{project.titleImage ? <Image src={project.titleImage.src} width={project.titleImage.width} height={project.titleImage.height} alt={project.name} sizes="(max-width: 767px) 85vw, 500px" className="h-auto w-full object-contain [image-rendering:pixelated]" /> : project.name}</h3>
                <div className="mt-5 space-y-3 text-sm leading-7">
                    {(project.descriptions ?? []).map((description, index) => <p key={index} className="whitespace-pre-line">{description}</p>)}
                </div>
                {!!project.stacks?.length && (
                    <div className="mt-7">
                        <h4 className="mb-3 text-[10px] font-medium uppercase tracking-[0.14em] text-primary-700">{t.builtWith}</h4>
                        <ul className="flex flex-wrap gap-2">
                            {project.stacks.map((stack) => <li key={stack} className="path-skill max-w-full break-words rounded-sm border px-2.5 py-1 text-xs leading-5">{stack}</li>)}
                        </ul>
                    </div>
                )}
                {(project.url || project.code) && (
                    <div className="mt-auto pt-7">
                        <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-primary-200 pt-4">
                            {[
                                { label: t.visitWebsite, url: project.url },
                                { label: t.sourceCode, url: project.code },
                            ].filter((link) => link.url).map((link) => (
                                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} — ${link.label} (${t.newTab})`} className="path-link inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary-900">
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

"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function HeaderSurface({ children }: { children: ReactNode }) {
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const header = headerRef.current;
        const history = document.getElementById("history");
        if (!header || !history) return;

        let frame = 0;
        const update = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                header.dataset.scrolled = String(history.getBoundingClientRect().top <= header.getBoundingClientRect().bottom);
            });
        };
        const observer = new ResizeObserver(update);
        observer.observe(header);
        observer.observe(history);
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        update();

        return () => {
            cancelAnimationFrame(frame);
            observer.disconnect();
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return <header ref={headerRef} className="site-header fixed inset-x-0 top-0 z-50">{children}</header>;
}

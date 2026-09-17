import Image from "next/image";
import { Play } from "lucide-react";

type MediaProps = {
    src: string;
    label: string;
    enlarged?: boolean;
};

export function Media({ src, label, enlarged = false }: MediaProps) {
    const extension = src.split(/[?#]/)[0].split(".").pop()?.toLowerCase();
    const isVideo = ["mp4", "webm", "ogv", "ogg", "mov", "m4v"].includes(extension ?? "");

    if (isVideo) {
        return (
            <>
                <video
                    key={src}
                    src={src}
                    aria-label={label}
                    controls={enlarged}
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-contain"
                >
                    Your browser does not support this video format.
                </video>
                {!enlarged && (
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary-500 bg-primary-950 text-primary-100"><Play size={24} /></span>
                    </span>
                )}
            </>
        );
    }

    return (
        <Image
            src={src}
            alt={label}
            fill
            unoptimized={extension === "gif" || extension === "svg" || /^https?:\/\//i.test(src)}
            sizes={enlarged ? "94vw" : "(min-width: 1280px) 576px, (min-width: 1024px) 50vw, 100vw"}
            className="object-contain"
        />
    );
}

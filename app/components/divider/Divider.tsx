type DividerProps = {
    className?: string;
};

export function Divider({ className = "" }: DividerProps) {
    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none mx-auto flex w-full max-w-5xl items-center gap-4 px-6 py-6 text-primary-300/60 sm:gap-8 sm:px-10 sm:py-8 ${className}`}
        >
            <span className="h-px flex-1 bg-linear-to-r from-transparent to-current opacity-40" />
            <span
                className="block aspect-[771/166] w-40 shrink-0 bg-current sm:w-64"
                style={{
                    maskImage: "url('/divider/divider.svg')",
                    maskSize: "contain",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                }}
            />
            <span className="h-px flex-1 bg-linear-to-l from-transparent to-current opacity-40" />
        </div>
    );
}

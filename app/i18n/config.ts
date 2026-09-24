export const locales = {
    en: { name: "English", openGraph: "en_US" },
    fr: { name: "Français", openGraph: "fr_FR" },
    de: { name: "Deutsch", openGraph: "de_DE" },
    pl: { name: "Polski", openGraph: "pl_PL" },
} as const;

export type Locale = keyof typeof locales;
export const defaultLocale: Locale = "en";
export const localeCodes = Object.keys(locales) as Locale[];

export function isLocale(value: string): value is Locale {
    return Object.hasOwn(locales, value);
}

export const collectionPages = ["minecraft", "games", "software", "websites"] as const;
export type CollectionPage = typeof collectionPages[number];

export function localePath(locale: Locale, page?: CollectionPage) {
    const prefix = locale === defaultLocale ? "" : `/${locale}`;
    return `${prefix}${page ? `/${page}` : ""}` || "/";
}

export function pageFromSegments(segments?: string[]) {
    const page = collectionPages.find(page => page === segments?.at(-1));
    const locale = localeFromSegments(page ? segments?.slice(0, -1) : segments);
    return { locale, page };
}

export function localeFromSegments(segments?: string[]): Locale | undefined {
    if (!segments?.length) return defaultLocale;
    if (segments.length !== 1 || !isLocale(segments[0]) || segments[0] === defaultLocale) return undefined;
    return segments[0];
}

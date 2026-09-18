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

export function localePath(locale: Locale) {
    return locale === defaultLocale ? "/" : `/${locale}`;
}

export function localeFromSegments(segments?: string[]): Locale | undefined {
    if (!segments?.length) return defaultLocale;
    if (segments.length !== 1 || !isLocale(segments[0]) || segments[0] === defaultLocale) return undefined;
    return segments[0];
}

import type english from "./locales/en.json";
import type { Locale } from "./config";

export type Dictionary = typeof english;
export type TranslationProps = { dictionary: Dictionary };

const dictionaries = {
    en: () => import("./locales/en.json").then((module) => module.default),
    fr: () => import("./locales/fr.json").then((module) => module.default),
    de: () => import("./locales/de.json").then((module) => module.default),
    pl: () => import("./locales/pl.json").then((module) => module.default),
} satisfies Record<Locale, () => Promise<Dictionary>>;

export function getDictionary(locale: Locale): Promise<Dictionary> {
    return dictionaries[locale]();
}

/** Accept plain text, paragraphs, or a locale map. Missing content renders safely. */
export function descriptionParagraphs(description: unknown, locale = "en"): string[] {
    if (typeof description === "string") {
        return description.split(/\r?\n\s*\r?\n/).map(paragraph => paragraph.trim()).filter(Boolean);
    }
    if (Array.isArray(description)) {
        return description.flatMap(value => typeof value === "string" ? descriptionParagraphs(value, locale) : []);
    }
    if (description && typeof description === "object") {
        const translations = description as Record<string, unknown>;
        for (const value of [translations[locale], translations.en, ...Object.values(translations)]) {
            if (typeof value !== "string" && !Array.isArray(value)) continue;
            const paragraphs = descriptionParagraphs(value, locale);
            if (paragraphs.length) return paragraphs;
        }
    }
    return [];
}

import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/site";
import { collectionPages, localeCodes, localePath } from "./i18n/config";
export default function sitemap(): MetadataRoute.Sitemap {
    return ([undefined, ...collectionPages] as const).flatMap((page) => {
        const languages = Object.fromEntries(localeCodes.map((locale) => [locale, `${siteUrl}${localePath(locale, page)}`]));
        return localeCodes.map((locale) => ({
            url: `${siteUrl}${localePath(locale, page)}`,
            changeFrequency: "monthly" as const,
            priority: page ? 0.8 : 1,
            alternates: { languages },
        }));
    });
}

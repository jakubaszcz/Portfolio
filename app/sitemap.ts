import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/site";
import { localeCodes, localePath } from "./i18n/config";
export default function sitemap(): MetadataRoute.Sitemap {
    const languages = Object.fromEntries(localeCodes.map((locale) => [locale, `${siteUrl}${localePath(locale)}`]));
    return localeCodes.map((locale) => ({
        url: `${siteUrl}${localePath(locale)}`,
        changeFrequency: "monthly",
        priority: 1,
        alternates: { languages },
    }));
}

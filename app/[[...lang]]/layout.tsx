import type { Metadata } from "next";
import {Inter, Lobster} from "next/font/google";
import "../globals.css";
import { siteUrl } from "../lib/site";
import { notFound } from "next/navigation";
import { getDictionary } from "../i18n/dictionaries";
import { locales, localeCodes, localeFromSegments, localePath } from "../i18n/config";

const primaryFont = Lobster({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-lobster",
  display: "swap",
});

const textFont = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateMetadata({ params }: LayoutProps<"/[[...lang]]">): Promise<Metadata> {
  const locale = localeFromSegments((await params).lang);
  if (!locale) notFound();
  const { meta } = await getDictionary(locale);
  return {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: localePath(locale),
    languages: { ...Object.fromEntries(localeCodes.map((code) => [code, localePath(code)])), "x-default": "/" },
  },
  title: { default: meta.title, template: "%s | Jakub Szczucinski" },
  authors: [{ name: "Jakub Szczucinski" }],
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", title: meta.title, description: meta.description, creator: "@onticentity", images: ["/og-image.png"] },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: localePath(locale),
    siteName: "Jakub Szczucinski | Portfolio", type: "website", locale: locales[locale].openGraph,
    alternateLocale: localeCodes.filter((code) => code !== locale).map((code) => locales[code].openGraph),
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Jakub Szczucinski | Portfolio" }],
  },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[[...lang]]">) {
  const locale = localeFromSegments((await params).lang);
  if (!locale) notFound();
  return (
    <html
      lang={locale}
      className={`${primaryFont.variable} ${textFont.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import {Inter, Lobster} from "next/font/google";
import "./globals.css";
import { siteUrl, siteTitle, siteDescription } from "./lib/site";

const primaryFont = Lobster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lobster",
  display: "swap",
});

const textFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: { default: siteTitle, template: "%s | Jakub Szczucinski" },
  authors: [{ name: "Jakub Szczucinski" }],
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescription, creator: "@onticentity", images: ["/og-image.png"] },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Jakub Szczucinski | Portfolio", type: "website", locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Jakub Szczucinski | Portfolio" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${primaryFont.variable} ${textFont.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}

import {Landing} from "@/app/components/landing/Landing";
import {Path} from "@/app/components/path/Path";
import {Projects} from "@/app/components/projects/Projects";
import {Header} from "@/app/components/header/Header";
import {History} from "@/app/components/History/History";
import {Divider} from "@/app/components/divider/Divider";
import {Skills} from "@/app/components/skills/Skills";
import {Contact} from "@/app/components/contact/Contact";
import {Footer} from "@/app/components/footer/Footer";
import { notFound } from "next/navigation";
import { getDictionary } from "@/app/i18n/dictionaries";
import { defaultLocale, localeCodes, localeFromSegments } from "@/app/i18n/config";

export const dynamicParams = false;

export function generateStaticParams() {
  return localeCodes.map((locale) => ({ lang: locale === defaultLocale ? [] : [locale] }));
}

export default async function Home({ params }: PageProps<"/[[...lang]]">) {
  const locale = localeFromSegments((await params).lang);
  if (!locale) notFound();
  const dictionary = await getDictionary(locale);
  return (
      <div className="min-h-dvh bg-radial-[at_50%_20%] from-primary-700 via-primary-900 to-primary-950">
      <Header dictionary={dictionary} locale={locale} />
      <main>
        <Landing dictionary={dictionary}/>
        <Divider />
        <History dictionary={dictionary} />
        <Divider />
        <Path dictionary={dictionary}/>
        <Divider />
        <Projects dictionary={dictionary}/>
        <Divider />
        <Skills dictionary={dictionary}/>
        <Divider />
        <Contact dictionary={dictionary}/>
      </main>
        <Footer dictionary={dictionary}/>
    </div>
  );
}

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
import { collectionPages, defaultLocale, localeCodes, pageFromSegments } from "@/app/i18n/config";
import { CollectionPage } from "@/app/components/collections/Collection";

export const dynamicParams = false;

export function generateStaticParams() {
  return localeCodes.flatMap((locale) => {
    const prefix = locale === defaultLocale ? [] : [locale];
    return [{ lang: prefix }, ...collectionPages.map(page => ({ lang: [...prefix, page] }))];
  });
}

export default async function Home({ params }: PageProps<"/[[...lang]]">) {
  const { locale, page } = pageFromSegments((await params).lang);
  if (!locale) notFound();
  const dictionary = await getDictionary(locale);
  if (page) return <CollectionPage kind={page} dictionary={dictionary} locale={locale} />;
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
        <Projects dictionary={dictionary} locale={locale}/>
        <Divider />
        <Skills dictionary={dictionary}/>
        <Divider />
        <Contact dictionary={dictionary}/>
      </main>
        <Footer dictionary={dictionary}/>
    </div>
  );
}

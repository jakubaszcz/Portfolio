import {Landing} from "@/app/components/landing/Landing";
import {Path} from "@/app/components/path/Path";
import {Projects} from "@/app/components/projects/Projects";
import {Header} from "@/app/components/header/Header";
import {History} from "@/app/components/History/History";
import {Divider} from "@/app/components/divider/Divider";
import {Skills} from "@/app/components/skills/Skills";
import {Contact} from "@/app/components/contact/Contact";
import {Footer} from "@/app/components/footer/Footer";

export default function Home() {
  return (
      <div className="min-h-dvh bg-radial-[at_50%_20%] from-primary-700 via-primary-900 to-primary-950">
      <Header />
        <Landing/>
        <Divider />
        <History />
        <Divider />
        <Path/>
        <Divider />
        <Projects/>
        <Divider />
        <Skills/>
        <Divider />
        <Contact/>
        <Footer/>
    </div>
  );
}

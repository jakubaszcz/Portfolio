import {Landing} from "@/app/components/landing/Landing";
import {Path} from "@/app/components/path/Path";
import {Projects} from "@/app/components/projects/Projects";
import {Header} from "@/app/components/header/Header";

export default function Home() {
  return (
      <div className="min-h-dvh bg-radial-[at_50%_20%] from-primary-700 via-primary-900 to-primary-950">
      <Header />
        <Landing/>
        <Path/>
        <Projects/>
    </div>
  );
}

import {Landing} from "@/app/components/landing/Landing";
import {Path} from "@/app/components/path/Path";
import {Projects} from "@/app/components/projects/Projects";

export default function Home() {
  return (
    <div>
      <Landing/>
        <Path/>
        <Projects/>
    </div>
  );
}

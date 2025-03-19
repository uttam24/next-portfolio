import About from "@/components/common/About";
import Contact from "@/components/common/Contact";
import Projects from "@/components/common/Projects";
import Resume from "@/components/common/Resume";
import Skills from "@/components/common/Skills";

export default function Home() {
  return (
    <>
        <About/>
        <Skills/>
        <Resume/>
        <Projects/>
        <Contact/>
    </>
  );
}

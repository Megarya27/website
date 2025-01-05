import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import { TracingBeam } from "@/components/ui/tracing-beam";
import CustomCursor from "@/components/CustomCursor";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative bg-[#000000] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <CustomCursor />
      <div className="w-2/3 h-full">
        <Hero />
        <About/>
        <Skills/>
        <Projects/>
        
      </div>
    </main>
  );
}

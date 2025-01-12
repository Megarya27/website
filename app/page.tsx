import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import { TracingBeam } from "@/components/ui/tracing-beam";
import CustomCursor from "@/components/CustomCursor";
import Skills from "@/components/Skills";
import { Vortex } from "@/components/ui/vortex";
export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <CustomCursor />
      <div className="w-screen h-screen">
        <Hero />
        </div>
      
      <div className=" bg-black w-screen h-full">
      
        <About/>
        <Skills/>
        <Projects/>
        
       
      </div>
    </main>
  );
}

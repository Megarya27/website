"use client";
import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FloatingNav } from "./ui/floating-navbar";
import VantaNetEffect from "@/components/ui/VantaNetEffect";

const Hero = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative bg-opacity-50 bg-black pb-20 pt-56 min-h-screen">
      {/* VantaNetEffect in the background */}
      <VantaNetEffect containerId="vanta-container" />

      {/* Floating Navigation */}
      <FloatingNav
        navItems={[
          { name: "Home", link: "#" },
          { name: "About", link: "#about" },
          { name: "Projects", link: "#projects" },
          { name: "Contact", link: "#contact" },
        ]}
      />

<div className="flex  items-center flex-col justify-center px-4 md:px-16 py-8 w-full h-full">
  <p className="pt-5 text-lg md:text-lg font-mono font-bold tracking-tight 
                text-transparent bg-clip-text bg-gradient-to-tl from-[#00ff00] via-[#00cc00] to-[#008000]">
    HI, MY NAME IS
  </p>
  <h2 className="pt-7 text-7xl md:text-7xl font-mono font-bold tracking-tight 
                text-transparent bg-clip-text bg-gradient-to-tl from-[#00ff00] via-[#00cc00] to-[#008000]">
    ARYA!
  </h2>
  <motion.h2 
            className="pt-8 text-xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-tl from-[#00ff00] via-[#00cc00] to-[#008000] hover:scale-105 transition-transform cursor-default mt-4"
            variants={itemVariants}
          >
            <Typewriter
              words={[
                '> Pioneering secure and innovative solutions in the digital age',
                '> Merging technical expertise with unparalleled security acumen',
                '> Building Innovative systems crafted with uncompromising security',
                '> Mission: Shaping the future through code and innovation'
              ]}
              cursor
              cursorStyle='_'
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
              loop={true}
            />
          </motion.h2>
          
      </div>
      
    </div>
  );
};

export default Hero;

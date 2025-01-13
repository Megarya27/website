"use client";
import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.001 },
  },
};

const aboutMeText =
  "Hi, I am Arya, a computer science student at the University of Technology Sydney, where I dive deep into the digital frontier. My passion lies at the intersection of cybersecurity and quantitative trading, where I explore the art of securing systems and optimizing strategies in fast-paced financial markets. Whether it's cracking codes or analyzing market algorithms, I thrive on solving complex problems and pushing the boundaries of technology. I believe in using my skills to shape a safer, smarter future, one line of code at a time.";

export default function About() {
  return (
    
    <motion.div
      className="min-h-60 justify-center relative bg-black overflow-visible flex"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      
      <div
        id="about"
        className="flex flex-col bg-transparent  md:flex-row mb-28 md:px-16  w-2/3 h-full"
         >
      
      
        {/* Text Section */}
        <div className="flex flex-col p-10 rounded-xl justify-center  border shadow-2xl border-green-500 border-opacity-30 transition-all duration-300">
          <motion.h2
            className="text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-tl from-[#00ff00] via-[#00cc00] to-[#008000] transition-transform cursor-default mb-4"
            initial="hidden"
            animate="visible"
          >
            <Typewriter
              words={["</ABOUT_ME>"]}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.h2>
          
          <motion.p
            className="pt-3 text-lg text-white font-mono leading-relaxed flex flex-wrap contain-none"
            variants={containerVariants}
          >
            {aboutMeText.split(" ").map((word, index) => (
              <motion.span key={index} variants={wordVariants} className="mr-1">
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>

        {/* Image Section */}
        <div className=" flex relative justify-center items-center min-w-80 min-h-80 max-h-96 max-w-96">
          <motion.img
            src="/file(1).png"
            alt="About Image"
            className="rounded-full shadow-lg w-full h-full"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          />
        </div>
        
      </div>

      
    </motion.div>
  );
}
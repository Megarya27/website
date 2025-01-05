"use client";
import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const About: React.FC = () => {
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
    "Hi, I’m Arya, a computer science student at the University of Technology Sydney, where I dive deep into the digital frontier. My passion lies at the intersection of cybersecurity and quantitative trading, where I explore the art of securing systems and optimizing strategies in fast-paced financial markets. Whether it's cracking codes or analyzing market algorithms, I thrive on solving complex problems and pushing the boundaries of technology. I believe in using my skills to shape a safer, smarter future, one line of code at a time.";

  return (
    <motion.div 
      className="min-h-screen w-screen relative overflow-visible flex "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div id="About" className=" flex flex-col md:flex-row md:px-16 pt-96 w-full h-full">
        {/* Text Section */}
        <div className="flex flex-col justify-center md:w-1/2">
          <motion.h2
            className="text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-tl from-[#00ff00] via-[#00cc00] to-[#008000]  transition-transform cursor-default mb-4"
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
        <div className="flex justify-center items-center md:w-screen md:-translate-x-1/4">
          <motion.img
            src="/file(1).png" // Add your image path here
            alt="About Image"
            className="rounded-lg shadow-lg w-full max-w-[400px] h-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          />
        </div>

      </div>

      <Vortex
        backgroundColor="transparent"
        rangeY={100}
        particleCount={5}
        baseHue={80}
        className="absolute top-0 left-0 -z-10 w-full h-full"
      />
      
    </motion.div>
    
  );
};

export default About;

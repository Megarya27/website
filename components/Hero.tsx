"use client"
import React from 'react'
import { Vortex } from '@/components/ui/vortex'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link'
import { FloatingNav } from './ui/floating-navbar'

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
      }
  return (
    
    <div className='pb-20 pt-56'>
        <FloatingNav
            navItems={[
                { name: 'Home', link: '#' },
                { name: 'About', link: '#about' },
                { name: 'Projects', link: '#projects' },
                { name: 'Contact', link: '#contact' }
            ]}
        />
        
        
        <div>
            <Vortex
                backgroundColor="transparent"
                rangeY={300}
                particleCount={50}
                baseHue={80}
                className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
            >
            </Vortex>
        </div>
        
        <div className="flex items-start flex-col justify-center px-4 md:px-16 py-8 w-full h-full">
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
  )
}

export default Hero
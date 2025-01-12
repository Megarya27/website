"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "Description of your first project. What it does, why you built it, etc.",
    technologies: ["React", "TypeScript", "Node.js"],
    image: "/images/project1.png",
    link: "https://project1.com",
    github: "https://github.com/yourusername/project1",
  },
  //  more projects to add here
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.h2
        className="m-20 text-center text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-tl from-[#00ff00] via-[#00cc00] to-[#008000]  transition-transform cursor-default"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        &lt;/PROJECTS&gt;
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="relative group"
          >
            <div className="bg-gradient-to-tr from-[#002200] via-[#003300] to-[#00ff00] rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-green-500">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-black text-green-500 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-black rounded-lg transition-colors duration-300"
                    style={{ backgroundColor: '#00ff00' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#00ff00')}
                  >
                    View Project
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-black hover:bg-white hover:text-black text-white rounded-lg transition-colors duration-300"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

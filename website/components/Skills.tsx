import { FaPython, FaJava, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiPrisma, SiWireshark, SiGnubash } from 'react-icons/si';
import { GiPortculis } from 'react-icons/gi'; // for John The Ripper
import { BiNetworkChart } from 'react-icons/bi'; // for Nmap
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <section className="pt-0 relative">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="relative mb-12 overflow-hidden">
          {/* Left gradient fade */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-black via-transparent to-transparent z-10 pointer-events-none"></div>
          {/* Right gradient fade */}
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black via-transparent to-transparent z-10 pointer-events-none"></div>

          <Marquee speed={50} gradient={false}>
            <div className="flex">
              {techSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center mx-4 transition-shadow"
                >
                  <skill.icon size={40} color="#00ff00" />
                  <span className="text-sm font-medium text-green-500 mt-2">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

const techSkills = [
  { name: 'Python', icon: FaPython },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'Java', icon: FaJava },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'React', icon: FaReact },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Prisma', icon: SiPrisma },
  { name: 'Wireshark', icon: SiWireshark },
  { name: 'John The Ripper', icon: GiPortculis },
  { name: 'Nmap', icon: BiNetworkChart },
  { name: 'Bash', icon: SiGnubash },
];

export default Skills;

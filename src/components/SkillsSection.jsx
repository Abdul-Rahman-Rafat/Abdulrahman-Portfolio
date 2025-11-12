import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },

  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },

  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original colored" },
  { name: "Figma", icon: "devicon-figma-plain colored" },
  { name: "VS Code", icon: "devicon-vscode-plain colored" },
];

export const SkillsSection = () => {
  const sectionRef = useRef(null);

  // Scroll animation
  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".skill-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl" ref={sectionRef}>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="skill-card opacity-0 translate-y-6 transition-all duration-700 
              bg-card p-6 rounded-xl shadow-md hover:scale-105 relative group"
            >
              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 
              bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 
              transition pointer-events-none">
                {skill.name}
              </div>

              <div className="flex flex-col items-center justify-center">
                <i className={`${skill.icon} text-6xl mb-3`} />
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

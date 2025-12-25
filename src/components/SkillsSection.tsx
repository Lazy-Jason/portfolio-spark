import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gamepad2, Code, Globe, Users } from "lucide-react";

const skills = [
  {
    icon: Gamepad2,
    title: "Unreal Engine",
    description: "3+ Years Of Development Using Blueprints And C++",
    level: 90,
    tags: ["Blueprints", "C++", "Gameplay Systems"],
  },
  {
    icon: Code,
    title: "Unity",
    description: "Developed Several University Project Games Using C#",
    level: 80,
    tags: ["C#", "Game Jams", "Prototyping"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Developed an anime ranking site using Node.js, React and Firebase",
    level: 70,
    tags: ["React", "Node.js", "Firebase"],
  },
  {
    icon: Users,
    title: "Agile Practitioner",
    description: "Proficient in agile methodologies, ensuring streamlined workflows",
    level: 85,
    tags: ["Scrum", "Team Lead", "Collaboration"],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-xl p-6 group hover:border-primary/50 transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <skill.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold mb-1">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </div>
              </div>

              {/* Skill bar */}
              <div className="skill-bar mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.15 }}
                  className="skill-bar-fill"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

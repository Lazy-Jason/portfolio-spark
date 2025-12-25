import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gamepad2, Code, Globe, Users } from "lucide-react";

const skills = [
  {
    icon: Gamepad2,
    title: "Unreal Engine",
    description: "3+ Years Of Development Using Blueprints And C++",
    tags: ["Blueprints", "C++", "Gameplay Systems", "AI Behavior", "Animation"],
  },
  {
    icon: Code,
    title: "Unity",
    description: "Developed Several University Project Games Using C#",
    tags: ["C#", "Game Jams", "Prototyping", "2D/3D", "Physics"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Developed an anime ranking site using Node.js, React and Firebase",
    tags: ["React", "Node.js", "Firebase", "TypeScript", "REST APIs"],
  },
  {
    icon: Users,
    title: "Agile Practitioner",
    description: "Proficient in agile methodologies, ensuring streamlined workflows",
    tags: ["Scrum", "Team Lead", "Collaboration", "Git", "Jira"],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 relative section-gradient">
      <div className="max-w-[1600px] mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-xl p-6 group hover:border-primary/50 transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <skill.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold mb-1">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </div>
              </div>

              {/* Tags grid */}
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 + tagIndex * 0.05 }}
                    className="tech-badge text-xs group-hover:border-primary/50 transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

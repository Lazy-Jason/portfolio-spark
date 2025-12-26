import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Boxes, Globe, GitBranch } from "lucide-react";

const skills = [
  {
    icon: Cpu,
    title: "Unreal Engine",
    description: "3+ Years Of Development Using Blueprints And C++",
    tags: ["Blueprints", "C++"],
  },
  {
    icon: Boxes,
    title: "Unity",
    description: "Developed Several University Project Games Using C#",
    tags: ["C#", "Game Jams"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Developed an anime ranking site using Node.js, React and Firebase",
    tags: ["React", "Node.js", "Firebase", "TypeScript"],
  },
  {
    icon: GitBranch,
    title: "Agile Practitioner",
    description: "Proficient in agile methodologies, ensuring streamlined workflows",
    tags: ["Scrum", "Git"],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-[1600px] mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-[0.2em] uppercase">
            <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl border border-border/60 bg-transparent p-6 transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]"
            >
              {/* Icon and Content Row */}
              <div className="flex items-start gap-5">
                {/* Large Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-lg border border-primary/40 flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                    <skill.icon size={28} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg font-semibold text-primary uppercase tracking-wide mb-2 leading-tight">
                    {skill.title.replace(" ", "_")}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>

              {/* Tags at bottom */}
              <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border/30">
                {skill.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 + tagIndex * 0.05 }}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border/60 text-xs font-medium text-primary/80 bg-transparent hover:border-primary/50 hover:text-primary transition-all duration-300"
                    title={tag}
                  >
                    {tag.length <= 3 ? tag : tag.substring(0, 2)}
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

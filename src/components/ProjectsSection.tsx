import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play, Zap, Check } from "lucide-react";

const featuredProjects = [
  {
    title: "SLIME SLINGER",
    role: "Gameplay Programmer",
    highlights: [
      "Led core gameplay systems development",
      "Built modular ability & combat system",
      "Implemented AI behaviour trees",
      "Optimized for 60fps on target hardware",
    ],
    image: "https://img.itch.zone/aW1nLzIxMjA3NzI1LnBuZw==/original/w25n7Q.png",
    tags: ["Unreal Engine", "C++", "Blueprints"],
    link: "#",
    featured: true,
    type: "Action Adventure RPG",
  },
  {
    title: "Frog Wood",
    role: "Gameplay Programmer",
    highlights: [
      "Designed dimensional traversal mechanics",
      "Created player movement & physics",
      "Built environmental interaction system",
    ],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
    tags: ["Unreal Engine", "Blueprints", "C++"],
    link: "#",
    type: "3D Platformer",
  },
  {
    title: "MIQUELLA'S END",
    role: "Solo Developer",
    highlights: [
      "Recreated Malenia boss fight mechanics",
      "Implemented health regen on hit system",
      "Built complex attack pattern AI",
    ],
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800",
    tags: ["Unreal Engine", "C++", "AI"],
    link: "#",
    type: "Boss AI System",
  },
  {
    title: "NERVE QUEST",
    role: "Tools Programmer",
    highlights: [
      "Built visual graph editor for designers",
      "Created runtime quest subsystem",
      "Enabled non-linear quest flows",
    ],
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800",
    tags: ["Unreal Engine", "Editor Tools", "C++"],
    link: "#",
    type: "Quest System Plugin",
  },
  {
    title: "Generic Dynamic Object Pool",
    role: "Tools Programmer",
    highlights: [
      "Reduced spawn overhead significantly",
      "Type-agnostic pool implementation",
      "Easy integration for any project",
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    tags: ["Unreal Engine", "Performance", "C++"],
    link: "#",
    type: "Performance Tool",
  },
  {
    title: "Nerve Talent Tree",
    role: "Systems Programmer",
    highlights: [
      "Node-based talent editor for designers",
      "Multi-stage progression with dependencies",
      "Save/load talent configurations",
    ],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800",
    tags: ["Unreal Engine", "UI/UX", "C++"],
    link: "#",
    type: "Progression System",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-[1600px] mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Hero Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="project-card group relative overflow-hidden rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image side */}
              <div className="relative overflow-hidden h-64 lg:h-auto">
                <img
                  src={featuredProjects[0].image}
                  alt={featuredProjects[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent lg:hidden" />
              </div>
              
              {/* Content side */}
              <div className="p-6 lg:p-10 flex flex-col justify-center bg-card">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 rounded-md bg-primary/20 border border-primary/50 text-primary text-xs font-medium uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="px-2 py-1 rounded-md bg-accent/20 border border-accent/50 text-accent text-xs font-medium">
                    {featuredProjects[0].type}
                  </span>
                </div>
                
                <h3 className="font-display text-2xl lg:text-3xl font-bold mb-1 text-foreground">
                  {featuredProjects[0].title}
                </h3>
                <p className="text-primary text-sm font-medium mb-4">
                  {featuredProjects[0].role}
                </p>
                
                {/* Recruiter-friendly bullet points */}
                <ul className="space-y-2 mb-5">
                  {featuredProjects[0].highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProjects[0].tags.map((tag) => (
                    <span key={tag} className="tech-badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={featuredProjects[0].link}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all group/btn w-fit"
                >
                  <Play size={16} className="fill-current" />
                  Watch In Action
                  <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProjects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
              className="project-card group rounded-xl overflow-hidden flex flex-col"
            >
              <div className="relative overflow-hidden h-40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                
                {/* Type badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 rounded-md bg-accent/90 text-accent-foreground text-xs font-medium flex items-center gap-1">
                    <Zap size={10} />
                    {project.type}
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-display text-base font-bold mb-0.5 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-primary/80 text-xs font-medium mb-3">
                  {project.role}
                </p>
                
                {/* Bullet points */}
                <ul className="space-y-1.5 mb-4 flex-grow">
                  {project.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-xs">
                      <Check size={12} className="text-primary mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors group/link"
                >
                  View Details
                  <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

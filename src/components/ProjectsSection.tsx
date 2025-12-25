import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play, Zap } from "lucide-react";

const featuredProjects = [
  {
    title: "SLIME SLINGER",
    description: "A 3rd person Action Adventure game with Sci-Fi – Fantasy theming. Play as a slime and search for your kidnapped mother - absorb leftover DNA to enhance your skills.",
    image: "https://img.itch.zone/aW1nLzIxMjA3NzI1LnBuZw==/original/w25n7Q.png",
    tags: ["Unreal Engine", "Blueprints", "C++"],
    link: "#",
    featured: true,
    highlight: "Action Adventure RPG",
  },
  {
    title: "Frog Wood",
    description: "A 3D platformer where players embody a tree frog restoring vitality to a desiccated swamp by traversing diverse dimensional realms.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
    tags: ["Unreal Engine", "Blueprints", "C++"],
    link: "#",
    highlight: "3D Platformer",
  },
  {
    title: "MIQUELLA'S END",
    description: "Inspired by Elden Ring's Malenia boss fight, recreating intricate dodging mechanics and diverse attack patterns with health regeneration.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800",
    tags: ["Unreal Engine", "Blueprints", "C++"],
    link: "#",
    highlight: "Boss AI System",
  },
  {
    title: "NERVE QUEST",
    description: "A custom quest system for Unreal Engine with visual graph editor for designing quest flows and runtime subsystem for handling progression.",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800",
    tags: ["Unreal Engine", "Blueprints", "C++"],
    link: "#",
    highlight: "Quest System Plugin",
  },
  {
    title: "Generic Dynamic Object Pool",
    description: "A flexible and efficient object pooling system for Unreal Engine projects, improving performance by reducing spawn overhead.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    tags: ["Unreal Engine", "Blueprints", "C++"],
    link: "#",
    highlight: "Performance Tool",
  },
  {
    title: "Nerve Talent Tree",
    description: "A character progression system featuring a node-based editor for creating multi-stage talent trees with dependencies and requirements.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800",
    tags: ["Unreal Engine", "Blueprints", "C++"],
    link: "#",
    highlight: "Progression System",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Gameplay systems, tools, and complete game experiences built with precision.
          </p>
        </motion.div>

        {/* Hero Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="project-card group relative overflow-hidden rounded-2xl">
            <div className="relative overflow-hidden">
              <img
                src={featuredProjects[0].image}
                alt={featuredProjects[0].title}
                className="w-full h-64 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/50 text-primary text-xs font-medium uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/20 border border-accent/50 text-accent text-xs font-medium">
                    {featuredProjects[0].highlight}
                  </span>
                </div>
                
                <h3 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
                  {featuredProjects[0].title}
                </h3>
                
                <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
                  {featuredProjects[0].description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProjects[0].tags.map((tag) => (
                    <span key={tag} className="tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={featuredProjects[0].link}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all group/btn hover:gap-4"
                >
                  <Play size={18} className="fill-current" />
                  See It In Action
                  <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="project-card group rounded-xl overflow-hidden"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Highlight badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 rounded-md bg-accent/90 text-accent-foreground text-xs font-medium flex items-center gap-1">
                    <Zap size={12} />
                    {project.highlight}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors group/link"
                >
                  Explore Project
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

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const featuredProjects = [
  {
    title: "SLIME SLINGER",
    description: "A 3rd person Action Adventure game with Sci-Fi – Fantasy theming. Play as a slime and search for your kidnapped mother - absorb leftover DNA to enhance your skills.",
    image: "https://img.itch.zone/aW1nLzIxMjA3NzI1LnBuZw==/original/w25n7Q.png",
    tags: ["Unreal Engine", "Blueprints", "C++"],
    link: "#",
    featured: true,
  },
  {
    title: "Frog Wood",
    description: "A 3D platformer where players embody a tree frog restoring vitality to a desiccated swamp by traversing diverse dimensional realms.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
    tags: ["Unreal Engine", "Blueprints", "C++"],
    link: "#",
  },
  {
    title: "MIQUELLA'S END",
    description: "Inspired by Elden Ring's Malenia boss fight, recreating intricate dodging mechanics and diverse attack patterns with health regeneration.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800",
    tags: ["Unreal Engine", "Blueprints", "C++"],
    link: "#",
  },
  {
    title: "NERVE QUEST",
    description: "A custom quest system for Unreal Engine with visual graph editor for designing quest flows and runtime subsystem for handling progression.",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800",
    tags: ["Unreal Engine", "Blueprints", "C++"],
    link: "#",
  },
  {
    title: "Generic Dynamic Object Pool",
    description: "A flexible and efficient object pooling system for Unreal Engine projects, improving performance by reducing spawn overhead.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    tags: ["Unreal Engine", "Blueprints", "C++"],
    link: "#",
  },
  {
    title: "Nerve Talent Tree",
    description: "A character progression system featuring a node-based editor for creating multi-stage talent trees with dependencies and requirements.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800",
    tags: ["Unreal Engine", "Blueprints", "C++"],
    link: "#",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative section-gradient">
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
            A collection of my most impactful work, showcasing gameplay programming and systems design.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="project-card group">
            <div className="relative overflow-hidden">
              <img
                src={featuredProjects[0].image}
                alt={featuredProjects[0].title}
                className="w-full h-64 md:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <span className="tech-badge mb-4 inline-block">Featured Project</span>
                <h3 className="font-display text-2xl md:text-4xl font-bold mb-3 text-foreground">
                  {featuredProjects[0].title}
                </h3>
                <p className="text-muted-foreground mb-4 max-w-2xl">
                  {featuredProjects[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredProjects[0].tags.map((tag) => (
                    <span key={tag} className="tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={featuredProjects[0].link}
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
                >
                  View Project <ExternalLink size={16} />
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
              className="project-card group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:text-accent transition-colors"
                >
                  View Project <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

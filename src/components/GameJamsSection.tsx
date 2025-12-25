import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const gameJams = [
  {
    title: "CRAB TANK",
    description: "An underwater experience where you play as a crab popping bubbles to gain oxygen in an endless wave.",
    image: "https://img.itch.zone/aW1nLzE5NTU2ODk4LnBuZw==/original/lMhD27.png",
    tags: ["3D", "Action", "Adventure"],
    link: "https://lazy-studio.itch.io/",
  },
  {
    title: "THE HALLOWEEN SHOOTER",
    description: "Created to show how easy it is to make a game using Unreal Engine blueprinting system.",
    image: "https://img.itch.zone/aW1nLzEwNTEzNDA5LmpwZw==/original/NZKH9Q.jpg",
    tags: ["3D", "Action", "FPS"],
    link: "https://lazy-studio.itch.io/",
  },
  {
    title: "THE ORGANIC ROUTE",
    description: "Play as a potted plant that has gained sentience after being genetically enhanced by a scientist.",
    image: "https://img.itch.zone/aW1nLzExMjE4NzYyLnBuZw==/original/KnbiUP.png",
    tags: ["3D", "Action", "Adventure"],
    link: "https://lazy-studio.itch.io/",
  },
];

export const GameJamsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative">
      <div className="max-w-[1600px] mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
            <span className="text-gradient">Game Jams & Personal</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {gameJams.map((jam, index) => (
            <motion.a
              key={jam.title}
              href={jam.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="project-card group cursor-pointer"
            >
              <div className="relative overflow-hidden h-40">
                <img
                  src={jam.image}
                  alt={jam.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={18} className="text-primary" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {jam.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {jam.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {jam.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

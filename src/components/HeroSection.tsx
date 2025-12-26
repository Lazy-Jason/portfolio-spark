import { motion } from "framer-motion";
import { Github, Linkedin, Gamepad2, Mail, ChevronDown } from "lucide-react";
import heroImage from "@/assets/professional-hero.png";

const socialLinks = [
  { icon: Github, href: "https://github.com/Lazy-Jason", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/job-omondiale-2a04b4278/", label: "LinkedIn" },
  { icon: Gamepad2, href: "https://lazy-studio.itch.io/", label: "Itch.io" },
  { icon: Mail, href: "mailto:huntingj4@gmail.com", label: "Email" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient grid-overlay overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 pt-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block mb-4"
            >
              <span className="tech-badge text-sm">Available for Opportunities</span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">I'm </span>
              <span className="text-gradient">Job</span>
              <br />
              <span className="text-foreground">Omondiale</span>
            </h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-display text-xl md:text-2xl text-primary mb-6 tracking-wider"
            >
              GAMEPLAY PROGRAMMER
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-4"
            >
              Creating immersive game experiences with Unreal Engine & Unity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="flex items-center gap-3 justify-center lg:justify-start mb-8"
            >
              <span className="text-muted-foreground text-sm">Currently obsessed with</span>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/40 bg-accent/5 hover:bg-accent/10 hover:border-accent/60 transition-all duration-300 group">
                <span className="text-accent font-medium text-sm group-hover:text-accent-foreground transition-colors">ELDEN RING</span>
                <span className="text-base group-hover:animate-pulse">⚔️</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="social-icon"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 relative"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent blur-2xl scale-110" />
              
              <img
                src={heroImage}
                alt="Job Omondiale - Gameplay Programmer"
                className="relative w-full max-w-lg mx-auto drop-shadow-2xl"
              />
              
              {/* Reflection effect */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

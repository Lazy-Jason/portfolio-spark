import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Instagram, Github, Gamepad2, Download, Sparkles } from "lucide-react";

const allContacts = [
  {
    icon: Mail,
    label: "Email",
    value: "huntingj4@gmail.com",
    href: "mailto:huntingj4@gmail.com",
    primary: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Job Omondiale",
    href: "https://www.linkedin.com/in/job-omondiale-2a04b4278/",
    primary: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Lazy-Jason",
    href: "https://github.com/Lazy-Jason",
    primary: false,
  },
  {
    icon: Gamepad2,
    label: "Itch.io",
    value: "lazy-studio",
    href: "https://lazy-studio.itch.io/",
    primary: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@not_Jasonx",
    href: "https://www.instagram.com/not_Jasonx",
    primary: false,
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative section-gradient overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-6 relative" ref={ref}>
        <div className="max-w-4xl mx-auto">
          {/* Header with personality */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Open to opportunities</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Let's Create Together</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Whether it's a game jam, a new project, or just a chat about game dev — I'd love to hear from you
            </p>
          </motion.div>

          {/* Contact Cards - Staggered Layout */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {allContacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.label === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                className={`group relative flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-300 ${
                  contact.primary 
                    ? "col-span-1 md:col-span-1 bg-gradient-to-b from-primary/15 to-primary/5 border-primary/30 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20" 
                    : "bg-muted/30 border-border/40 hover:border-primary/40 hover:bg-muted/50"
                }`}
              >
                <div className={`p-4 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110 ${
                  contact.primary 
                    ? "bg-primary/20 text-primary" 
                    : "bg-muted text-muted-foreground group-hover:text-primary group-hover:bg-primary/10"
                }`}>
                  <contact.icon size={26} />
                </div>
                
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                  {contact.label}
                </div>
                <div className={`font-medium text-sm transition-colors ${
                  contact.primary 
                    ? "text-foreground" 
                    : "text-foreground/80 group-hover:text-foreground"
                }`}>
                  {contact.value}
                </div>
                
                {/* Hover indicator */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-1/2 transition-all duration-300 rounded-full" />
              </motion.a>
            ))}
          </div>

          {/* CV Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <a
              href="https://portfolio.jobomondiale.com/Job-Omondiale-Gameplay%20Programmer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-display font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              <Download size={22} />
              Download Full CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

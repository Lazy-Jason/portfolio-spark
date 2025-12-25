import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Instagram, Github, Gamepad2 } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "huntingj4@gmail.com",
    href: "mailto:huntingj4@gmail.com",
    color: "text-primary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Job Omondiale",
    href: "https://www.linkedin.com/in/job-omondiale-2a04b4278/",
    color: "text-blue-400",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@not_Jasonx",
    href: "https://www.instagram.com/not_Jasonx",
    color: "text-pink-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Lazy-Jason",
    href: "https://github.com/Lazy-Jason",
    color: "text-foreground",
  },
  {
    icon: Gamepad2,
    label: "Itch.io",
    value: "lazy-studio",
    href: "https://lazy-studio.itch.io/",
    color: "text-accent",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 relative section-gradient">
      <div className="max-w-[1600px] mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-card rounded-xl p-5 flex items-center gap-4 group hover:border-primary/50 transition-all duration-300"
              >
                <div className={`p-3 rounded-lg bg-muted ${link.color} group-hover:scale-110 transition-transform`}>
                  <link.icon size={22} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{link.label}</div>
                  <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {link.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <a
              href="https://portfolio.jobomondiale.com/Job-Omondiale-Gameplay%20Programmer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-display font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 glow-primary"
            >
              Download Full CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

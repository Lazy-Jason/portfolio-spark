import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Instagram, Github, Gamepad2, ArrowRight, Download } from "lucide-react";

const primaryContacts = [
  {
    icon: Mail,
    label: "Email",
    value: "huntingj4@gmail.com",
    href: "mailto:huntingj4@gmail.com",
    cta: "Send an email",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Job Omondiale",
    href: "https://www.linkedin.com/in/job-omondiale-2a04b4278/",
    cta: "Let's connect",
  },
];

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    value: "@not_Jasonx",
    href: "https://www.instagram.com/not_Jasonx",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Lazy-Jason",
    href: "https://github.com/Lazy-Jason",
  },
  {
    icon: Gamepad2,
    label: "Itch.io",
    value: "lazy-studio",
    href: "https://lazy-studio.itch.io/",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative section-gradient">
      <div className="max-w-[1600px] mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Let's Build Something Awesome</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Always excited to collaborate on new projects and creative ideas
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Primary Contacts - Email & LinkedIn */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {primaryContacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.label === "Email" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-muted/60 to-muted/30 border border-border/50 hover:border-primary/60 transition-all duration-500"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 to-accent/10" />
                
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300">
                      <contact.icon size={28} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        {contact.label}
                      </div>
                      <div className="font-display text-lg text-foreground">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                    <span>{contact.cta}</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links - Compact Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-muted/40 border border-border/40 hover:border-primary/40 hover:bg-muted/60 transition-all duration-300"
              >
                <link.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {link.value}
                </span>
              </a>
            ))}
          </motion.div>

          {/* CV Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <a
              href="https://portfolio.jobomondiale.com/Job-Omondiale-Gameplay%20Programmer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-display font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105 glow-primary"
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

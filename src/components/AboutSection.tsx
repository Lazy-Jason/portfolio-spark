import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative section-gradient">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-gradient">Hello There</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-card rounded-2xl p-8 md:p-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My name is <span className="text-foreground font-semibold">Job Omondiale</span>, a gameplay programmer based in the UK, with a foundation in game development cultivated during my time at college (Colchester Institute). Currently, I am pursuing my bachelor's degree (BA) in game development programming at{" "}
              <span className="text-primary">Falmouth University</span>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Proficient in both <span className="text-accent">Unreal Engine</span> (Blueprint and C++) and{" "}
              <span className="text-accent">Unity Game Engine</span> (C#), I have actively contributed my skills to numerous projects over the years of study. These experiences have equipped me with a diverse skill set and invaluable insights, ultimately enhancing my capabilities as a developer.
            </p>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { value: "3+", label: "Years Experience" },
                  { value: "10+", label: "Projects Completed" },
                  { value: "2", label: "Game Engines" },
                  { value: "UK", label: "Based" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="font-display text-3xl font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

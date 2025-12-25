import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "10+", label: "Projects Shipped" },
    { value: "2", label: "Game Engines" },
    { value: "UK", label: "Based" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Stats floating at top */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center group"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
              <span className="text-gradient">Hello There</span>
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                My name is{" "}
                <span className="text-foreground font-semibold">Job Omondiale</span>, 
                a gameplay programmer based in the UK, with a foundation in game development 
                cultivated during my time at college (Colchester Institute). Currently, I am 
                pursuing my bachelor's degree (BA) in game development programming at{" "}
                <span className="text-primary font-medium">Falmouth University</span>.
              </p>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Proficient in both{" "}
                <span className="text-accent font-medium">Unreal Engine</span> (Blueprint and C++) and{" "}
                <span className="text-accent font-medium">Unity Game Engine</span> (C#), 
                I have actively contributed my skills to numerous projects over the years of study. 
                These experiences have equipped me with a diverse skill set and invaluable insights, 
                ultimately enhancing my capabilities as a developer.
              </p>
            </div>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-48 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-12"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

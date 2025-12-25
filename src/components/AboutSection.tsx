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
    <section id="about" className="py-16 relative">
      <div className="max-w-[1600px] mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center group"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
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
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
              <span className="text-gradient">Hello There</span>
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                My name is{" "}
                <span className="text-foreground font-semibold">Job Omondiale</span>, 
                a gameplay programmer based in the UK. I pursued my bachelor's degree (BA) in game development programming at{" "}
                <span className="text-primary font-medium">Falmouth University</span>.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Proficient in both{" "}
                <span className="text-accent font-medium">Unreal Engine</span> (Blueprint and C++) and{" "}
                <span className="text-accent font-medium">Unity</span> (C#), 
                I have actively contributed my skills to numerous projects over the years.
              </p>
            </div>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

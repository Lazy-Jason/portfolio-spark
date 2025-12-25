import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="font-display text-lg font-bold text-gradient">
            JOB.DEV
          </div>
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Job Omondiale. Crafted with passion for games.
          </p>
          <div className="text-sm text-muted-foreground">
            Gameplay Programmer
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

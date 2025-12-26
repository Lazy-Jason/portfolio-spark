import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Check, Zap } from "lucide-react";
import { getProjectById } from "@/data/projects";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || "");

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-[1600px] mx-auto px-6">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden mb-10"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            
            {/* Type badge */}
            <div className="absolute bottom-6 left-6">
              <span className="px-3 py-1.5 rounded-lg bg-accent/90 text-accent-foreground text-sm font-medium flex items-center gap-1.5">
                <Zap size={14} />
                {project.type}
              </span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-2 text-foreground">
                {project.title}
              </h1>
              <p className="text-primary text-lg font-medium mb-6">
                {project.role}
              </p>

              {project.description && (
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>
              )}

              {/* Key contributions */}
              <div className="mb-10">
                <h2 className="font-display text-xl font-semibold mb-4 text-foreground">
                  Key Contributions
                </h2>
                <ul className="space-y-3">
                  {project.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical details */}
              {project.technicalDetails && project.technicalDetails.length > 0 && (
                <div>
                  <h2 className="font-display text-xl font-semibold mb-4 text-foreground">
                    Technical Implementation
                  </h2>
                  <ul className="space-y-3">
                    {project.technicalDetails.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-6">
                {/* Technologies */}
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-semibold mb-4 text-foreground">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
                  >
                    <ExternalLink size={18} />
                    View Live Project
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;

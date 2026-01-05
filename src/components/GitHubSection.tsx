import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, GitFork, Star, Code2 } from "lucide-react";
import { Button } from "./ui/button";

const stats = [
  { icon: Code2, label: "Repositories", value: "15+" },
  { icon: Star, label: "Total Stars", value: "10+" },
  { icon: GitFork, label: "Forks", value: "5+" },
];

const GitHubSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <div className="gradient-bg p-3 rounded-xl">
                    <Github className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Open Source <span className="gradient-text">Contributions</span>
                  </h2>
                </div>
                <p className="text-muted-foreground max-w-lg">
                  Building in public and contributing to the data science community. 
                  Check out my repositories and feel free to collaborate!
                </p>
              </div>

              <div className="flex gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex justify-center md:justify-start"
            >
              <Button
                size="lg"
                className="gradient-bg hover-glow rounded-full px-8"
                asChild
              >
                <a
                  href="https://github.com/Sudhanshugochar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub Profile
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubSection;

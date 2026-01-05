import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Users, Activity, Car } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Customer Segmentation using k-Means",
    description:
      "Unsupervised ML project to segment customers based on income and spending behavior.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    icon: Users,
    github: "https://github.com/Sudhanshugochar/Customer-Segmentation-using-k-Means",
    liveDemo: null,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Medical Cost Prediction",
    description:
      "Regression-based ML model to predict medical insurance costs using patient data.",
    techStack: ["Python", "Linear Regression", "Random Forest", "Pandas"],
    icon: Activity,
    github: null,
    liveDemo: null,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Delhi Traffic Command Dashboard",
    description:
      "Web-based traffic visualization and analytics platform for real-time monitoring.",
    techStack: ["Python", "Data Visualization", "Web Dashboard", "Analytics"],
    icon: Car,
    github: null,
    liveDemo: null,
    gradient: "from-orange-500 to-red-500",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real-world machine learning projects showcasing practical applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group hover-glow"
            >
              {/* Project Icon Header */}
              <div className={`p-8 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <project.icon className="h-12 w-12 text-white relative z-10" />
                
                {/* Decorative Elements */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full" />
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full flex-1"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.liveDemo && (
                    <Button size="sm" className="rounded-full flex-1 gradient-bg">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                  {!project.github && !project.liveDemo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full flex-1"
                      disabled
                    >
                      Coming Soon
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

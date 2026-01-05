import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Car, Shield } from "lucide-react";
import { Button } from "./ui/button";

const webProjects = [
  {
    title: "Delhi Traffic Command",
    description:
      "Real-time traffic analytics dashboard for Delhi simulating congestion, anomalies, and smart city insights.",
    techStack: ["React", "Tailwind CSS", "Vercel", "Data Visualization"],
    icon: Car,
    github: "https://github.com/Sudhanshugochar/Delhi-Traffic",
    liveDemo: "https://delhi-traffic-command.vercel.app/",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "QCecuring Technologies – Identity Asset Dashboard",
    description:
      "Professional frontend dashboard built with Next.js, TypeScript, and Tailwind CSS for managing certificates, SSH keys, and audit logs.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    icon: Shield,
    github: "https://github.com/Sudhanshugochar/QCecuring-Technologies-1",
    liveDemo: "https://q-cecuring-technologies-1.vercel.app/certificates",
    gradient: "from-teal-500 to-cyan-500",
  },
];

const WebProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="web-projects" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="text-sm font-medium">Web Development</span>
          </div>
          <h2 className="section-title">
            Web <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Modern web applications with exceptional user experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {webProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="project-card"
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
                  <Button size="sm" className="rounded-full flex-1 gradient-bg" asChild>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebProjects;

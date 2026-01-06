import { motion } from "framer-motion";
import { ExternalLink, Monitor } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "IISF Platform – Design Variant 1",
    description: "A modern, responsive frontend design built for IISF showcasing clean layout, strong visual hierarchy, and smooth user flow.",
    liveLink: "https://iisf-weld.vercel.app/",
  },
  {
    title: "IISF Platform – Design Variant 2",
    description: "An alternate UI version of the IISF platform exploring layout variations, spacing, and interaction improvements.",
    liveLink: "https://iisf-2.vercel.app/",
  },
  {
    title: "Beneficiary Credit Scoring Dashboard",
    description: "A data-driven dashboard UI focused on clarity, structured analytics, and decision-making visuals.",
    liveLink: "https://beneficiary-credit-scoring.vercel.app/",
  },
];

const WebDesignProjects = () => {
  return (
    <section id="web-design" className="py-24 relative">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full glass-card text-primary">
            <Monitor className="inline-block w-4 h-4 mr-2" />
            Visual Work
          </span>
          <h2 className="section-title">Web Design & Frontend Work</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Live projects showcasing clean layouts, visual hierarchy, and modern UI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                {/* Preview Container */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden glass-card border border-border/50 group-hover:border-primary/50 transition-all duration-500">
                  {/* Iframe Preview */}
                  <iframe
                    src={project.liveLink}
                    title={project.title}
                    className="w-full h-full pointer-events-none scale-100 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-display font-semibold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 line-clamp-2">
                      {project.description}
                    </p>
                    <Button
                      size="sm"
                      className="w-fit gradient-bg hover-glow text-primary-foreground rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Preview
                    </Button>
                  </div>
                  
                  {/* Gradient Border Effect on Hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(280 100% 70% / 0.3), hsl(var(--primary) / 0.3))',
                      padding: '1px',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'xor',
                      WebkitMaskComposite: 'xor',
                    }}
                  />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDesignProjects;

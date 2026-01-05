import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Brain, Code, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "ML & Data Science",
    description: "Building intelligent systems with real-world impact",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Creating polished web experiences with modern technologies",
  },
  {
    icon: Rocket,
    title: "Project-Driven Learning",
    description: "Learning by building and shipping real products",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            
            {/* Education Badge */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-sm">B.Tech Computer Engineering (2023–2027)</span>
              </div>
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Wardha, Maharashtra</span>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a Computer Engineering student at Bajaj Institute of Technology with a deep passion 
              for Machine Learning and Full-Stack Development. I believe in learning by building and 
              sharing my journey publicly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My focus is on creating intelligent systems that solve real business problems while 
              delivering exceptional user experiences. From ML models that predict customer behavior 
              to modern web dashboards, I strive to bridge the gap between data and design.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover-glow group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="gradient-bg p-3 rounded-xl">
                    <highlight.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

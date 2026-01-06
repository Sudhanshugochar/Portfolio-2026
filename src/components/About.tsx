import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Brain, Code, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "ML & Data Science",
    description: "Turning raw data into actionable insights through intelligent algorithms",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Crafting polished web experiences from concept to deployment",
  },
  {
    icon: Rocket,
    title: "Project-Driven Learning",
    description: "Building real products, not just tutorials — learning by shipping",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="section-container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h2 
              className="section-title mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            
            {/* Education Badge */}
            <div className="flex flex-wrap gap-3 mb-8">
              <motion.div 
                className="inline-flex items-center gap-2 glass-card px-4 py-2.5 rounded-full"
                whileHover={{ scale: 1.02 }}
                style={{ transform: "none" }}
              >
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">B.Tech Computer Engineering (2023–2027)</span>
              </motion.div>
              <motion.div 
                className="inline-flex items-center gap-2 glass-card px-4 py-2.5 rounded-full"
                whileHover={{ scale: 1.02 }}
                style={{ transform: "none" }}
              >
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Wardha, Maharashtra</span>
              </motion.div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Hey! I'm a second-year Computer Engineering student at Bajaj Institute of Technology 
              with a genuine curiosity for how machines learn. I spend most of my time exploring 
              ML algorithms and building web apps that solve real problems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I believe the best way to learn is by building. Every project I create is an opportunity 
              to push my boundaries — whether it's predicting customer churn or designing intuitive 
              dashboards. I'm not just coding for the sake of it; I'm building things people can actually use.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not debugging models or tweaking CSS, you'll find me on the Kabaddi field 
              (yes, I captain our college team!) or exploring new tech through hackathons and 
              open-source contributions.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid gap-5">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card p-6 rounded-2xl gradient-border group"
              >
                <div className="flex items-start gap-5">
                  <div className="gradient-bg p-4 rounded-xl shrink-0">
                    <highlight.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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

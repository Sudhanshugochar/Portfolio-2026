import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Rocket, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Strong ML Fundamentals",
    description: "Deep understanding of supervised and unsupervised learning algorithms",
  },
  {
    icon: Rocket,
    title: "Project-Based Learning",
    description: "Building real-world applications to solve practical problems",
  },
  {
    icon: TrendingUp,
    title: "Consistent Growth Mindset",
    description: "Committed to continuous learning and improvement every day",
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
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I am a passionate Machine Learning and Data Science learner currently focusing 
              on core ML algorithms, data analysis, and real-world projects. I believe in 
              learning by building and sharing my journey publicly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My goal is to leverage data-driven insights to solve complex business problems 
              and contribute to impactful projects. I'm constantly exploring new techniques 
              and best practices in the field of artificial intelligence.
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

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, BrainCircuit, BarChart3, PieChart, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "SQL"],
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    skills: ["Linear Regression", "Logistic Regression", "k-Means", "Random Forest"],
  },
  {
    title: "Data Analysis",
    icon: BarChart3,
    skills: ["Pandas", "NumPy"],
  },
  {
    title: "Visualization",
    icon: PieChart,
    skills: ["Matplotlib", "Seaborn"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Jupyter Notebook"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I use to build intelligent solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 rounded-2xl hover-glow group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="gradient-bg p-2.5 rounded-xl">
                  <category.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: "Projects Built", value: "5+" },
            { label: "ML Models", value: "10+" },
            { label: "GitHub Repos", value: "15+" },
            { label: "Days Learning", value: "100+" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center glass-card p-6 rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

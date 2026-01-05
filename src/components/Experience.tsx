import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Users, Rocket, Clock } from "lucide-react";

const experiences = [
  {
    title: "Developer",
    company: "EncoreStudiox (Startup)",
    period: "Recent",
    description: [
      "Built and deployed a complete landing page + waitlist system in 5 hours",
      "Collaborated with founders for rapid iteration and UI optimization",
    ],
    icon: Rocket,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Frontend Developer Intern",
    company: "Bajaj Institute of Technology",
    period: "2024",
    description: [
      "Led a team of 6 to build a responsive website",
      "Improved UI usability and navigation by ~20%",
      "Managed deployment and cross-browser testing",
    ],
    icon: Briefcase,
    gradient: "from-blue-500 to-cyan-500",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Building real products and leading teams
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-6 md:p-8 rounded-2xl hover-glow"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className={`p-4 rounded-xl bg-gradient-to-br ${exp.gradient} shrink-0`}>
                  <exp.icon className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-semibold text-xl">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

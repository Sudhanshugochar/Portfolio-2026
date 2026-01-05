import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Users, Activity, CreditCard, DollarSign, ShieldAlert } from "lucide-react";
import { Button } from "./ui/button";

const mlProjects = [
  {
    title: "Customer Segmentation using k-Means",
    description:
      "Unsupervised ML project that segments mall customers based on income and spending behavior using k-Means clustering.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    icon: Users,
    github: "https://github.com/Sudhanshugochar/Customer-Segmentation-using-k-Means",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Telco Customer Churn Prediction",
    description:
      "Supervised ML project that predicts customer churn to help telecom companies proactively retain customers.",
    techStack: ["Python", "Random Forest", "Pandas", "Seaborn"],
    icon: Activity,
    github: "https://github.com/Sudhanshugochar/Telco-Customer-Churn-ML-project",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Medical Cost Prediction",
    description:
      "Regression-based ML model predicting medical insurance costs using demographic and lifestyle data.",
    techStack: ["Python", "Linear Regression", "NumPy", "Pandas"],
    icon: CreditCard,
    github: "https://github.com/Sudhanshugochar/Medical-Cost-Prediction-Model-",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Fraud Detection System",
    description:
      "Machine learning system for detecting fraudulent transactions using feature engineering and Random Forest.",
    techStack: ["Python", "Random Forest", "Feature Engineering", "Scikit-learn"],
    icon: ShieldAlert,
    github: "https://github.com/Sudhanshugochar/fraud-detection-system",
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "Salary Prediction App",
    description:
      "ML-based salary prediction system using regression models and structured datasets.",
    techStack: ["Python", "Regression", "Pandas", "Streamlit"],
    icon: DollarSign,
    github: "https://github.com/Sudhanshugochar/Salary-Prediction-App",
    gradient: "from-amber-500 to-yellow-500",
  },
];

const MLProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ml-projects" className="py-24 relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full gradient-bg"></span>
            <span className="text-sm font-medium">Machine Learning</span>
          </div>
          <h2 className="section-title">
            ML <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real-world machine learning solutions solving business problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mlProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card"
            >
              {/* Project Icon Header */}
              <div className={`p-6 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <project.icon className="h-10 w-10 text-white relative z-10" />
                
                {/* Decorative Elements */}
                <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full" />
                <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-white/5 rounded-full" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
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
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full w-full"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MLProjects;

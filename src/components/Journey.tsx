import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Target, Zap, TrendingUp } from "lucide-react";

const milestones = [
  {
    icon: BookOpen,
    period: "Day 1–5",
    title: "Supervised Learning Fundamentals",
    description:
      "Mastered core concepts including Linear Regression, Logistic Regression, and model evaluation techniques.",
    status: "completed",
  },
  {
    icon: Target,
    period: "Day 6–8",
    title: "Unsupervised Learning",
    description:
      "Explored clustering algorithms with focus on k-Means and customer segmentation applications.",
    status: "completed",
  },
  {
    icon: Zap,
    period: "Day 9–15",
    title: "Ensemble Methods",
    description:
      "Learned Random Forest, Gradient Boosting, and model optimization strategies.",
    status: "completed",
  },
  {
    icon: TrendingUp,
    period: "Ongoing",
    title: "Advanced ML & Deep Learning",
    description:
      "Continuing with neural networks, feature engineering, and industry-level projects.",
    status: "in-progress",
  },
];

const Journey = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My ML <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Learning in public and documenting every step of the way
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 z-10">
                <div
                  className={`w-full h-full rounded-full ${
                    milestone.status === "in-progress"
                      ? "gradient-bg animate-pulse"
                      : "bg-primary"
                  }`}
                />
                {milestone.status === "in-progress" && (
                  <div className="absolute inset-0 rounded-full gradient-bg animate-ping opacity-75" />
                )}
              </div>

              {/* Content Card */}
              <div
                className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="glass-card p-6 rounded-2xl hover-glow group">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`p-2 rounded-lg ${
                        milestone.status === "in-progress"
                          ? "gradient-bg"
                          : "bg-secondary"
                      }`}
                    >
                      <milestone.icon
                        className={`h-4 w-4 ${
                          milestone.status === "in-progress"
                            ? "text-primary-foreground"
                            : "text-secondary-foreground"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        milestone.status === "in-progress"
                          ? "gradient-text"
                          : "text-muted-foreground"
                      }`}
                    >
                      {milestone.period}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;

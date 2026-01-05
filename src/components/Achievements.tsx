import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Code2, Cloud, Users, Hand, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "IISF 2025 Hackathon",
    description: "Top 25 out of 1045 teams",
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    icon: Code2,
    title: "Social Winter of Code",
    description: "SWOC Season 6 Contributor",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "Open Source",
    description: "20+ Contributions",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "Google Cloud Arcade",
    description: "Winner",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Hand,
    title: "ISL AI App",
    description: "Indian Sign Language Recognition",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Users,
    title: "Sports Leadership",
    description: "College Kabaddi Team Captain",
    gradient: "from-teal-500 to-cyan-500",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative">
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
            Achievements & <span className="gradient-text">Activities</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Hackathons, open source, and beyond
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover-glow group cursor-default text-center"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${achievement.gradient} mb-4`}>
                <achievement.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

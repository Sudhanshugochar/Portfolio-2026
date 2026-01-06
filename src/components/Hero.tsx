import { motion } from "framer-motion";
import { ArrowRight, Github, FileText } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 glass-card px-5 py-2.5 rounded-full mb-10"
            whileHover={{ scale: 1.02 }}
            style={{ transform: "none" }} // Prevent default hover lift
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="text-sm text-muted-foreground font-medium">Open to internships & collaborations</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight"
          >
            Building Real-World Intelligence with{" "}
            <span className="gradient-text">Machine Learning & Code</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            {["Machine Learning", "Data Science", "Frontend Engineering"].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="px-5 py-2 glass-card rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                style={{ transform: "none" }}
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            I'm a Computer Engineering student and Machine Learning enthusiast building real-world 
            ML and web projects focused on business impact, performance, and clean UI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="gradient-bg hover-glow text-primary-foreground rounded-full px-8 magnetic-btn h-13 text-base"
              onClick={() => document.getElementById('ml-projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 glass-card border-0 magnetic-btn h-13 text-base"
              asChild
            >
              <a href="https://github.com/Sudhanshugochar" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 glass-card border-0 magnetic-btn h-13 text-base"
              asChild
            >
              <a href="/Sudhanshu_Gochar_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </Button>
          </motion.div>
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-12 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div 
            className="w-1.5 h-3 gradient-bg rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

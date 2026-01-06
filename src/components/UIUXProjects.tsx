import { motion } from "framer-motion";
import { Palette, ExternalLink, FolderOpen, Layers, PenTool, Layout } from "lucide-react";
import { Button } from "./ui/button";

const UIUXProjects = () => {
  return (
    <section id="uiux-design" className="py-24 relative">
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
            <Palette className="inline-block w-4 h-4 mr-2" />
            Design Portfolio
          </span>
          <h2 className="section-title">UI/UX Design Case Studies</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Wireframes, visual designs, layout explorations, and redesign case studies
          </p>
        </motion.div>

        {/* Featured Portfolio Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <a 
            href="https://drive.google.com/drive/folders/1Q2XXI-tjuLCmHGYBWxN2tV8MppDUnCKp"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative glass-card rounded-3xl p-8 md:p-12 border border-border/50 group-hover:border-primary/50 transition-all duration-500 overflow-hidden">
              {/* Background Gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                {/* Icon Grid */}
                <div className="relative w-40 h-40 flex-shrink-0">
                  <div className="absolute inset-0 grid grid-cols-2 gap-3">
                    <motion.div 
                      className="glass-card rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Layers className="w-8 h-8 text-primary" />
                    </motion.div>
                    <motion.div 
                      className="glass-card rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 delay-75"
                      whileHover={{ scale: 1.1 }}
                    >
                      <PenTool className="w-8 h-8 text-purple-400" />
                    </motion.div>
                    <motion.div 
                      className="glass-card rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 delay-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Layout className="w-8 h-8 text-pink-400" />
                    </motion.div>
                    <motion.div 
                      className="glass-card rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 delay-150"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Palette className="w-8 h-8 text-blue-400" />
                    </motion.div>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-gradient-to-br from-primary/30 to-purple-500/30 -z-10" />
                </div>
                
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                    <FolderOpen className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">Google Drive Collection</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:gradient-text transition-all duration-500">
                    UI/UX Design Portfolio
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed max-w-lg">
                    A collection of UI/UX design projects including wireframes, visual designs, 
                    layout explorations, and redesign case studies focused on usability and visual hierarchy.
                  </p>
                  
                  <Button
                    size="lg"
                    className="gradient-bg hover-glow text-primary-foreground rounded-full"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View Designs
                  </Button>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-gradient-to-tr from-pink-500/20 to-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </a>
        </motion.div>

        {/* Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {["Wireframing", "Visual Design", "User Research", "Prototyping", "Layout Design", "Figma"].map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="px-4 py-2 glass-card rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UIUXProjects;

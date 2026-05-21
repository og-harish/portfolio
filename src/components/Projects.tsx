import { motion } from "motion/react";
import { PROJECTS } from "../constants";
import { Github, ExternalLink } from "lucide-react";
import { useTheme } from "./ThemeContext";
import ThreeDCard from "./ThreeDCard";

export default function Projects() {
  const { layout } = useTheme();

  return (
    <section id="projects" className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4">Portfolio</div>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-text-main">
              Featured <span className="text-text-muted">Creations</span>
            </h2>
          </div>
          <p className="text-text-muted max-w-sm text-sm">
            A selection of my best work, spanning from frontend designs to full-stack applications and AI experiments.
          </p>
        </div>

        <div className={`grid ${layout === 'minimal' ? 'grid-cols-1 max-w-4xl mx-auto' : 'md:grid-cols-2'} gap-8`}>
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <ThreeDCard className={`glass rounded-[2rem] overflow-hidden group cursor-pointer h-full ${layout === 'minimal' ? 'flex flex-col md:flex-row' : ''}`}>
                <div className={`${layout === 'minimal' ? 'md:w-1/3' : 'h-48'} bg-gradient-to-br from-brand-blue/20 to-black p-4 relative overflow-hidden`}>
                   <div className="absolute top-4 right-4 bg-brand-blue text-white text-[10px] px-3 py-1 rounded-full font-bold z-20">LIVE</div>
                   <img
                     src={project.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"}
                     alt={project.title}
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-40"
                     referrerPolicy="no-referrer"
                   />
                </div>

                <div className="p-8 flex-1">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold group-hover:text-brand-blue transition-colors tracking-tight text-text-main">{project.title}</h3>
                    <div className="flex gap-2">
                      <a href={project.github} aria-label={`View ${project.title} source on GitHub`} className="text-text-muted hover:text-text-main transition-colors"><Github className="w-4 h-4" /></a>
                      <a href={project.link} aria-label={`View ${project.title} live demo`} className="text-text-muted hover:text-text-main transition-colors"><ExternalLink className="w-4 h-4" /></a>
                    </div>
                  </div>
                  <p className="text-[12px] text-text-muted leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[9px] font-bold uppercase tracking-wider text-brand-blue/60">{t}</span>
                    ))}
                  </div>
                </div>
              </ThreeDCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../constants";
import { Github, ExternalLink, BookOpen } from "lucide-react";
import { useTheme } from "./ThemeContext";
import ThreeDCard from "./ThreeDCard";
import ProjectVlogModal from "./ProjectVlogModal";

export default function Projects() {
  const { layout } = useTheme();
  const [activeVlog, setActiveVlog] = useState<{
    isOpen: boolean;
    vlogKey: string;
    title: string;
    link: string;
  }>({
    isOpen: false,
    vlogKey: "",
    title: "",
    link: ""
  });

  const openVlog = (vlogKey: string, title: string, link: string) => {
    setActiveVlog({ isOpen: true, vlogKey, title, link });
  };

  const closeVlog = () => {
    setActiveVlog((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <section id="projects" className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 font-sans">
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

        <div className={`grid ${layout === 'minimal' ? 'grid-cols-1 max-w-4xl mx-auto' : 'md:grid-cols-2'} gap-8 font-sans`}>
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <ThreeDCard className={`glass rounded-[2rem] overflow-hidden group h-full flex flex-col justify-between ${layout === 'minimal' ? 'md:flex-row' : ''}`}>
                <div onClick={() => openVlog(project.vlogKey, project.title, project.link)} className="cursor-pointer">
                  <div className={`${layout === 'minimal' ? 'md:w-1/3' : 'h-48'} bg-gradient-to-br from-brand-blue/20 to-black p-4 relative overflow-hidden`}>
                     <div className="absolute top-4 right-4 bg-brand-blue text-white text-[10px] px-3 py-1 rounded-full font-bold z-20">LIVE</div>
                     <img
                       src={project.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"}
                       alt={project.title}
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-40"
                       referrerPolicy="no-referrer"
                     />
                  </div>

                  <div className="p-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold group-hover:text-brand-blue transition-colors tracking-tight text-text-main">{project.title}</h3>
                      <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                        {project.github !== "#" && (
                          <a href={project.github} aria-label={`View ${project.title} source on GitHub`} className="text-text-muted hover:text-text-main transition-colors"><Github className="w-4 h-4" /></a>
                        )}
                        {project.link !== "#" && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live demo`} className="text-text-muted hover:text-text-main transition-colors"><ExternalLink className="w-4 h-4" /></a>
                        )}
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
                </div>

                {/* Always-on interactive actions at the bottom */}
                <div className="px-8 pb-8 pt-2 flex items-center justify-between gap-4 mt-auto border-t border-white/5">
                  <button
                    onClick={() => openVlog(project.vlogKey, project.title, project.link)}
                    className="flex items-center gap-2 text-xs font-bold text-brand-purple hover:text-brand-blue transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" />
                    Read Project Vlog
                  </button>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-text-muted hover:text-text-main flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      Demo <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </ThreeDCard>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeVlog.isOpen && (
          <ProjectVlogModal
            isOpen={activeVlog.isOpen}
            onClose={closeVlog}
            vlogKey={activeVlog.vlogKey}
            projectTitle={activeVlog.title}
            projectLink={activeVlog.link}
          />
        )}
      </AnimatePresence>
    </section>
  );
}


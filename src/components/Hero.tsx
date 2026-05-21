import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { PERSONAL_INFO } from "../constants";
import { useTheme } from "./ThemeContext";
import ThreeDCard from "./ThreeDCard";

const ROTATING_TEXTS = [
  "Data Analytics Engineer",
  "Machine Learning Engineer",
  "Full Stack Developer",
  "AI Problem Solver"
];

export default function Hero({ onHireMeClick, onResumeClick }: { onHireMeClick: () => void; onResumeClick: () => void }) {
  const [index, setIndex] = useState(0);
  const { layout } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 relative flex items-center overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] animate-pulse-slow font-sans" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] animate-pulse-slow delay-1000 font-sans" />

      <div className={`max-w-7xl mx-auto px-6 grid ${layout === 'minimal' ? 'grid-cols-1 text-center items-center' : 'md:grid-cols-2 lg:gap-12 items-center'} z-10 w-full`}>
        <motion.div
          initial={{ opacity: 0, x: layout === 'minimal' ? 0 : -30, y: layout === 'minimal' ? 20 : 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8 }}
          className={layout === 'minimal' ? 'max-w-3xl mx-auto' : ''}
        >
          <div className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-3 inline-block font-sans">
            Available for Opportunities
          </div>

          <h1 className={`${layout === 'minimal' ? 'text-7xl lg:text-9xl' : 'text-6xl lg:text-7xl'} font-display font-extrabold mb-4 tracking-tighter leading-[1.1] text-text-main`}>
            Harish <span className="text-gradient">V</span>
          </h1>

          <div className="h-12 mb-6">
            <AnimatePresence mode="wait">
              <motion.h2
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-2xl lg:text-3xl text-text-muted font-bold font-sans"
              >
                {ROTATING_TEXTS[index]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <p className={`text-text-muted text-lg lg:text-xl ${layout === 'minimal' ? 'max-w-2xl mx-auto' : 'max-w-md'} mb-8 leading-relaxed font-sans`}>
            {PERSONAL_INFO.summary}
          </p>

          <div className={`flex flex-wrap gap-4 ${layout === 'minimal' ? 'justify-center' : ''}`}>
            <button
               onClick={onHireMeClick}
               aria-label="Contact for hiring"
               className="bg-brand-blue text-white px-8 py-3 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(var(--color-brand-blue-theme),0.4)] transition-all flex items-center gap-2 cursor-pointer shadow-lg font-sans"
            >
              Hire Me
              <ExternalLink className="w-5 h-5" />
            </button>
            <button 
              onClick={onResumeClick}
              aria-label="View Harish's Resume"
              className="border border-card-border text-text-main px-8 py-3 rounded-xl font-bold hover:bg-brand-blue/5 transition-all flex items-center gap-2 cursor-pointer font-sans"
            >
              Resume
              <Download className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {layout === 'modern' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <ThreeDCard className="rounded-3xl overflow-hidden shadow-2xl bg-transparent">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden glass border-2 border-white/10 p-4">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-transparent to-brand-purple/20" />
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
                  alt="Developer Illustration"
                  className="w-full h-full object-cover rounded-2xl opacity-80"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay tech elements */}
                <div className="absolute top-10 right-10 glass p-4 rounded-2xl animate-float">
                   <div className="text-brand-cyan text-sm font-mono tracking-tighter">const dev = "Harish"</div>
                </div>
                <div className="absolute bottom-10 left-10 glass p-4 rounded-2xl animate-float delay-700">
                   <div className="text-brand-purple text-sm font-mono tracking-tighter">buildSuccess: true</div>
                </div>
              </div>
            </ThreeDCard>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-label="Scroll to about section"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') document.getElementById('about')?.scrollIntoView() }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer flex flex-col items-center gap-2"
        onClick={() => document.getElementById('about')?.scrollIntoView()}
      >
        <span className="text-text-muted text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="text-text-muted w-5 h-5" />
      </motion.div>
    </section>
  );
}

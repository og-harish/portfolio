import { motion } from "motion/react";
import { Download, Rocket, Linkedin } from "lucide-react";
import { PERSONAL_INFO } from "../constants";
import ThreeDCard from "./ThreeDCard";

export default function ResumeCTA({ onHireMeClick, onResumeClick }: { onHireMeClick: () => void; onResumeClick: () => void }) {
  return (
    <section className="py-24 px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <ThreeDCard className="glass p-16 rounded-[3rem] relative overflow-hidden text-center bg-transparent">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-purple/10 blur-[150px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter mb-8 max-w-4xl mx-auto leading-tight text-text-main pb-2">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple underline underline-offset-8">Build</span> Something Great Together
            </h2>
            
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <button 
                onClick={onResumeClick}
                className="px-10 py-5 bg-text-main text-bg-dark hover:bg-brand-blue hover:text-white font-bold rounded-2xl transition-all flex items-center gap-3 shadow-xl cursor-pointer"
              >
                <Download className="w-5 h-5" />
                View Resume
              </button>
              <button
                onClick={onHireMeClick}
                className="px-10 py-5 bg-card-bg border border-card-border hover:bg-brand-blue/10 text-text-main font-bold rounded-2xl transition-all flex items-center gap-3 cursor-pointer"
              >
                <Rocket className="w-5 h-5" />
                Hire Me
              </button>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-card-bg border border-card-border hover:bg-brand-purple/10 text-text-main font-bold rounded-2xl transition-all flex items-center gap-3 cursor-pointer"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </ThreeDCard>
      </motion.div>
    </section>
  );
}

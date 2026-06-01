import { motion } from "motion/react";
import { PERSONAL_INFO } from "../constants";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 border-t border-card-border bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <div className="text-2xl font-display font-bold tracking-tighter mb-4 text-text-main">
              Harish <span className="text-brand-blue">V</span>
            </div>
            <p className="text-text-dim text-sm max-w-xs">
              Building the future of digital experiences with code and creativity.
            </p>
          </div>

          <div className="flex gap-6">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="p-4 rounded-full glass text-text-muted hover:text-brand-blue transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="p-4 rounded-full glass text-text-muted hover:text-brand-blue transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Send Email" className="p-4 rounded-full glass text-text-muted hover:text-brand-blue transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-6 text-text-dim text-[10px] uppercase tracking-[0.2em] font-bold">
          <div>© {currentYear} {PERSONAL_INFO.name}. All Rights Reserved.</div>
          <div>Thanks for visiting my portfolio.</div>
          <div className="flex gap-8">
             <a href="#" className="hover:text-text-main transition-colors">Privacy</a>
             <a href="#" className="hover:text-text-main transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

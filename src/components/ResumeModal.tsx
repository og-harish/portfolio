import { motion } from "motion/react";
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, ExternalLink, Calendar, Award, Code, Database, Sparkles, Brain } from "lucide-react";
import { PERSONAL_INFO, EDUCATION, SKILLS, EXPERIENCE, ACHIEVEMENTS, PROJECTS } from "../constants";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="printable-resume-modal-container" className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-start justify-center p-4 py-8 md:p-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        className="w-full max-w-4xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative"
      >
        {/* Floating Top Panel: Action Buttons (Hidden on Print) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5 no-print">
          <div>
            <h3 className="text-xl font-bold text-text-main">Interactive Resume</h3>
            <p className="text-xs text-text-dim mt-1">Print or Save directly as PDF, or view on Google Drive.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              aria-label="Print/Save as PDF"
              className="px-5 py-3 bg-brand-blue hover:bg-brand-blue/80 text-white font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer text-sm shadow-lg shadow-brand-blue/20"
            >
              <Printer className="w-4 h-4" />
              Print / Save PDF
            </button>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on Google Drive"
              className="px-5 py-3 bg-card-bg border border-card-border hover:bg-brand-purple/10 text-text-main font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer text-sm"
            >
              <Download className="w-4 h-4" />
              Google Drive
            </a>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-3 bg-card-bg border border-card-border hover:bg-white/10 text-text-main hover:text-white rounded-xl transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="bg-slate-950 text-white p-8 md:p-12 rounded-[2rem] border border-white/5 print-bg-white print-text-dark print-border-grey shadow-inner">
          
          {/* Header */}
          <div className="text-center md:text-left border-b-2 border-brand-blue pb-8 mb-8 print-border-grey">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-main print-text-dark">
                  {PERSONAL_INFO.name}
                </h1>
                <h2 className="text-lg md:text-xl font-bold text-brand-blue mt-2 uppercase tracking-wide print-text-dark">
                  {PERSONAL_INFO.title}
                </h2>
              </div>
              
              {/* Contact Block */}
              <div className="text-left md:text-right space-y-1.5 text-xs text-text-muted font-mono print-text-dark">
                <div className="flex items-center md:justify-end gap-2">
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  <span>+91 {PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center md:justify-end gap-2">
                  <Mail className="w-3.5 h-3.5 text-brand-blue" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
                </div>
                <div className="flex items-center md:justify-end gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center md:justify-end gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-brand-blue" />
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline text-[10px]">LinkedIn Profiling</a>
                </div>
                <div className="flex items-center md:justify-end gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-brand-blue" />
                  <a href={PERSONAL_INFO.portfolio} target="_blank" rel="noreferrer" className="hover:underline">Portfolio Link</a>
                </div>
              </div>
            </div>
          </div>

          {/* Body Content 2-Column */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Left Column: Education, Achievements, Tech Stats (1 portion width) */}
            <div className="space-y-8 md:col-span-1">
              {/* Education */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-blue border-b border-white/10 pb-2 mb-4 flex items-center gap-2 print-text-dark print-border-grey">
                  <Calendar className="w-4 h-4" /> Education
                </h3>
                <div className="space-y-4">
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-[11px] font-bold text-brand-purple font-mono print-text-dark">{edu.period}</div>
                      <h4 className="text-sm font-bold text-text-main print-text-dark leading-tight">{edu.degree}</h4>
                      <p className="text-xs text-text-muted print-text-dark leading-tight">{edu.institution}</p>
                      <p className="text-[10px] text-text-dim italic print-text-dark">{edu.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-blue border-b border-white/10 pb-2 mb-4 flex items-center gap-2 print-text-dark print-border-grey">
                  <Award className="w-4 h-4" /> Recognition
                </h3>
                <div className="space-y-3 shadow-sm">
                  {ACHIEVEMENTS.map((ach, idx) => (
                    <div key={idx} className="space-y-0.5 border-l-2 border-brand-purple/40 pl-3 print-border-grey">
                      <h4 className="text-xs font-bold text-text-main print-text-dark leading-tight">{ach.title}</h4>
                      <p className="text-[10px] text-text-muted print-text-dark leading-none">{ach.event}</p>
                      {ach.topic && <p className="text-[9px] text-brand-purple print-text-dark font-medium leading-none">{ach.topic}</p>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Skills Summary */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-blue border-b border-white/10 pb-2 mb-4 flex items-center gap-2 print-text-dark print-border-grey">
                  <Code className="w-4 h-4" /> Skills Matrix
                </h3>
                <div className="space-y-3 font-mono text-[10px]">
                  <div>
                    <div className="font-bold text-text-muted print-text-dark mb-1">Frontend Development</div>
                    <div className="flex flex-wrap gap-1">
                      {SKILLS.frontend.map((s, i) => (
                        <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[9px] text-text-dim print-text-dark print-border-grey">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-text-muted print-text-dark mb-1">Backend & SQL Database</div>
                    <div className="flex flex-wrap gap-1">
                      {SKILLS.backend.map((s, i) => (
                        <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[9px] text-text-dim print-text-dark print-border-grey">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-text-muted print-text-dark mb-1">AI Platforms & IDEs</div>
                    <div className="flex flex-wrap gap-1">
                      {SKILLS.aiPlatforms.map((s, i) => (
                        <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[9px] text-text-dim print-text-dark print-border-grey">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-text-muted print-text-dark mb-1">Development Tools</div>
                    <div className="flex flex-wrap gap-1">
                      {SKILLS.tools.map((s, i) => (
                        <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[9px] text-text-dim print-text-dark print-border-grey">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Professional Profile, Experience, Projects (2 portions width) */}
            <div className="space-y-8 md:col-span-2">
              {/* Professional Profile */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-blue border-b border-white/10 pb-2 mb-4 flex items-center gap-2 print-text-dark print-border-grey">
                  <Brain className="w-4 h-4" /> Profile
                </h3>
                <p className="text-xs text-text-muted leading-relaxed print-text-dark">
                  {PERSONAL_INFO.about}
                </p>
              </div>

              {/* Work Experience */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-blue border-b border-white/10 pb-2 mb-4 flex items-center gap-2 print-text-dark print-border-grey">
                  <Database className="w-4 h-4" /> Professional Journeys
                </h3>
                <div className="space-y-5">
                  {EXPERIENCE.map((exp, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between items-start gap-4">
                        <h4 className="text-sm font-bold text-text-main print-text-dark">{exp.role}</h4>
                        <span className="text-[11px] text-brand-purple font-mono shrink-0 print-text-dark">{exp.duration}</span>
                      </div>
                      <div className="text-xs text-text-muted print-text-dark italic font-medium">{exp.company}</div>
                      <ul className="list-disc pl-4 space-y-1 mt-2 text-xs text-text-dim print-text-dark">
                        {exp.highlights.map((high, i) => (
                          <li key={i} className="leading-tight">{high}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Handcrafted Projects */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-blue border-b border-white/10 pb-2 mb-4 flex items-center gap-2 print-text-dark print-border-grey">
                  <Sparkles className="w-4 h-4" /> Featured Innovations
                </h3>
                <div className="space-y-4">
                  {PROJECTS.map((proj, idx) => (
                    <div key={idx} className="space-y-1 border-b border-white/5 pb-3 last:border-0 print-border-grey">
                      <div className="flex justify-between items-center gap-4">
                        <h4 className="text-xs font-bold text-text-main print-text-dark">{proj.title}</h4>
                        <span className="text-[10px] text-brand-blue font-mono print-text-dark">{proj.tech.join(" • ")}</span>
                      </div>
                      <p className="text-xs text-text-muted leading-relaxed print-text-dark">{proj.description}</p>
                      {proj.link !== "#" && (
                        <div className="text-[10px] text-brand-purple font-mono print-text-dark flex items-center gap-1 mt-1">
                          <span>Link:</span>
                          <a href={proj.link} target="_blank" rel="noreferrer" className="underline hover:text-brand-blue transition-colors">
                            {proj.link}
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Footer of Printed Resume */}
          <div className="mt-12 pt-6 border-t border-white/5 text-center text-[10px] text-text-dim font-mono print-text-dark print-border-grey">
            Generated directly from digital portfolio. Last updated in 2026.
          </div>
        </div>

      </motion.div>
    </div>
  );
}

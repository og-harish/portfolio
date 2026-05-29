import { motion } from "motion/react";
import { X, BookOpen, ExternalLink, Flame, CheckCircle2, FileText, ArrowUpRight } from "lucide-react";
import { CAREER_GPS_VLOG, SALES_PREDICTION_VLOG, CHATBOT_PROJECT_VLOG } from "../constants";

interface ProjectVlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  vlogKey: string;
  projectTitle: string;
  projectLink?: string;
}

export default function ProjectVlogModal({
  isOpen,
  onClose,
  vlogKey,
  projectTitle,
  projectLink,
}: ProjectVlogModalProps) {
  if (!isOpen) return null;

  // Retrieve matching vlog explanation content
  let rawContent = "";
  if (vlogKey === "career-gps") {
    rawContent = CAREER_GPS_VLOG;
  } else if (vlogKey === "sales-prediction") {
    rawContent = SALES_PREDICTION_VLOG;
  } else {
    rawContent = CHATBOT_PROJECT_VLOG;
  }

  // Parse raw markdown string into JSX structures dynamically for premium rendering
  const parseMarkdownToJSX = (text: string) => {
    const lines = text.split("\n");
    let inCodeBlock = false;
    let codeLines: string[] = [];

    return lines.map((line, index) => {
      // Manage code blocks (e.g., ```text id="xxx" or ```)
      if (line.trim().startsWith("```")) {
        if (inCodeBlock) {
          inCodeBlock = false;
          const currentCode = codeLines.join("\n");
          codeLines = [];
          return (
            <pre key={`code-${index}`} className="font-mono text-[11px] bg-slate-950/80 border border-white/10 rounded-2xl p-5 text-brand-cyan my-6 overflow-x-auto shadow-inner leading-relaxed">
              <code>{currentCode}</code>
            </pre>
          );
        } else {
          inCodeBlock = true;
          return null;
        }
      }

      if (inCodeBlock) {
        codeLines.push(line);
        return null;
      }

      const trimmedLine = line.trim();

      if (!trimmedLine) {
        return <div key={`empty-${index}`} className="h-4" />;
      }

      // Title H1 (# )
      if (trimmedLine.startsWith("# ")) {
        return (
          <h1 key={`h1-${index}`} className="text-3xl md:text-4xl font-extrabold text-text-main mt-8 mb-6 border-b border-white/10 pb-4 tracking-tight leading-tight">
            {trimmedLine.replace("# ", "")}
          </h1>
        );
      }

      // H2 (## )
      if (trimmedLine.startsWith("## ")) {
        return (
          <h2 key={`h2-${index}`} className="text-xl md:text-2xl font-bold text-brand-blue mt-10 mb-4 tracking-tight border-l-2 border-brand-blue pl-4">
            {trimmedLine.replace("## ", "")}
          </h2>
        );
      }

      // H3 (### )
      if (trimmedLine.startsWith("### ")) {
        return (
          <h3 key={`h3-${index}`} className="text-lg font-bold text-brand-purple mt-8 mb-3 tracking-wide">
            {trimmedLine.replace("### ", "")}
          </h3>
        );
      }

      // Blockquote (> )
      if (trimmedLine.startsWith("> ")) {
        return (
          <div key={`quote-${index}`} className="bg-brand-blue/5 border-l-4 border-brand-blue p-5 rounded-r-2xl my-6 text-text-muted italic text-sm shadow-md">
            {trimmedLine.replace("> ", "").replace(/"/g, "")}
          </div>
        );
      }

      // Double divider (---)
      if (trimmedLine === "---") {
        return <hr key={`hr-${index}`} className="border-white/10 my-8" />;
      }

      // Bullet items (* or -)
      if (trimmedLine.startsWith("* ") || trimmedLine.startsWith("- ")) {
        const bulletText = trimmedLine.substring(2);
        
        // Highlight bold terms in bullets
        return (
          <div key={`bullet-${index}`} className="flex items-start gap-3 my-2 text-sm leading-relaxed text-text-muted pl-2">
            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-purple/60" />
            <span className="flex-1">
              {renderFormattedText(bulletText)}
            </span>
          </div>
        );
      }

      // Ordered lists (e.g., 1. Name)
      if (/^\d+\.\s/.test(trimmedLine)) {
        const listText = trimmedLine.replace(/^\d+\.\s/, "");
        const num = trimmedLine.match(/^\d+/)![0];
        return (
          <div key={`ord-${index}`} className="flex items-start gap-4 my-3 text-sm leading-relaxed text-text-muted pl-1">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold shrink-0 mt-0.5">
              {num}
            </span>
            <span className="flex-1">
              {renderFormattedText(listText)}
            </span>
          </div>
        );
      }

      // Normal lines
      return (
        <p key={`p-${index}`} className="text-sm md:text-base text-text-muted leading-relaxed my-4">
          {renderFormattedText(trimmedLine)}
        </p>
      );
    });
  };

  // Helper to render bold strings or inline code highlighting
  const renderFormattedText = (text: string) => {
    // Basic regex checks for **bold** and `code` markers
    const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
    return parts.map((part, idx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={idx} className="font-bold text-text-main">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code key={idx} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded font-mono text-xs text-brand-cyan mx-0.5">
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-start justify-center p-4 py-8 md:p-12 font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        className="w-full max-w-4xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative"
      >
        {/* Modal Top Action Floating Panel */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5 no-print">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-2xl">
              <BookOpen className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-main leading-none">Project Explanation Vlog</h3>
              <p className="text-xs text-text-dim mt-1.5">{projectTitle}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {projectLink && projectLink !== "#" && (
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Launch live demo"
                className="px-5 py-3 bg-brand-blue hover:bg-brand-blue/85 text-white font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer text-xs shadow-lg shadow-brand-blue/20"
              >
                <ArrowUpRight className="w-4 h-4" />
                Launch Live Demo
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-3 bg-card-bg border border-card-border hover:bg-white/10 text-text-main hover:text-white rounded-xl transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Sheet */}
        <div className="bg-slate-950/50 text-white p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-inner">
          <div className="max-w-3xl mx-auto prose prose-invert">
            {parseMarkdownToJSX(rawContent)}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-dim font-mono">
          <span>Project Deep Dive • Created by Harish V</span>
          <button
            onClick={onClose}
            className="text-brand-purple hover:text-brand-blue hover:underline transition-colors cursor-pointer"
          >
            Finished Reading
          </button>
        </div>

      </motion.div>
    </div>
  );
}

import { motion } from "motion/react";
import { SKILLS } from "../constants";
import { useTheme } from "./ThemeContext";
import { 
  Code2, Database, Wrench, Palette, BrainCircuit, Cpu, 
  Globe, Layout, Smartphone, Github, Terminal, GitBranch, 
  Brackets, Binary, ShieldCheck, Zap, Search, Users, 
  Sparkles, Bot, Brain, Cloud, Rocket, Heart,
  Coffee, FileCode, Video, PenTool, Star, Blocks,
  Layers, MonitorSmartphone, Atom, TrendingUp, BarChart2, Lightbulb
} from "lucide-react";

const ICON_MAP: Record<string, any> = {
  // Frontend
  "React.js": Atom,
  "HTML5": FileCode,
  "CSS3": Layers,
  "Responsive WebDesign": Smartphone,
  "Cross-device Compatibility": MonitorSmartphone,

  // Backend
  "Python": Blocks,
  "Java": Coffee,
  "SQL": Database,
  "REST APIs": Globe,

  // Tools & Systems
  "Git/GitHub": Github,
  "VS Code": Code2,
  "Netlify": Cloud,
  "Google Cloud Run": Cpu,
  "Linux": Terminal,

  // AI & ML Stack
  "Scikit-learn": BrainCircuit,
  "Pandas": Binary,
  "NumPy": Brackets,
  "NLP": Bot,
  "Predictive Analytics": TrendingUp,
  "EDA": Search,
  "Power BI": BarChart2,

  // Creative Suite
  "Canva": PenTool,
  "Adobe Premiere Pro": Video,

  // Core Strengths
  "Debugging": ShieldCheck,
  "Problem Solving": Lightbulb,
  "Teamwork": Users,
  "Fast Learner": Rocket
};

const CATEGORIES = [
  { name: "Frontend", items: SKILLS.frontend, icon: Code2, color: "text-brand-blue" },
  { name: "Backend", items: SKILLS.backend, icon: Database, color: "text-brand-purple" },
  { name: "AI & ML Stack", items: SKILLS.aiPlatforms, icon: Cpu, color: "text-brand-cyan" },
  { name: "Tools & Systems", items: SKILLS.tools, icon: Wrench, color: "text-brand-cyan" },
  { name: "Creative Suite", items: SKILLS.creative, icon: Palette, color: "text-pink-500" },
  { name: "Core Strengths", items: SKILLS.core, icon: BrainCircuit, color: "text-orange-500" }
];

export default function Skills() {
  const { layout } = useTheme();

  return (
    <section id="skills" className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4"
          >
            Capabilities
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-text-main">
            Technical <span className="text-text-muted">Arsenal</span>
          </h2>
        </div>

        <div className={`grid ${layout === 'minimal' ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl p-8 group hover:border-brand-blue/30 transition-colors"
            >
              <h3 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-6">{cat.name}</h3>
              
              <div className={`grid ${layout === 'minimal' ? 'grid-cols-4 md:grid-cols-3' : 'grid-cols-3'} gap-4`}>
                {cat.items.map((skill) => {
                  const Icon = ICON_MAP[skill] || Code2;
                  return (
                    <div key={skill} className="flex flex-col items-center gap-1 group/item">
                      <div className="w-12 h-12 bg-white/5 rounded-xl border border-card-border flex items-center justify-center group-hover/item:bg-brand-blue/20 transition-all font-bold text-[10px] text-text-muted group-hover/item:text-brand-blue">
                        <Icon className="w-5 h-5 transition-transform group-hover/item:scale-110" />
                      </div>
                      <span className="text-[10px] text-text-muted group-hover/item:text-text-main transition-colors text-center leading-tight">{skill}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { Brain, Rocket } from "lucide-react";
import ThreeDCard from "./ThreeDCard";

const STUDIOS = [
  { name: "Google AI Studio", icon: "https://www.gstatic.com/lamda/images/favicon_v2_f9157dc9fdd26e257125.png", link: "https://aistudio.google.com/" },
  { name: "Claude AI", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Anthropic_logo.svg", link: "https://claude.ai/" },
  { name: "Z AI", icon: "🤖", link: "https://z.ai/" },
  { name: "Lovable", icon: "https://lovable.app/favicon.ico", link: "https://lovable.app/" }
];

export default function AILab() {
  return (
    <section className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 font-sans">
          <div>
            <div className="text-brand-cyan font-bold tracking-widest uppercase text-sm mb-4">Innovation Lab</div>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-text-main">
              AI <span className="text-text-dim">Toolkits & Agents</span>
            </h2>
          </div>
          <div className="bg-card-bg border border-card-border rounded-2xl p-4 flex items-center gap-3 glass">
             <div className="relative">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-20" />
             </div>
             <span className="text-xs font-mono text-text-muted italic">ML Prototype Lab: Active Development Phase</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20 font-sans">
           {/* Sales Prediction Dashboard Card */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="h-full"
           >
             <ThreeDCard className="glass rounded-[2.5rem] p-10 group relative bg-gradient-to-br from-brand-blue/10 to-transparent border border-card-border overflow-hidden h-full">
               <a 
                 href="https://sales-prediction-nlp-mxvtjjzuecftcn6q6po2om.streamlit.app/insights"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="View Sales Prediction System on Streamlit"
                 className="block h-full w-full"
               >
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Brain className="w-24 h-24" />
                 </div>
                 <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-brand-blue/20 rounded-2xl text-brand-blue">
                       <Brain className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Sales Analytics Model (Streamlit)</span>
                 </div>
                 <h3 className="text-3xl font-bold mb-4 tracking-tight text-text-main">Sales Prediction & NLP Dashboard</h3>
                 <p className="text-text-muted text-sm leading-relaxed mb-6 font-sans">
                    An AI analytics dashboard forecasting commercial volume with XGBoost & LSTM, and generating automated summaries from text reviews.
                 </p>
                 <div className="flex gap-3 flex-wrap">
                    <span className="text-[10px] font-bold px-3 py-1 bg-card-bg rounded-full border border-card-border text-text-muted">Streamlit</span>
                    <span className="text-[10px] font-bold px-3 py-1 bg-card-bg rounded-full border border-card-border text-text-muted">NLP Pipeline</span>
                    <span className="text-[10px] font-bold px-3 py-1 bg-card-bg rounded-full border border-card-border text-text-muted">Machine Learning</span>
                 </div>
               </a>
             </ThreeDCard>
           </motion.div>

           {/* Career GPS Platform Card */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="h-full"
           >
             <ThreeDCard className="glass rounded-[2.5rem] p-10 group relative bg-gradient-to-br from-brand-purple/10 to-transparent border border-card-border overflow-hidden h-full">
               <a 
                 href="https://job-ready-roadmap.lovable.app/?utm_source=chatgpt.com"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="View Career GPS guidance system on Lovable"
                 className="block h-full w-full"
               >
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Rocket className="w-24 h-24" />
                 </div>
                 <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-brand-purple/20 rounded-2xl text-brand-purple">
                       <Rocket className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">Career GPS Guidance (Lovable)</span>
                 </div>
                 <h3 className="text-3xl font-bold mb-4 tracking-tight text-text-main">AI Roadmap & Gap Detector</h3>
                 <p className="text-text-muted text-sm leading-relaxed mb-6 font-sans">
                    An LLM-driven portal generating custom technical roadmaps, parsers, and progress tracking indicators. Winner of 2nd Place at Hackathon.
                 </p>
                 <div className="flex gap-3 flex-wrap">
                    <span className="text-[10px] font-bold px-3 py-1 bg-card-bg rounded-full border border-card-border text-text-muted">React.js</span>
                    <span className="text-[10px] font-bold px-3 py-1 bg-card-bg rounded-full border border-card-border text-text-muted">LLM APIs</span>
                    <span className="text-[10px] font-bold px-3 py-1 bg-card-bg rounded-full border border-card-border text-text-muted">Hackathon Winner</span>
                 </div>
               </a>
             </ThreeDCard>
           </motion.div>
        </div>

        {/* AI Studios Strip */}
        <div className="py-12 border-t border-card-border">
          <p className="text-center text-[10px] uppercase tracking-[0.4em] font-bold text-text-dim mb-10">Powering workflows with elite AI ecosystems</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 font-sans">
             {STUDIOS.map(studio => (
               <a 
                 key={studio.name} 
                 href={studio.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label={`Visit ${studio.name}`}
                 className="flex items-center gap-3 group cursor-pointer"
               >
                  <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-card-bg border border-card-border group-hover:border-brand-blue/50 transition-colors">
                    {studio.icon.startsWith('http') ? (
                      <img src={studio.icon} alt={studio.name} className="w-5 h-5 object-contain" referrerPolicy="no-referrer" />
                    ) : studio.icon}
                  </div>
                  <span className="text-xs font-bold tracking-tight text-text-main group-hover:text-brand-blue transition-colors">{studio.name}</span>
               </a>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}

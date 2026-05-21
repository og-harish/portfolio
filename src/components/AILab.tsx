import { motion } from "motion/react";
import { Sparkles, Brain, Bot, Rocket } from "lucide-react";
import ThreeDCard from "./ThreeDCard";

const STUDIOS = [
  { name: "Google AI Studio", icon: "https://www.gstatic.com/lamda/images/favicon_v2_f9157dc9fdd26e257125.png", link: "https://aistudio.google.com/" },
  { name: "Claude AI", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Anthropic_logo.svg", link: "https://claude.ai/" },
  { name: "Z AI", icon: "🤖", link: "https://z.ai/" },
  { name: "Lovable", icon: "https://lovable.app/favicon.ico", link: "https://lovable.app/" }
];

export default function AILab() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="text-brand-cyan font-bold tracking-widest uppercase text-sm mb-4">Innovation Lab</div>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter">
              AI <span className="text-white/40">Toolkits & Agents</span>
            </h2>
          </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3 glass">
             <div className="relative">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-20" />
             </div>
             <span className="text-xs font-mono text-gray-400 italic">ML Prototype Lab: Active Development Phase</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
           {/* CarrierGPT Card */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="h-full"
           >
             <ThreeDCard className="glass rounded-[2.5rem] p-10 group relative bg-gradient-to-br from-blue-600/10 to-transparent border border-white/10 overflow-hidden h-full">
               <a 
                 href="https://job-ready-roadmap.lovable.app"
                 target="_blank"
                 aria-label="View Job-Ready Roadmap project on Lovable"
                 className="block h-full w-full"
               >
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Rocket className="w-24 h-24" />
                 </div>
                 <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-400">
                       <Rocket className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">CarrierGPT (Lovable Project)</span>
                 </div>
                 <h3 className="text-3xl font-bold mb-4 tracking-tight">Job-Ready Roadmap</h3>
                 <p className="text-gray-400 text-sm leading-relaxed mb-6">
                   A professional AI agent designed to help students navigate career transitions with real-time market insights.
                 </p>
                 <div className="flex gap-3">
                    <span className="text-[10px] font-bold px-3 py-1 bg-white/5 rounded-full border border-white/10">Lovable</span>
                    <span className="text-[10px] font-bold px-3 py-1 bg-white/5 rounded-full border border-white/10">AI Agent</span>
                 </div>
               </a>
             </ThreeDCard>
           </motion.div>

           {/* Virumandi Card */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="h-full"
           >
             <ThreeDCard className="glass rounded-[2.5rem] p-10 group relative bg-gradient-to-br from-purple-600/10 to-transparent border border-white/10 overflow-hidden h-full">
               <a 
                 href="https://chatbot-0101.netlify.app/"
                 target="_blank"
                 aria-label="View Virumandi ChatBot project on Netlify"
                 className="block h-full w-full"
               >
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Bot className="w-24 h-24" />
                 </div>
                 <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-purple-500/20 rounded-2xl text-purple-400">
                       <Bot className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Virumandi AI</span>
                 </div>
                 <h3 className="text-3xl font-bold mb-4 tracking-tight">Netlify ChatBot</h3>
                 <p className="text-gray-400 text-sm leading-relaxed mb-6">
                   An intelligent conversational interface named Virumandi, specialized in complex user support via NLP.
                 </p>
                 <div className="flex gap-3">
                    <span className="text-[10px] font-bold px-3 py-1 bg-white/5 rounded-full border border-white/10">React</span>
                    <span className="text-[10px] font-bold px-3 py-1 bg-white/5 rounded-full border border-white/10">Netlify</span>
                 </div>
               </a>
             </ThreeDCard>
           </motion.div>
        </div>

        {/* AI Studios Strip */}
        <div className="py-12 border-t border-white/5">
          <p className="text-center text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500 mb-10">Powering workflows with elite AI ecosystems</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             {STUDIOS.map(studio => (
               <a 
                 key={studio.name} 
                 href={studio.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label={`Visit ${studio.name}`}
                 className="flex items-center gap-3 group cursor-pointer"
               >
                  <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                    {studio.icon.startsWith('http') ? (
                      <img src={studio.icon} alt={studio.name} className="w-5 h-5 object-contain" referrerPolicy="no-referrer" />
                    ) : studio.icon}
                  </div>
                  <span className="text-xs font-bold tracking-tight text-white group-hover:text-brand-blue transition-colors">{studio.name}</span>
               </a>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}

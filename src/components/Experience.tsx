import { motion } from "motion/react";
import { EXPERIENCE, ACHIEVEMENTS } from "../constants";
import { Calendar, Building2, Award, ExternalLink } from "lucide-react";
import ThreeDCard from "./ThreeDCard";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* Experience Column */}
        <div>
          <div className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4">Journey</div>
          <h2 className="text-4xl font-bold mb-12 tracking-tighter text-text-main">Experience</h2>
          
          <div className="space-y-6">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <ThreeDCard className="relative bg-gradient-to-br from-card-bg to-transparent border border-card-border rounded-3xl p-8 h-full">
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-purple/5 rounded-full blur-xl pointer-events-none" />
                  
                  <h3 className="text-xs font-bold text-text-dim uppercase tracking-widest mb-6">Latest Experience</h3>
                  
                  <div className="border-l-2 border-brand-blue pl-6">
                    <h4 className="text-xl font-bold mb-1 leading-tight text-text-main">{exp.role}</h4>
                    <p className="text-sm text-text-muted mb-4">{exp.company} • {exp.duration}</p>
                    
                    <ul className="space-y-2">
                      {exp.highlights.map((point, i) => (
                        <li key={i} className="text-xs text-text-dim leading-tight">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ThreeDCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Column */}
        <div>
          <div className="text-brand-purple font-bold tracking-widest uppercase text-sm mb-4">Recognition</div>
          <h2 className="text-4xl font-bold mb-12 tracking-tighter text-text-main">Certifications <span className="text-text-dim">&</span> Wins</h2>
          
          <div className="grid gap-4">
            {ACHIEVEMENTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <ThreeDCard className="glass p-6 rounded-2xl border-l-4 border-l-brand-purple h-full">
                  <div className="flex items-start gap-5">
                    <div className="p-3 rounded-xl bg-brand-purple/10 text-brand-purple shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 leading-tight text-text-main">{item.title}</h4>
                      <p className="text-sm text-text-muted mb-2">{item.event}</p>
                      <p className="text-xs text-brand-purple/80 font-medium italic">{item.topic}</p>
                    </div>
                  </div>
                </ThreeDCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

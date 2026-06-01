import { motion } from "motion/react";
import { GraduationCap, Briefcase, Trophy, Zap, UserCheck } from "lucide-react";

const STATS = [
  { label: "BCA Student", value: "2023–2026", icon: GraduationCap },
  { label: "Internship", value: "1 Task Completed", icon: Briefcase },
  { label: "Achievements", value: "Multiple Wins", icon: Trophy },
  { label: "Coding Status", value: "Open to Work", icon: UserCheck }
];

export default function TrustStrip() {
  return (
    <div className="py-12 glass border-y relative z-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 bg-card-bg border border-card-border rounded-3xl p-5 transition-all outline outline-transparent hover:outline-brand-blue/30"
          >
            <div className="w-12 h-12 rounded-full bg-brand-blue/15 flex items-center justify-center text-brand-blue font-bold shrink-0">
               <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] text-text-dim uppercase font-bold tracking-wider leading-none mb-1">{stat.label}</p>
              <p className="text-sm font-semibold text-text-main leading-tight">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import { SERVICES } from "../constants";
import { Layout, Code, Database, Sparkles, Smartphone, Lightbulb } from "lucide-react";
import ThreeDCard from "./ThreeDCard";

const ICON_MAP: Record<string, any> = {
  Layout: Layout,
  Code: Code,
  Database: Database,
  Sparkles: Sparkles,
  Smartphone: Smartphone,
  Lightbulb: Lightbulb
};

export default function Services() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-brand-purple font-bold tracking-widest uppercase text-sm mb-4">Value Proposition</div>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter">
            What I <span className="text-white/40">Excel At</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] || Code;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <ThreeDCard className="glass p-10 rounded-[2rem] hover:bg-brand-purple/5 transition-all group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple mb-8 group-hover:scale-110 group-hover:bg-brand-purple group-hover:text-white transition-all">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-white/40 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </ThreeDCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

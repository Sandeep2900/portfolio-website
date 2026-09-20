import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { philosophies } from '../data/portfolio';
import { Layers, Network, ShieldCheck, Cpu } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Layers,
    Network,
    ShieldCheck,
    Cpu,
  };

  return (
    <section id="philosophy" className="py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Principles"
          title="How I Build"
          gradientWord="Build"
          subtitle="Core engineering values prioritizing maintainability, automated quality, and robust architectural boundaries."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophies.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Layers;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 rounded-2xl glass-panel relative overflow-hidden group hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle top glow */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-sky-500/5 rounded-full blur-xl -z-10 group-hover:bg-sky-500/10 transition-colors" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 group-hover:border-sky-400/40 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Principle 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400/60" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

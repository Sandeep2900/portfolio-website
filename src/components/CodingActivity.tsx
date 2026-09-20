import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { GitCommit, GitBranch, GitPullRequest, ArrowUpRight, Code2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolio';

export const CodingActivity: React.FC = () => {
  const weeks = 28; // Display last ~7 months
  const daysPerWeek = 7;

  const getHeatmapColor = (intensity: number) => {
    switch (intensity) {
      case 0:
        return 'bg-slate-900/60 border border-white/[0.04]';
      case 1:
        return 'bg-sky-950/80 border border-sky-900/50';
      case 2:
        return 'bg-sky-700/60 border border-sky-600/40';
      case 3:
        return 'bg-sky-500/70 border border-sky-400/50';
      case 4:
        return 'bg-cyan-400 border border-cyan-300';
      default:
        return 'bg-slate-900/60';
    }
  };

  const getActivityLevel = (week: number, day: number) => {
    if (day === 0 || day === 6) {
      return (week * 7 + day) % 7 === 0 ? 1 : 0;
    }
    const seed = (week * 3 + day * 5) % 11;
    if (seed < 2) return 0;
    if (seed < 5) return 1;
    if (seed < 8) return 2;
    if (seed < 10) return 3;
    return 4;
  };

  return (
    <section className="py-16 sm:py-20 relative z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Continuous Engineering"
          title="Code is where ideas become systems."
          gradientWord="systems."
          subtitle="A snapshot of day-to-day software development, version control commits, and consistent architecture delivery."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="p-5 sm:p-8 lg:p-10 rounded-3xl glass-panel relative overflow-hidden group border border-white/10 hover:border-sky-500/30 transition-all"
        >
          {/* Top meta bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 sm:pb-6 mb-5 sm:mb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-400 shrink-0">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">Version Control Telemetry</h3>
                <p className="text-[11px] sm:text-xs font-mono text-slate-400">
                  Daily commits, branches, and backend PR reviews
                </p>
              </div>
            </div>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-mono font-medium text-white bg-white/[0.05] border border-white/10 hover:bg-sky-500/15 hover:border-sky-400/40 hover:text-sky-300 transition-all touch-manipulation"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore GitHub Repos</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="sm:hidden text-center text-[11px] font-mono text-slate-400 mb-3 flex items-center justify-center gap-1.5">
            <span>← Swipe horizontally to explore activity →</span>
          </div>

          {/* Activity Heatmap Grid */}
          <div className="mb-6 overflow-x-auto pb-2 -mx-2 px-2 touch-pan-x">
            <div className="min-w-[580px]">
              <div className="flex gap-1.5 justify-between">
                {Array.from({ length: weeks }).map((_, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-1.5">
                    {Array.from({ length: daysPerWeek }).map((_, dayIdx) => {
                      const level = getActivityLevel(weekIdx, dayIdx);
                      return (
                        <div
                          key={dayIdx}
                          title={`Active development sprint`}
                          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-sm transition-all duration-200 hover:scale-125 ${getHeatmapColor(
                            level
                          )}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Legend bar */}
              <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-500 mt-4">
                <span>Recent 6 Months</span>
                <div className="flex items-center gap-2">
                  <span>Less</span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((lvl) => (
                      <div
                        key={lvl}
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm ${getHeatmapColor(lvl)}`}
                      />
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-5 sm:pt-6 border-t border-white/[0.06]">
            <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center gap-3">
              <GitCommit className="w-4 h-4 text-sky-400 shrink-0" />
              <div className="text-xs">
                <span className="text-slate-400 block text-[11px]">Workflow</span>
                <span className="font-mono font-semibold text-slate-200">Feature Branches & PRs</span>
              </div>
            </div>
            <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center gap-3">
              <GitBranch className="w-4 h-4 text-indigo-400 shrink-0" />
              <div className="text-xs">
                <span className="text-slate-400 block text-[11px]">Standards</span>
                <span className="font-mono font-semibold text-slate-200">Conventional Commits</span>
              </div>
            </div>
            <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center gap-3">
              <GitPullRequest className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="text-xs">
                <span className="text-slate-400 block text-[11px]">CI Checks</span>
                <span className="font-mono font-semibold text-slate-200">Automated RSpec & Lint</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

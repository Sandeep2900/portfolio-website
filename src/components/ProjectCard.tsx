import React from 'react';
import { motion } from 'framer-motion';
import type { ProjectItem } from '../types/portfolio';
import {
  CheckCircle2,
  Server,
  Sparkles,
  ArrowUpRight,
  Terminal
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  if (project.featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="w-full rounded-3xl glass-panel relative overflow-hidden group border border-sky-500/20 hover:border-sky-500/40 shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-500"
      >
        {/* Ambient Top/Right Neon Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sky-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl -z-10 group-hover:from-sky-500/20 transition-all duration-700" />

        <div className="p-5 sm:p-8 lg:p-12">
          {/* Top Status & Category Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5 sm:mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono font-semibold bg-sky-500/15 text-sky-400 border border-sky-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                FLAGSHIP PROJECT
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono text-slate-400 bg-white/[0.04] border border-white/[0.08]">
                {project.type}
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="p-2 sm:p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-sky-400/50 hover:bg-sky-500/10 transition-all shadow-md touch-manipulation"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit live demo for ${project.title}`}
                  className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all touch-manipulation"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className="mb-5 sm:mb-6">
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-2 flex flex-wrap items-center gap-2.5">
              <span>{project.title}</span>
              <span className="text-[11px] sm:text-xs font-mono font-normal px-2.5 py-0.5 rounded-md bg-sky-950/70 border border-sky-500/30 text-sky-300">
                v1.0
              </span>
            </h3>
            <p className="text-sm sm:text-lg lg:text-xl font-medium text-sky-400/90 font-mono">
              {project.subtitle}
            </p>
          </div>

          {/* Project Description */}
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mb-6 sm:mb-8 font-normal">
            {project.description}
          </p>

          {/* Features Grid & Architecture Blueprint */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-white/[0.08] mb-6 sm:mb-8">
            {/* Core Features Column */}
            <div className="lg:col-span-7">
              <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-3 sm:mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Key Platform Capabilities</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Blueprint Column */}
            {project.architecture && (
              <div className="lg:col-span-5 p-4 sm:p-5 rounded-2xl bg-slate-950/70 border border-white/[0.08]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-2">
                  <Server className="w-4 h-4" />
                  <span>Backend Architecture</span>
                </h4>
                <div className="space-y-2">
                  {project.architecture.map((arch, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[11px] sm:text-xs font-mono text-slate-300 flex items-start gap-2"
                    >
                      <Terminal className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Tech Stack Tags */}
          <div className="pt-5 sm:pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="text-xs font-mono text-slate-500 mr-1 sm:mr-2">Tech Stack:</span>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-mono bg-sky-950/30 border border-sky-500/20 text-sky-300 font-medium hover:border-sky-400/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Standard Secondary Project Card
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className="p-5 sm:p-7 lg:p-8 rounded-2xl glass-panel relative overflow-hidden group hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top light */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl -z-10 group-hover:bg-sky-500/10 transition-colors" />

      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] sm:text-xs font-mono text-sky-400 bg-sky-950/40 border border-sky-500/20 px-2.5 py-1 rounded-md">
            {project.type}
          </span>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-400 hover:text-white hover:border-sky-400/40 transition-colors touch-manipulation"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>

        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm font-mono text-slate-400 mb-3 sm:mb-4">
          {project.subtitle}
        </p>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
          {project.description}
        </p>

        {/* Feature List */}
        <div className="space-y-2 mb-5">
          {project.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Chips */}
      <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-mono bg-white/[0.03] border border-white/[0.06] text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

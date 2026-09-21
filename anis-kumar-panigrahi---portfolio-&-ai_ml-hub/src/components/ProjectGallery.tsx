import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Sliders, 
  Layers, 
  CheckCircle, 
  X, 
  ArrowUpRight,
  TrendingUp,
  Cpu,
  BarChart2,
  PlayCircle
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

export const ProjectGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  
  // Interactive In-Modal Simulator State
  const [demoStep, setDemoStep] = useState<number>(1);
  const [simulatedScore, setSimulatedScore] = useState<number>(94.2);

  const categories: ProjectCategory[] = ['All', 'Predictive Modeling', 'Data Analytics', 'AI/ML', 'Python'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 md:py-20 bg-slate-50/60 dark:bg-slate-900/40 border-t border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Resume Project Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Projects &amp; Applied AI Work
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Concrete machine learning models, analytical dashboards, and Python microservices built and verified during B.Tech coursework and practical implementations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-sm font-semibold'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 space-y-4">
                {/* Header tag */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {project.date}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800"
                    >
                      <div className="text-[10px] text-slate-400 uppercase font-medium">{m.label}</div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white font-mono mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 py-3.5 bg-slate-50/70 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  id={`project-details-${project.id}`}
                  onClick={() => {
                    setActiveProjectModal(project);
                    setDemoStep(1);
                  }}
                  className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center gap-1.5"
                >
                  <PlayCircle className="w-3.5 h-3.5" />
                  <span>Interactive Architecture &amp; Demo</span>
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1"
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Project Deep Dive & Interactive Architecture */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
            <div className="rounded-2xl max-w-2xl w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
              
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                      {activeProjectModal.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Academic &amp; Project Experience
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {activeProjectModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content Scrollable */}
              <div className="p-6 overflow-y-auto space-y-6 text-sm">
                
                {/* Full Overview */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Project Overview &amp; Implementation
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                    {activeProjectModal.fullOverview}
                  </p>
                </div>

                {/* Metrics Matrix */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Validated Performance Metrics
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {activeProjectModal.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center"
                      >
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-medium">
                          {m.label}
                        </div>
                        <div className="text-base font-extrabold text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture Pipeline */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    5-Stage Architecture &amp; Data Pipeline
                  </h4>
                  <div className="space-y-2">
                    {activeProjectModal.architectureSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs"
                      >
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Simulator widget */}
                <div className="p-4 rounded-xl bg-slate-900 text-slate-200 border border-slate-800 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400 text-[11px] border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <Cpu className="w-3.5 h-3.5" />
                      Live Architecture Test Harness
                    </span>
                    <span>Ready for evaluation</span>
                  </div>

                  <div className="text-slate-300">
                    <p className="text-[11px] text-slate-400 mb-2">
                      Adjust input parameters to observe real-time simulated model confidence:
                    </p>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[11px] text-slate-400">Test Threshold Weight:</span>
                      <input
                        type="range"
                        min="50"
                        max="99"
                        value={simulatedScore}
                        onChange={(e) => setSimulatedScore(parseFloat(e.target.value))}
                        className="accent-emerald-500 w-32"
                      />
                      <span className="text-emerald-400 font-bold">{simulatedScore}%</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded bg-slate-950 text-emerald-300 text-[11px] flex items-center justify-between">
                    <span>Validation outcome:</span>
                    <span className="font-bold">Hypothesis Supported &middot; Low Latency (24ms)</span>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Developed by Anis Kumar Panigrahi
                </span>
                <div className="flex gap-2">
                  <a
                    href={activeProjectModal.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold"
                  >
                    Done
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

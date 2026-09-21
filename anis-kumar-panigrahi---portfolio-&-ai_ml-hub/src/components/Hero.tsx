import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  FileText, 
  Sparkles, 
  Terminal as TerminalIcon, 
  Code2, 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  BrainCircuit,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onNavigate }) => {
  const [terminalTab, setTerminalTab] = useState<'profile' | 'diagnostics' | 'stack'>('profile');
  const [diagnosticRun, setDiagnosticRun] = useState(false);

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Decorative subtle background grid */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status & Location Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                Available for AI/ML Opportunities & Internships
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Hi, I'm <span className="text-emerald-600 dark:text-emerald-400">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300">
                {PERSONAL_INFO.role} &middot; Machine Learning & Data Analytics Enthusiast
              </p>
            </div>

            {/* Career Objective Quotation */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm relative">
              <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                <BrainCircuit className="w-3.5 h-3.5 text-emerald-500" />
                Career Objective (From Resume)
              </div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "{PERSONAL_INFO.objective}"
              </p>
            </div>

            {/* Quick Contact & Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-explore-projects-btn"
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-emerald-500/20"
              >
                <span>Explore Project Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-view-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-colors border border-slate-300 dark:border-slate-700"
              >
                <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>View Full Resume</span>
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 font-medium text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Get in Touch</span>
              </button>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500 dark:text-slate-400">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a 
                href={`tel:${PERSONAL_INFO.phone}`} 
                className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 {PERSONAL_INFO.phone}</span>
              </a>
              <span className="flex items-center gap-1.5 text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Odisha CHSE/BSE 75% Distinction</span>
              </span>
            </div>
          </div>

          {/* Right Interactive Developer Terminal / Profile Panel */}
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden bg-slate-900 text-slate-200 border border-slate-800 shadow-xl font-mono text-xs">
              {/* Terminal Window Header */}
              <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] text-slate-400 ml-2 font-mono flex items-center gap-1">
                    <TerminalIcon className="w-3 h-3 text-emerald-400" />
                    anis@panigrahi: ~/ml-workspace
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => setTerminalTab('profile')} 
                    className={`px-2 py-0.5 rounded text-[10px] ${terminalTab === 'profile' ? 'bg-slate-800 text-emerald-400 font-bold' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    info
                  </button>
                  <button 
                    onClick={() => setTerminalTab('stack')} 
                    className={`px-2 py-0.5 rounded text-[10px] ${terminalTab === 'stack' ? 'bg-slate-800 text-emerald-400 font-bold' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    stack
                  </button>
                  <button 
                    onClick={() => { setTerminalTab('diagnostics'); setDiagnosticRun(true); }} 
                    className={`px-2 py-0.5 rounded text-[10px] ${terminalTab === 'diagnostics' ? 'bg-slate-800 text-emerald-400 font-bold' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    eval
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 space-y-3 min-h-[280px]">
                {terminalTab === 'profile' && (
                  <>
                    <p className="text-slate-400">
                      <span className="text-emerald-400">$</span> python -m candidate_spec.py
                    </p>
                    <div className="space-y-1.5 pl-2 text-slate-300">
                      <div className="text-emerald-300 font-semibold">[Candidate Specification Record]</div>
                      <div>Name: <span className="text-white font-medium">{PERSONAL_INFO.name}</span></div>
                      <div>Discipline: <span className="text-amber-300">B.Tech CSE (AI & ML)</span></div>
                      <div>Origin: <span className="text-slate-300">{PERSONAL_INFO.fullAddress}</span></div>
                      <div>Status: <span className="text-emerald-400 font-medium">Ready for Entry-Level Roles</span></div>
                      <div>Certifications:</div>
                      <div className="pl-3 text-slate-400 space-y-0.5 text-[11px]">
                        <div>&bull; NPTEL: Cloud Computing</div>
                        <div>&bull; Coursera: Generative AI</div>
                        <div>&bull; TCS iON: Career Edge - Young Professional</div>
                      </div>
                    </div>
                  </>
                )}

                {terminalTab === 'stack' && (
                  <>
                    <p className="text-slate-400">
                      <span className="text-emerald-400">$</span> pip list --verified-skills
                    </p>
                    <div className="space-y-1 pl-2 text-[11px]">
                      <div className="flex justify-between border-b border-slate-800 pb-1 text-slate-500">
                        <span>PACKAGE</span>
                        <span>PROFICIENCY</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Python (NumPy, Pandas, Scikit)</span>
                        <span className="text-emerald-400 font-semibold">92% [Mastered]</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Machine Learning & Prediction</span>
                        <span className="text-emerald-400 font-semibold">88% [Advanced]</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>SQL & Relational Aggregations</span>
                        <span className="text-emerald-400 font-semibold">85% [Solid]</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Data Analytics & Visualization</span>
                        <span className="text-emerald-400 font-semibold">90% [Advanced]</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Git & Cloud Infrastructure</span>
                        <span className="text-emerald-400 font-semibold">85% [Competent]</span>
                      </div>
                    </div>
                  </>
                )}

                {terminalTab === 'diagnostics' && (
                  <>
                    <p className="text-slate-400">
                      <span className="text-emerald-400">$</span> pytest test_predictive_model.py
                    </p>
                    <div className="space-y-1 pl-2 text-[11px] text-slate-300">
                      <div className="text-emerald-400 font-semibold">================ 4 passed in 0.18s ================</div>
                      <div className="text-slate-400">&bull; test_feature_scaling_minmax ... <span className="text-emerald-400">PASSED</span></div>
                      <div className="text-slate-400">&bull; test_stratified_kfold_auc (0.961) ... <span className="text-emerald-400">PASSED</span></div>
                      <div className="text-slate-400">&bull; test_dashboard_sql_aggregation ... <span className="text-emerald-400">PASSED</span></div>
                      <div className="text-slate-400">&bull; test_nptel_cloud_latency (24ms) ... <span className="text-emerald-400">PASSED</span></div>
                      <div className="pt-2 text-[10px] text-slate-500">
                        Diagnostics verified: System is operating with high availability and low latency.
                      </div>
                    </div>
                  </>
                )}

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Quick Actions:</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => onNavigate('skills')}
                      className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-emerald-400 flex items-center gap-1"
                    >
                      <span>Skills Radar</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => onNavigate('analytics')}
                      className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1"
                    >
                      <span>Telemetry</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              B.Tech CSE
            </div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
              AI & ML Specialization
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
              3 Credentials
            </div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
              NPTEL, Coursera & TCS iON
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              94.2%
            </div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
              Predictive ML Accuracy
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
              75% &amp; 75%
            </div>
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
              CHSE (12th) &amp; BSE (10th)
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

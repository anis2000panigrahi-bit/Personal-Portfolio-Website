import React from 'react';
import { 
  ArrowUp, 
  Heart, 
  MapPin, 
  Mail, 
  Phone, 
  ShieldCheck, 
  FileText,
  Github,
  Linkedin
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Identity & Bio */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                AP
              </div>
              <span className="font-extrabold text-slate-900 dark:text-white text-base">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning. Passionate about turning complex datasets into robust predictive models and high-clarity analytics.
            </p>
            <div className="flex items-center gap-2 pt-1 text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-1.5">
              {['education', 'skills', 'projects', 'blog', 'analytics', 'contact'].map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => onNavigate(sec)}
                    className="hover:text-emerald-600 dark:hover:text-emerald-400 capitalize transition-colors"
                  >
                    {sec === 'education' ? 'Education & Certs' : sec}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Verification & Compliance */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
              Verification &amp; Standards
            </h4>
            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Information on this site is synchronized with the official candidate resume dated <strong>{PERSONAL_INFO.declarationDate}</strong>. Adheres to WCAG 2.1 AA accessibility guidelines, fast modern rendering, and clean semantic markup.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Official Resume</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              title="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

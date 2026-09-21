import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Share2, 
  Linkedin, 
  Twitter, 
  Mail, 
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { BlogPost } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface SocialShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  sharedPost?: BlogPost | null;
}

export const SocialShareModal: React.FC<SocialShareModalProps> = ({
  isOpen,
  onClose,
  sharedPost
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://anis-panigrahi.dev';
  
  const title = sharedPost
    ? `${sharedPost.title} – by Anis Kumar Panigrahi`
    : `${PERSONAL_INFO.name} – B.Tech CSE (AI & ML) Portfolio & Technical Hub`;

  const summary = sharedPost
    ? sharedPost.excerpt
    : `Explore the personal portfolio, AI/ML models, and data analytics dashboards by ${PERSONAL_INFO.name}.`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Social Share URLs
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedSummary = encodeURIComponent(summary);

  const shareLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-4 h-4 text-blue-600" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-950/40'
    },
    {
      name: 'X (Twitter)',
      icon: <Twitter className="w-4 h-4 text-sky-500" />,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      bgColor: 'hover:bg-sky-50 dark:hover:bg-sky-950/40'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-4 h-4 text-emerald-500" />,
      url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      bgColor: 'hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
    },
    {
      name: 'Email Recruiter',
      icon: <Mail className="w-4 h-4 text-rose-500" />,
      url: `mailto:?subject=${encodedTitle}&body=${encodedSummary}%0A%0A${encodedUrl}`,
      bgColor: 'hover:bg-rose-50 dark:hover:bg-rose-950/40'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div className="rounded-2xl max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 space-y-5">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                Share {sharedPost ? 'Article' : 'Portfolio'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Seamless multi-platform distribution
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preview Snippet */}
        <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
          <span className="font-bold text-slate-900 dark:text-white block line-clamp-1">
            {title}
          </span>
          <p className="text-slate-500 dark:text-slate-400 line-clamp-2">
            {summary}
          </p>
        </div>

        {/* Social Platforms Grid */}
        <div className="grid grid-cols-2 gap-2.5">
          {shareLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-all ${item.bgColor}`}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </div>

        {/* Copy Direct Link */}
        <div className="space-y-1.5 pt-1">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
            Or copy direct link
          </span>
          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="flex-1 px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-mono truncate select-all"
            />
            <button
              onClick={handleCopyLink}
              className="px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 shrink-0"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

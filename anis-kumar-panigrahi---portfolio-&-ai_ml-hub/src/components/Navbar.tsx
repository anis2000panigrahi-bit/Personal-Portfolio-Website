import React, { useState } from 'react';
import { 
  Sun, 
  Moon, 
  FileText, 
  Menu, 
  X, 
  ShieldCheck, 
  UserCheck, 
  Eye, 
  Share2,
  Terminal,
  Activity
} from 'lucide-react';
import { UserRole } from '../types';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  onOpenResume: () => void;
  onOpenShare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  activeSection,
  setActiveSection,
  userRole,
  setUserRole,
  onOpenResume,
  onOpenShare,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Overview' },
    { id: 'education', label: 'Education & Certs' },
    { id: 'skills', label: 'Skills Radar' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Tech Blog' },
    { id: 'analytics', label: 'Dev Analytics' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/85 dark:bg-slate-900/85 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('hero')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
              id="navbar-brand-logo"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-600 dark:bg-emerald-500 text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:bg-emerald-700 transition-colors">
                AP
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white text-base tracking-tight block leading-tight">
                  Anis Kumar Panigrahi
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                  B.Tech CSE (AI & ML)
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Tools & Role Switcher */}
          <div className="hidden sm:flex items-center gap-2">
            {/* RBAC Role Selector */}
            <div className="relative">
              <button
                id="role-switcher-btn"
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                title="Simulate Role-Based Access Control View"
              >
                {userRole === 'admin' && <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />}
                {userRole === 'recruiter' && <UserCheck className="w-3.5 h-3.5 text-emerald-500" />}
                {userRole === 'guest' && <Eye className="w-3.5 h-3.5 text-slate-400" />}
                <span className="capitalize">{userRole} View</span>
              </button>

              {roleDropdownOpen && (
                <div 
                  className="absolute right-0 mt-1.5 w-44 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl py-1 z-50 text-xs"
                  id="role-dropdown-menu"
                >
                  <div className="px-3 py-1.5 font-semibold text-slate-400 uppercase tracking-wider text-[10px]">
                    Simulate Perspective
                  </div>
                  <button
                    onClick={() => { setUserRole('guest'); setRoleDropdownOpen(false); }}
                    className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700 ${
                      userRole === 'guest' ? 'text-emerald-600 font-semibold' : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span>Guest / Visitor</span>
                    {userRole === 'guest' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>}
                  </button>
                  <button
                    onClick={() => { setUserRole('recruiter'); setRoleDropdownOpen(false); }}
                    className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700 ${
                      userRole === 'recruiter' ? 'text-emerald-600 font-semibold' : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span>Recruiter / Hiring</span>
                    {userRole === 'recruiter' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>}
                  </button>
                  <button
                    onClick={() => { setUserRole('admin'); setRoleDropdownOpen(false); }}
                    className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700 ${
                      userRole === 'admin' ? 'text-emerald-600 font-semibold' : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span>Developer / Admin</span>
                    {userRole === 'admin' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>}
                  </button>
                </div>
              )}
            </div>

            {/* Social Share Trigger */}
            <button
              id="navbar-share-btn"
              onClick={onOpenShare}
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Share Portfolio"
              aria-label="Share Portfolio"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Resume Button */}
            <button
              id="navbar-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-sm"
              title="View Official Resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-1">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-md text-slate-600 dark:text-slate-300"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
            <button
              onClick={() => { onOpenResume(); setMobileMenuOpen(false); }}
              className="flex-1 py-2 rounded-md bg-emerald-600 text-white text-xs font-semibold text-center flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Official Resume</span>
            </button>
            <button
              onClick={() => { onOpenShare(); setMobileMenuOpen(false); }}
              className="px-3 py-2 rounded-md border border-slate-300 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

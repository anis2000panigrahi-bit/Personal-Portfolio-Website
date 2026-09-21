/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EducationSection } from './components/EducationSection';
import { SkillsDashboard } from './components/SkillsDashboard';
import { ProjectGallery } from './components/ProjectGallery';
import { BlogSection } from './components/BlogSection';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { SocialShareModal } from './components/SocialShareModal';
import { BlogPost, UserRole } from './types';

export default function App() {
  // Theme state with default to dark or system preference, persisting in localStorage
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [activeSection, setActiveSection] = useState<string>('hero');
  const [userRole, setUserRole] = useState<UserRole>('guest');
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [shareOpen, setShareOpen] = useState<boolean>(false);
  const [selectedPostToShare, setSelectedPostToShare] = useState<BlogPost | null>(null);

  // Sync dark mode class on HTML document root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPostShare = (post: BlogPost) => {
    setSelectedPostToShare(post);
    setShareOpen(true);
  };

  const handleOpenGeneralShare = () => {
    setSelectedPostToShare(null);
    setShareOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-700 dark:selection:text-emerald-300 font-sans transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        userRole={userRole}
        setUserRole={setUserRole}
        onOpenResume={() => setResumeOpen(true)}
        onOpenShare={handleOpenGeneralShare}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onNavigate={handleNavigate}
        />

        <EducationSection />

        <SkillsDashboard />

        <ProjectGallery />

        <BlogSection
          onSharePost={handleOpenPostShare}
        />

        <AnalyticsDashboard
          userRole={userRole}
          setUserRole={setUserRole}
        />

        <ContactForm />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setResumeOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <SocialShareModal
        isOpen={shareOpen}
        onClose={() => {
          setShareOpen(false);
          setSelectedPostToShare(null);
        }}
        sharedPost={selectedPostToShare}
      />
    </div>
  );
}

import React from 'react';
import { 
  GraduationCap, 
  Award, 
  User, 
  CheckCircle, 
  Languages, 
  Compass, 
  Calendar, 
  ShieldAlert,
  FileCheck2,
  BookOpen
} from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA, PERSONAL_INFO } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-20 bg-slate-50/60 dark:bg-slate-900/40 border-t border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones & Certifications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education, Certifications & Credentials
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Official academic records, competitive certifications, and personal background as documented in Anis Kumar Panigrahi's resume.
          </p>
        </div>

        {/* 1. Education Qualification Timeline */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>Education Qualification</span>
            </h3>
            <span className="text-xs text-slate-500 font-medium">BSE &rarr; CHSE &rarr; B.Tech</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION_DATA.map((item, index) => (
              <div 
                key={item.id}
                className="rounded-xl p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-emerald-500/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                      {item.year}
                    </span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      {item.scoreOrStatus}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                    {item.degree}
                  </h4>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                    {item.boardOrUniversity}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                    {item.highlight}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Core Focus:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.subjects.map((sub, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-0.5 rounded text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Certifications Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Industry & Academic Certifications</span>
            </h3>
            <span className="text-xs text-slate-500 font-medium">3 Verified Professional Credentials</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div
                key={cert.id}
                className="rounded-xl p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                      <CheckCircle className="w-3 h-3" />
                      {cert.verificationBadge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {cert.periodOrYear}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                    Competencies:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Personal Details & Formal Declaration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Personal Details Card */}
          <div className="lg:col-span-6 rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <User className="w-4 h-4 text-emerald-500" />
              <span>Personal Details (From Resume)</span>
            </h3>

            <div className="grid grid-cols-2 gap-y-3.5 gap-x-4 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Father's Name</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                  {PERSONAL_INFO.fatherName}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Date of Birth</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                  {PERSONAL_INFO.dob}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Nationality</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                  {PERSONAL_INFO.nationality}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Gender</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                  {PERSONAL_INFO.gender}
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-slate-400 block font-medium mb-1">Languages Spoken</span>
                <div className="flex flex-wrap gap-1.5">
                  {PERSONAL_INFO.languages.map((lang, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-xs flex items-center gap-1"
                    >
                      <Languages className="w-3 h-3 text-slate-400" />
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div className="col-span-2">
                <span className="text-slate-400 block font-medium mb-1">Hobbies & Interests</span>
                <div className="flex flex-wrap gap-1.5">
                  {PERSONAL_INFO.hobbies.map((hobby, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-medium text-xs flex items-center gap-1"
                    >
                      <Compass className="w-3 h-3 text-emerald-500" />
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Formal Declaration Box */}
          <div className="lg:col-span-6 rounded-xl p-6 bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] uppercase font-bold tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  <FileCheck2 className="w-3 h-3" />
                  Verified Declaration
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Date: {PERSONAL_INFO.declarationDate}
                </span>
              </div>

              <h4 className="font-bold text-base text-white">
                Declaration of Truthfulness
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic bg-slate-800/40 p-3.5 rounded-lg border border-slate-700/50">
                "I hereby declare that the information provided above is true to the best of my knowledge and belief."
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <div className="font-extrabold text-sm tracking-wide text-white uppercase">
                  (ANIS KUMAR PANIGRAHI)
                </div>
                <div className="text-[11px] text-slate-400">
                  Candidate Signature &middot; Baleswar, Odisha
                </div>
              </div>
              <div className="w-9 h-9 rounded-full bg-emerald-900/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle className="w-5 h-5" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

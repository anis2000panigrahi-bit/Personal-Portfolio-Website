import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
ANIS KUMAR PANIGRAHI
B.Tech CSE (AI & ML) Student
Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
Address: ${PERSONAL_INFO.fullAddress}

CAREER OBJECTIVE
${PERSONAL_INFO.objective}

EDUCATION QUALIFICATION
- B.Tech CSE (AI & ML) | In progress | Student
- 12th | CHSE | 2023 | 75%
- 10th | BSE | 2021 | 75%

TECHNICAL SKILLS
Python • SQL • Git • Machine Learning • Artificial Intelligence • Data Analytics • Problem Solving • Coding • Time Management

CERTIFICATIONS
• Cloud Computing – NPTEL
• Generative AI – Coursera
• Career Edge – Young Professional – TCS iON

ACADEMIC & PROJECT EXPERIENCE
• AI/ML & Python Projects – Built academic and software projects using Python and applied machine-learning concepts.
• Data Analytics Dashboard – Created a dashboard to visualize insights and support data-driven interpretation.
• Predictive Analysis Model – Developed a machine-learning model for predictive analysis.

PERSONAL DETAILS
Father's Name: ${PERSONAL_INFO.fatherName} | Nationality: ${PERSONAL_INFO.nationality}
Date of Birth: ${PERSONAL_INFO.dob} | Languages: ${PERSONAL_INFO.languages.join(', ')}
Gender: ${PERSONAL_INFO.gender} | Hobbies: ${PERSONAL_INFO.hobbies.join(', ')}

DECLARATION
I hereby declare that the information provided above is true to the best of my knowledge and belief.
Date: ${PERSONAL_INFO.declarationDate}
(ANIS KUMAR PANIGRAHI)
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadTxt = () => {
    const resumeText = `
ANIS KUMAR PANIGRAHI
B.Tech CSE (AI & ML) Student
Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
Address: ${PERSONAL_INFO.fullAddress}

CAREER OBJECTIVE
${PERSONAL_INFO.objective}

EDUCATION QUALIFICATION
Exam / Degree          Board / University    Year    % / Status
B.Tech CSE (AI & ML)   In progress           -       Student
12th                   CHSE                  2023    75%
10th                   BSE                   2021    75%

TECHNICAL SKILLS
Python • SQL • Git • Machine Learning • Artificial Intelligence • Data Analytics • Problem Solving • Coding • Time Management

CERTIFICATIONS
• Cloud Computing – NPTEL
• Generative AI – Coursera
• Career Edge – Young Professional – TCS iON

ACADEMIC & PROJECT EXPERIENCE
• AI/ML & Python Projects – Built academic and software projects using Python and applied machine-learning concepts.
• Data Analytics Dashboard – Created a dashboard to visualize insights and support data-driven interpretation.
• Predictive Analysis Model – Developed a machine-learning model for predictive analysis.

PERSONAL DETAILS
Father's Name: ${PERSONAL_INFO.fatherName}
Date of Birth: ${PERSONAL_INFO.dob}
Gender: ${PERSONAL_INFO.gender}
Nationality: ${PERSONAL_INFO.nationality}
Languages: ${PERSONAL_INFO.languages.join(', ')}
Hobbies: ${PERSONAL_INFO.hobbies.join(', ')}

DECLARATION
I hereby declare that the information provided above is true to the best of my knowledge and belief.
Date: ${PERSONAL_INFO.declarationDate}
(ANIS KUMAR PANIGRAHI)
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Anis_Kumar_Panigrahi_Resume_${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in print:p-0 print:bg-white">
      <div className="rounded-2xl max-w-4xl w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[95vh] flex flex-col print:border-none print:shadow-none print:max-h-none print:rounded-none">
        
        {/* Header with Tools */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="font-bold text-sm text-slate-900 dark:text-white">
              Official Resume Preview (Based on Uploaded Resume)
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
              Verified
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-1"
              title="Copy text representation"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center gap-1"
              title="Download TXT"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Text</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Exact Resume Content Container */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 print:p-0 print:text-black print:bg-white text-xs sm:text-sm space-y-6">
          
          {/* Header Title Section */}
          <div className="text-center space-y-1.5 border-b-2 border-slate-900 dark:border-slate-300 pb-4">
            <h1 className="text-2xl sm:text-3xl font-black tracking-wider text-slate-900 dark:text-white uppercase font-serif">
              ANIS KUMAR PANIGRAHI
            </h1>
            <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              B.Tech CSE (AI &amp; ML) Student
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 flex flex-wrap items-center justify-center gap-x-2">
              <span>9692432959</span>
              <span>|</span>
              <a href="mailto:anispanigrahi2004@gmail.com" className="text-emerald-700 dark:text-emerald-400 hover:underline">
                anispanigrahi2004@gmail.com
              </a>
              <span>|</span>
              <span>Baleswar, Odisha, India</span>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Sundiadihi, P.O. Garasang, Via Ada, Baleswar, Odisha, India
            </div>
          </div>

          {/* CAREER OBJECTIVE */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-0.5">
              CAREER OBJECTIVE
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
              Motivated B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning,
              with working knowledge of Python, SQL, Git, data analytics, and machine learning. Seeking an entry-level
              opportunity to apply problem-solving skills, contribute to practical projects, and grow in a dynamic organization.
            </p>
          </div>

          {/* EDUCATION QUALIFICATION */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-0.5">
              EDUCATION QUALIFICATION
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-300 dark:border-slate-700">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
                  <tr className="border-b border-slate-300 dark:border-slate-700">
                    <th className="py-2 px-3 font-bold">Exam / Degree</th>
                    <th className="py-2 px-3 font-bold">Board / University</th>
                    <th className="py-2 px-3 font-bold">Year</th>
                    <th className="py-2 px-3 font-bold">% / Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-slate-800 dark:text-slate-200">
                  <tr>
                    <td className="py-2 px-3 font-medium">B.Tech CSE (AI &amp; ML)</td>
                    <td className="py-2 px-3">In progress</td>
                    <td className="py-2 px-3 font-mono">-</td>
                    <td className="py-2 px-3 font-semibold text-emerald-600 dark:text-emerald-400">Student</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">12th</td>
                    <td className="py-2 px-3">CHSE</td>
                    <td className="py-2 px-3 font-mono">2023</td>
                    <td className="py-2 px-3 font-semibold">75%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">10th</td>
                    <td className="py-2 px-3">BSE</td>
                    <td className="py-2 px-3 font-mono">2021</td>
                    <td className="py-2 px-3 font-semibold">75%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* TECHNICAL SKILLS */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-0.5">
              TECHNICAL SKILLS
            </h2>
            <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              Python &bull; SQL &bull; Git &bull; Machine Learning &bull; Artificial Intelligence &bull; Data Analytics &bull; Problem Solving &bull; Coding &bull; Time Management
            </p>
          </div>

          {/* CERTIFICATIONS */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-0.5">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-800 dark:text-slate-200 space-y-1">
              <li><strong>Cloud Computing</strong> &ndash; NPTEL</li>
              <li><strong>Generative AI</strong> &ndash; Coursera</li>
              <li><strong>Career Edge &ndash; Young Professional</strong> &ndash; TCS iON</li>
            </ul>
          </div>

          {/* ACADEMIC & PROJECT EXPERIENCE */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-0.5">
              ACADEMIC &amp; PROJECT EXPERIENCE
            </h2>
            <ul className="space-y-2 text-xs text-slate-800 dark:text-slate-200">
              <li className="flex items-start gap-2">
                <span className="text-slate-900 dark:text-white font-bold">&bull;</span>
                <div>
                  <strong>AI/ML &amp; Python Projects</strong> &ndash; Built academic and software projects using Python and applied machine-learning concepts.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-900 dark:text-white font-bold">&bull;</span>
                <div>
                  <strong>Data Analytics Dashboard</strong> &ndash; Created a dashboard to visualize insights and support data-driven interpretation.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-900 dark:text-white font-bold">&bull;</span>
                <div>
                  <strong>Predictive Analysis Model</strong> &ndash; Developed a machine-learning model for predictive analysis.
                </div>
              </li>
            </ul>
          </div>

          {/* PERSONAL DETAILS */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-0.5">
              PERSONAL DETAILS
            </h2>
            <div className="grid grid-cols-2 gap-y-1.5 text-xs text-slate-800 dark:text-slate-200">
              <div><strong>Father's Name:</strong> Sanjeeb Kumar Panigrahi</div>
              <div><strong>Nationality:</strong> Indian</div>
              <div><strong>Date of Birth:</strong> 25 March 2006</div>
              <div><strong>Languages:</strong> Odia, Hindi, English</div>
              <div><strong>Gender:</strong> Male</div>
              <div><strong>Hobbies:</strong> Cricket, travelling, exploring</div>
            </div>
          </div>

          {/* DECLARATION */}
          <div className="space-y-4 pt-2 border-t border-slate-300 dark:border-slate-700">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              DECLARATION
            </h2>
            <p className="text-xs text-slate-700 dark:text-slate-300 italic">
              I hereby declare that the information provided above is true to the best of my knowledge and belief.
            </p>

            <div className="flex items-end justify-between pt-4">
              <div className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                Date: 25 August 2026
              </div>
              <div className="text-right">
                <div className="text-xs font-bold tracking-wider text-slate-900 dark:text-white uppercase font-mono">
                  (ANIS KUMAR PANIGRAHI)
                </div>
                <div className="text-[10px] text-slate-500">Candidate Signature</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
